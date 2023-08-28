---
title: "Iteration Complexity and Finite-Time Efficiency of Adaptive Sampling Trust-Region Methods for Stochastic Derivative-Free Optimization"
authors:
- admin
- Sara Shashaani
date: "2023-06-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv*"
publication_short: ""

abstract: Adaptive-sampling trust-region method or ASTRO-DF is a paramount algorithm for stochastic derivative-free optimization. Its salient feature is an easy-to-understand-and-implement concept of maintaining ``just enough" replications when evaluating points throughout the search to guarantee almost-sure convergence to a first-order critical point. To reduce the dependence of ASTRO-DF on the problem dimension and boost its performance in finite time, we present two key refinements, namely, (i) local models with diagonal Hessians constructed on interpolation points based on a coordinate basis and (ii) direct search using the interpolation points whenever possible. We demonstrate that the refinements in (i) and (ii) retain the convergence guarantees while matching existing results on iteration complexity. Uniquely, our $\mathcal{O}(\epsilon^{-2})$ iteration complexity results hold without placing assumptions on iterative models' quality and their independence from function estimates. Numerical experimentation on a testbed of problems and comparison against existing popular algorithms reveals the computational advantage of ASTRO-DF due to the proposed refinements.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Source Themes
featured: True

# links:
# - name: ""
#   url: ""
url_pdf: https://arxiv.org/pdf/2305.10650.pdf
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
