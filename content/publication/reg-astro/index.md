---
title: "Adaptive Regularization within Trust Region Methods for Stochastic Nonconvex Optimization"
authors:
- admin
- Sara Shashaani
- Quoc Tran-Dinh
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
publication: "Under Review at *Mathematical Programming*"
publication_short: ""

abstract: We propose a stochastic nonconvex optimization algorithm that achieves almost sure $\tilde{\mathcal{O}}(\epsilon^{-1.5})$ iteration complexity for problems with smooth objective functions and gradients only observable with noise. The mean-zero stochastic noise is decision-dependent and has unbounded support with subexponential tail, allowing our framework to cover a broad class of problems. The improved almost sure iteration complexity is achieved with a new variant of the adaptive sampling trust-region optimization (ASTRO) augmented with an adaptively regularized local model, which we term Reg-ASTRO. Adaptive sampling ensures that the estimation precision is aligned with a measure of stationarity, so that iterates closer to stationarity trigger higher accuracy requirement for sampling. A key analytical challenge arises because the trust-region radius and regularization are coupled and not determined prior to gradient estimation at each iteration. We further establish an almost sure $\tilde{\mathcal{O}}(\epsilon^{-4.5})$ sample complexity for Reg-ASTRO, which improves to $\tilde{\mathcal{O}}(\epsilon^{-3.5})$ under stronger regularity conditions and use of common random numbers, substantially outperforming first-order methods in theory and numerical experiments.
# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Source Themes
featured: True

# links:
# - name: ""
#   url: ""
url_pdf: 'https://arxiv.org/abs/2604.15457'
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
