---
layout: page
permalink: /repositories/
title: Repositories
description: Selected software repos and open source projects
nav: true
nav_order: 3
---

<!-- ## GitHub users

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>
{% endif %}

--- -->

## Software Libraries

Libraries I have developed and maintain

{% if site.data.repositories.software %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.software %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Project Repos

Project repositories

{% if site.data.repositories.project_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.project_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Random

Random repositories, some useful, some not

{% if site.data.repositories.software_random %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.software_random %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Contributions

Some selected smaller contributions to other projects

{% if site.data.repositories.software_contributions %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.software_contributions %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

---

## Community

Last but not least: we created the [AI4CO](https://github.com/ai4co) (AI for Combinatorial Optimization) open research community!

<div align="center">
    <a href="https://github.com/ai4co">
        <img src="https://raw.githubusercontent.com/ai4co/assets/main/svg/ai4co_animated_full.svg" alt="AI4CO Logo" style="width: 30%; height: auto;">
    </a>
</div>
