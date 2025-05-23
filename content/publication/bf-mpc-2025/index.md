---
title: "Adaptive Sampling-Based Bi-Fidelity Stochastic Trust Region Method for Derivative-Free Stochastic Optimization"
authors:
- admin
- Juliane Mueller
date: "2024-08-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "Under major revision at *Mathematical Programming Computation*"
publication_short: ""

abstract: 'Bi-fidelity stochastic optimization is increasingly favored for streamlining optimization processes by employing a cost-effective low-fidelity (LF) function, with the goal of optimizing a more expensive high-fidelity (HF) function. In this paper, we introduce ASTRO-BFDF, a new adaptive sampling trust region method specifically designed for solving unconstrained bi-fidelity stochastic derivative-free optimization problems. Within ASTRO-BFDF, the LF function serves two purposes: first, to identify better iterates for the HF function when a high correlation between them is indicated by the optimization process, and second, to reduce the variance of the HF function estimates by Bi-fidelity Monte Carlo (BFMC). In particular, the sample sizes are dynamically determined with the option of employing either crude Monte Carlo or BFMC, while balancing optimization error and sampling error. We demonstrate that the iterates generated by ASTRO-BFDF converge to the first-order stationary point almost surely. Additionally, we numerically demonstrate the superiority of our proposed algorithm by testing it on synthetic problems and simulation optimization problems with discrete event simulations.'
# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Source Themes
featured: True

# links:
# - name: ""
#   url: ""
url_pdf: 'https://arxiv.org/abs/2408.04625'
url_code: ""

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
