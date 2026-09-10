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

abstract: Brain tumors are a challenging problem in neuro-oncology, where early and precise diagnosis is important for successful treatment. Deep learning-based brain tumor classification methods often rely on heavy data augmentation which can limit generalization and trust in clinical applications. In this paper, we propose a double-backbone network integrating VGG16 and Xception with a Frequency-Gated Attention (FGA) Block to capture complementary local and global features. Our model achieves highly competitive performance without augmentation which demonstrates robustness to variably sized and distributed datasets. For further transparency, Grad-CAM is integrated to visualize the tumor regions based on which the model is giving prediction, bridging the gap between model prediction and clinical interpretability. The proposed framework achieves 99.24% accuracy on the 7K-DS dataset for the 4-class setting, along with 98.68% and 99.85% in the 3-class and 2-class settings, respectively. On the independent 3K-DS dataset, the model generalizes with 95.77% accuracy, outperforming several baseline methods under the same experimental setting. To further support clinical usability, we developed a graphical user interface (GUI) that provides real-time classification and Grad-CAM-based tumor localization. These findings suggest that augmentation-free, interpretable, and deployable deep learning models such as DB-FGA-Net hold strong potential for reliable clinical translation in brain tumor diagnosis.

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

