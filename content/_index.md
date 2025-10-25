---
# Leave the homepage title empty to use the site title
title: ''
date: 2025-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: ''
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: 'About Me'
        education: 'Education'
        interests: 'Research Interests'
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        I am a B.Sc. student in Electronics & Telecommunication Engineering at Rajshahi University of Engineering & Technology (RUET), passionate about applying machine learning to real-world challenges. My focus lies in deep learning, particularly convolutional neural networks (CNNs) for medical imaging, such as brain tumor detection and white blood cell analysis, as well as assistive technologies like real-time currency detection for the visually impaired. I also explore hybrid models and digitization for societal impact.

        Please reach out to collaborate or discuss my work! 😃
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: ''
      count: 5
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #   filters:
  #     folders:
  #       - events
  #   design:
  #     view: card
  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      page_type: blog
      count: 3
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      spacing:
        padding: [0, 0, 0, 0]
  # - block: cta-card
  #   demo: false # Disabled for personal site, not a demo
  #   content:
  #     title: ''
  #     text: ''
  #     button:
  #       text: ''
  #       url: ''
  #   design:
  #     card:
  #       css_class: 'bg-primary-300 dark:bg-primary-700'
  #       css_style: ''

---