---
# Leave the homepage title empty to use the site title
title: Yunsoo Ha
date: 2024-4-20
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: collection
    id: publications
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
    
  - block: collection
    id: experience
    content:
      title: Experience
      filters:
        folders:
          - experience
      sort: "date_start"
      view: card
      design:
        columns: '2'
 
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
