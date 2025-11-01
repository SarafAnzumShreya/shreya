---
title: "DB-FGA-Net: Dual Backbone Frequency Gated Attention Network for Multi-Class Brain Tumor Classification with Grad-CAM Interpretability"
authors:
- admin
date: "2025-10-23T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-10-23T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: I present DB-FGA-Net, a double-backbone network integrating VGG16 and Xception with a Frequency-Gated Attention (FGA) Block to capture complementary local and global features for brain tumor classification. Unlike previous studies, my model achieves state-of-the-art performance without data augmentation, demonstrating robustness to variably sized datasets. For transparency, I integrated Grad-CAM to visualize tumor regions, bridging model predictions with clinical interpretability. The framework achieves 99.24% accuracy on the 7K-DS dataset for 4-class classification, and I developed a GUI for real-time use, supporting reliable clinical translation in brain tumor diagnosis.

# Summary. An optional shortened abstract.
summary: I propose DB-FGA-Net, an augmentation-free deep learning model for interpretable brain tumor classification, achieving state-of-the-art results with Grad-CAM visualizations.

tags:
- Deep Learning
- Machine Learning
- Medical Imaging

featured: true

hugoblox:
  ids:
    arxiv: 2510.20299

links:
- type: preprint
  provider: arxiv
  id: 2510.20299
- type: pdf
  url: https://arxiv.org/pdf/2510.20299
- type: html
  url: https://arxiv.org/html/2510.20299
- type: source
  url: https://arxiv.org/src/2510.20299
# - type: code
#   url: ""
# - type: slides
#   url: ""
# - type: dataset
#   url: ""
# - type: poster
#   url: ""
# - type: video
#   url: ""
- type: custom
  label: DOI
  url: https://doi.org/10.48550/arXiv.2510.20299

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/person-holding-white-ceramic-plate-with-brown-liquid-0gO3-bvhhM8)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- medical-imaging

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

This work builds on my previous conference papers on brain tumor detection, advancing to an interpretable, augmentation-free model for clinical deployment.

> [!NOTE]
> Create your slides in Markdown - click the *Slides* button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
