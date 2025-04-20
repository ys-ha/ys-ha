---
title: "Two-Stage Estimation and Variance Modeling for Latency-Constrained Variational Quantum Algorithms"
authors:
- admin
- Sara Shashaani
- Matt Menickelly
date: "2024-11-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*INFORMS Journal on Computing*"
publication_short: ""

abstract: 'The quantum approximate optimization algorithm (QAOA) has enjoyed increasing attention in noisy, intermediate-scale quantum computing with its application to combinatorial optimization problems. QAOA has the potential to demonstrate a quantum advantage for NP-hard combinatorial optimization problems. As a hybrid quantum-classical algorithm, the classical component of QAOA resembles a simulation optimization problem in which the simulation outcomes are attainable only through a quantum computer. The simulation that derives from QAOA exhibits two unique features that can have a substantial impact on the optimization process: (i) the variance of the stochastic objective values typically decreases in proportion to the optimality gap, and (ii) querying samples from a quantum computer introduces an additional latency overhead. In this paper, we introduce a novel stochastic trust-region method derived from a derivative-free, adaptive sampling trust-region optimization method intended to efficiently solve the classical optimization problem in QAOA by explicitly taking into account the two mentioned characteristics. The key idea behind the proposed algorithm involves constructing two separate local models in each iteration: a model of the objective function and a model of the variance of the objective function. Exploiting the variance model allows us to restrict the number of communications with the quantum computer and also helps navigate the nonconvex objective landscapes typical in QAOA optimization problems. We numerically demonstrate the superiority of our proposed algorithm using the SimOpt library and Qiskit when we consider a metric of computational burden that explicitly accounts for communication costs.'

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Source Themes
featured: True

# links:
# - name: ""
#   url: ""
url_pdf: 'https://pubsonline.informs.org/doi/abs/10.1287/ijoc.2024.0575'
url_code: 'https://github.com/INFORMSJoC/2024.0575'

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
