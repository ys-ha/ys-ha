---
# Leave the homepage title empty to use the site title
title: Yunsoo Ha
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: collection
    content:
      title: Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation  
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Graduate Assistant
          company: North Carolina State University
          company_url: ''
          company_logo: 
          location: NC, USA
          date_start: '2019-09-01'
          date_end: ''
          description: 
        - title: Givens Associate (Summer Internship)
          company: Argonne National Laboratory
          company_url: ''
          company_logo: anl
          location: IL, USA
          date_start: '2022-06-01'
          date_end: '2022-08-01'
          description: During my second summer internship, I had the opportunity to work on a project similar to the one I was involved during the first internship. Specifically, I was responsible for designing and testing a Gaussian process-based trust region algorithm tailored for addressing noisy derivative-free optimization problems.
        - title: Givens Associate (Summer Internship)
          company: Argonne National Laboratory
          company_url: ''
          company_logo: anl
          location: Virtual
          date_start: '2021-05-01'
          date_end: '2021-08-01'
          description: I had the privilege of being actively involved in a project focused on designing an efficient stochastic optimizer for variational hybrid Quantum-Classical algorithms. As part of this endeavor, I developed and tested a randomized coordinate algorithm that incorporated adaptive sampling techniques, thus serving as a reliable stochastic optimizer for the project.
    design:
      columns: '2'
    
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false

  
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: 
      # Contact (add or remove contact options as necessary)
      email: yha3 -.- at -.- ncsu.edu
      address:
        street: 915 Partners Way
        city: Raleigh
        region: NC
        postcode: '27606'
        country: United States
        country_code: US
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'
---
