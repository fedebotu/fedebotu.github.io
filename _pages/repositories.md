---
layout: page
permalink: /repositories/
title: Software
description: Selected software libraries and open source projects
nav: true
nav_order: 3
---
<!-- ## GitHub users

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>
{% endif %}

--- -->

## Libraries
Libraries I have developed and maintain

{% if site.data.repositories.software %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.software %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %} 

---

## Random
Random repositories, some useful, some not

{% if site.data.repositories.software_random %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.software_random %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %} 

---

## Contributions
Some selected smaller contributions to other projects

{% if site.data.repositories.software_contributions %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.software_contributions %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %}