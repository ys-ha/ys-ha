---
title: "Complexity of Zeroth- and First-order Stochastic Trust-Region Algorithms"
authors:
- admin
- Sara Shashaani
- Raghu Pasupathy
date: "2025-08-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "Under minor revision at *SIAM Journal on Optimization*"
publication_short: ""

abstract: Model update (MU) and candidate evaluation (CE) are classical steps incorporated inside many stochastic trust-region (TR) algorithms. The sampling effort exerted within these steps, often decided with the aim of controlling model error, largely determines a stochastic TR algorithm's sample complexity. Given that MU and CE are amenable to variance reduction, we investigate the effect of incorporating common random numbers (CRN) within MU and CE on complexity. Using ASTRO and ASTRO-DF as prototype first-order and zeroth-order families of algorithms, we demonstrate that CRN's effectiveness leads to a range of complexities depending on sample-path regularity and the oracle order. For instance, we find that in first-order oracle settings with smooth sample paths, CRN's effect is pronounced -- ASTRO with CRN achieves $O(\epsilon^{-2})$ a.s. sample complexity compared to O~(ϵ−6) a.s. in the generic no-CRN setting. By contrast, CRN's effect is muted when the sample paths are not Lipschitz, with the sample complexity improving from $O(\epsilon^{-6})$ a.s. to $O(\epsilon^{-5})$ and $O(\epsilon^{-4})$ a.s. in the zeroth- and first-order settings, respectively. Since our results imply that improvements in complexity are largely inherited from generic aspects of variance reduction, e.g., finite-differencing for zeroth-order settings and sample-path smoothness for first-order settings within MU, we anticipate similar trends in other contexts.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Source Themes
featured: True

# links:
# - name: ""
#   url: ""
url_pdf: 'https://arxiv.org/abs/2405.20116'
url_code: 'https://github.com/simopt-admin/simopt'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
