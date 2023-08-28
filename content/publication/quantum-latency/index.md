---
title: "Latency Considerations for Stochastic Optimizers in Variational Quantum Algorithms"
authors:
- Matt Menickelly
- admin 
- Matthew Otten
date: "2022-10-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "*Quantum*"
publication_short: ""

abstract: Variational quantum algorithms, which have risen to prominence in the noisy intermediate-scale quantum setting, require the implementation of a stochastic optimizer on classical hardware. To date, most research has employed algorithms based on the stochastic gradient iteration as the stochastic classical optimizer. In this work we propose instead using stochastic optimization algorithms that yield stochastic processes emulating the dynamics of classical deterministic algorithms. This approach results in methods with theoretically superior worstcase iteration complexities, at the expense of greater per-iteration sample (shot) complexities. We investigate this trade-off both theoretically and empirically and conclude that preferences for a choice of stochastic optimizer should explicitly depend on a function of both latency and shot execution times.


# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Source Themes
featured: True

# links:
# - name: ""
#   url: ""
url_pdf: https://quantum-journal.org/papers/q-2023-03-16-949/pdf/
url_code: 

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
