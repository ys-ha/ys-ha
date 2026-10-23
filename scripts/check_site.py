"""Check the generated portfolio's local links, assets, and content coverage."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re
import sys


class Document(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids = set()
        self.references = []
        self.h1_count = 0
        self.publications = 0
        self.feed(source)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'h1':
            self.h1_count += 1
        if 'publication-row' in attrs.get('class', '').split():
            self.publications += 1
        attribute = 'href' if tag in ('a', 'link') else 'src' if tag in ('img', 'script') else None
        if attribute and attrs.get(attribute):
            self.references.append(attrs[attribute])


def check(root):
    docs = {p: Document(p.read_text()) for p in root.rglob('*.html')}
    failures = []
    checked = 0
    for path, doc in docs.items():
        if path.name == 'google2bb40dc9afb646c3.html':
            continue
        if doc.h1_count != 1:
            failures.append(f'{path.relative_to(root)}: expected one main heading, found {doc.h1_count}')
        for reference in doc.references:
            url = urlsplit(reference)
            if url.scheme or url.netloc:
                continue
            target = (root / unquote(url.path).lstrip('/')) if url.path.startswith('/') else path.parent / unquote(url.path) if url.path else path
            if target.is_dir():
                target /= 'index.html'
            target = target.resolve()
            checked += 1
            if not target.is_file():
                failures.append(f'{path.relative_to(root)}: missing {reference}')
            elif url.fragment and target in docs and unquote(url.fragment) not in docs[target].ids:
                failures.append(f'{path.relative_to(root)}: missing anchor {reference}')
    for css in root.rglob('*.css'):
        for reference in re.findall(r'url\([\"\']?([^\"\')]+)', css.read_text()):
            if reference.startswith(('data:', 'http:', 'https:')):
                continue
            parsed = urlsplit(reference)
            target = root / parsed.path.lstrip('/') if parsed.path.startswith('/') else css.parent / parsed.path
            if not target.is_file():
                failures.append(f'{css.relative_to(root)}: missing CSS asset {reference}')
    home = docs.get(root / 'index.html')
    archive = docs.get(root / 'publication/index.html')
    if not home or home.publications != 6:
        failures.append('Homepage must contain all 6 selected publications.')
    if not archive or archive.publications != 10:
        failures.append('Publication archive must contain all 10 existing papers.')
    for name in ('post', 'project', 'event', 'slides', 'employment', 'experience', 'admin'):
        if (root / name).is_dir():
            failures.append(f'Starter-only section is still published: {name}')
    if not (root / 'uploads/resume.pdf').read_bytes().startswith(b'%PDF'):
        failures.append('CV is missing or is not a PDF.')
    if failures:
        print('\n'.join(failures))
        return 1
    print(f'PASS: {len(docs)} HTML pages; {checked} local references; font/image/script assets; publication coverage; CV; starter exclusion.')
    return 0


if __name__ == '__main__':
    raise SystemExit(check(Path(sys.argv[1] if len(sys.argv) > 1 else 'public').resolve()))
