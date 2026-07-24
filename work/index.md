---
layout: default
title: Work
permalink: /work/
---
<section class="section" style="padding-top:64px;">
  <div class="section-head">
    <h2>Work</h2>
  </div>

  <div class="filters">
    <button data-filter="all" class="active">All</button>
    <button data-filter="Branding">Branding</button>
    <button data-filter="Packaging">Packaging</button>
    <button data-filter="Print">Print</button>
    <button data-filter="Digital">Digital</button>
    <button data-filter="Events">Events</button>
  </div>

  <div class="grid">
    {% for project in site.projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>
