(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-navigation');
  function closeMenu() {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    navigation?.classList.remove('is-open');
  }
  menuButton?.addEventListener('click', () => {
    const opened = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('is-open', opened);
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  const desktopMedia = window.matchMedia('(min-width: 701px)');
  desktopMedia.addEventListener('change', event => { if (event.matches) closeMenu(); });

  document.querySelectorAll('[data-publications]').forEach(section => {
    const buttons = [...section.querySelectorAll('[data-filter]')];
    const rows = [...section.querySelectorAll('.publication-row')];
    const search = section.querySelector('[data-publication-search]');
    const count = section.querySelector('.result-count');
    const empty = section.querySelector('.empty-results');
    let activeFilter = 'all';
    function updateResults() {
      const terms = (search?.value || '').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let visible = 0;
      rows.forEach(row => {
        const content = (row.dataset.search + ' ' + row.textContent).toLocaleLowerCase();
        const matches = (activeFilter === 'all' || row.dataset.topic === activeFilter) && terms.every(term => content.includes(term));
        row.hidden = !matches;
        if (matches) visible++;
      });
      if (count) count.textContent = visible + (visible === 1 ? ' paper' : ' papers');
      if (empty) empty.hidden = visible !== 0;
      buttons.forEach(button => {
        const active = button.dataset.filter === activeFilter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
    }
    buttons.forEach(button => button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      updateResults();
    }));
    search?.addEventListener('input', updateResults);
    section.querySelector('[data-reset-filters]')?.addEventListener('click', () => {
      activeFilter = 'all';
      if (search) search.value = '';
      updateResults();
      search?.focus();
    });
    updateResults();
  });

  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const status = button.parentElement.querySelector('.copy-status');
      const label = button.querySelector('span');
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(button.dataset.copy);
        if (label) label.textContent = 'Email address copied';
        if (status) status.textContent = 'Copied to clipboard.';
      } catch {
        if (status) status.textContent = 'Please select and copy the email address above.';
      }
    });
  });

  window.addEventListener('load', () => {
    if (typeof window.renderMathInElement === 'function') {
      document.querySelectorAll('.math-content').forEach(element => {
        window.renderMathInElement(element, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false,
          strict: false
        });
      });
    }
  });
})();
