---
title: "On Common-Random-Numbers and the Complexity of Adaptive Sampling Trust-Region Methods"
authors:
- admin
- Sara Shashaani
- Raghu Pasupathy
# author_notes:
# - "Equal contribution"
# - "Equal contribution"
date: "2023-08-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*Optimization Online*"
publication_short: ""

abstract: In the context of simulation optimization (SO), Common Random Numbers (CRN) is the practice of querying the simulation-based oracle with the same random number stream at each point visited by an SO algorithm. This practice is widely believed to facilitate SO algorithm efficiency by preserving structure inherent to  the objective function and gradient sample-paths. However, CRN can present coding challenges compared to the widely-used practice of na\"ive independent sampling. Is the potential  CRN efficiency gain worth the potentially significant cost of implementation within stochastic trust-region algorithms? Toward answering this question, we characterize the consistency and complexity of a class of stochastic trust-region algorithms called ASTRO/ASTRO-DF as a function of the use of CRN. We find that the magnitude of CRN's influence depends intimately on the extent of regularity in the underlying sample paths. For instance, CRN's effect is most evident in first-order settings with smooth sample paths, where the algorithm work complexity dramatically improves from $O(\epsilon^{-6})$ to $O(\epsilon^{-2})$. This result is significant considering that the best work complexity of first-order (generic) stochastic trust-region algorithms reported in the literature is $O(\epsilon^{-6})$. CRN's effect is more muted when the sample paths are potentially discontinuous, with the work complexity improving from $O(\epsilon^{-6})$ to $O(\epsilon^{-5})$ in both zeroth-order and first-order settings. In between these extremes, CRN facilitates various improved complexities depending on prevailing conditions of sample-path regularity. We anticipate similar gains in adaptive sampling algorithms other than ASTRO/ASTRO-DF since the derived complexities stem less due to specific algorithmic mechanics, and more due to elements common to all trust-region methods. 

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Source Themes
# featured: false

# links:
# - name: ""
#   url: ""
url_pdf: https://optimization-online.org/wp-content/uploads/2023/08/astrodf-complexity-online-version.pdf
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
