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
  - block: experience
    id: experience
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
          date_end: '2023-12-01'
          description: |-
            - Analyzed the computational complexities with and without CRN in stochastic optimization and theoretically demonstrated that CRN can significantly reduce the computational burden.
            - Enhanced the finite-time performance of the adaptive sampling trust-region method for simulation optimization through four key refinements:
              - Improved the chances of identifying better solutions through the integration of direct search techniques;
              - Constructed a quadratic model with diagonal Hessian within the trust region framework;
              - Reused previously evaluated solutions and corresponding simulation outputs to reduce computational cost;
              - Applied Common RandomNumbers(CRN)toreduce the variance in function and gradient estimates.
            - Showed that the refined algorithms converge to the first-order stationary point almost surely.
            - Developed simulation optimization solvers and problems from scratch and tested them using Python [SimOpt](https://github.com/simopt-admin/simopt)
            - Developed a stochastic oracle for traffic signal control problems, analyzed its loss landscape characteristics, and evaluated the performance of various solvers in addressing the problem
        - title: Givens Associate (Summer Internship)
          company: Argonne National Laboratory
          company_url: ''
          company_logo:
          location: IL, USA
          date_start: '2022-06-01'
          date_end: '2022-08-01'
          description: |-
            - Improved the randomized coordinate algorithm with adaptive sampling as a stochastic optimizer for variational hybrid quantum-classical algorithms.
        - title: Givens Associate (Summer Internship)
          company: Argonne National Laboratory
          company_url: ''
          company_logo:
          location: Virtual
          date_start: '2021-05-01'
          date_end: '2021-08-01'
          description: |-
            - Designed a gaussian process based trust region algorithm for noisy derivative-free optimization problems.
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
