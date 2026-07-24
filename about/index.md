---
layout: default
title: About
permalink: /about/
---
<section class="section about-block" style="padding-top:64px;">
  <div class="avatar">AK</div>
  <div>
    <h1 style="font-family:'Fraunces',serif; font-size:36px; font-weight:500; margin-bottom:16px;">About</h1>
    <p>I'm Angeliki, a graphic designer with ten years' experience across branding, packaging and print, gained working with food &amp; beauty brands and Europe's largest tech conferences.</p>
    <p>Now based in Vienna and working remotely with clients across Europe — comfortable joining a team's existing brand system or building one from a blank page.</p>
    <div class="loc"><span class="crossmark"></span><span class="mono">Vienna, Austria — available for remote &amp; on-site work</span></div>
  </div>
</section>

<section class="section" style="border-top:1px solid var(--line);">
  <h2 style="font-family:'Fraunces',serif; font-size:22px; font-weight:500; margin-bottom:20px;">Experience</h2>
  <div class="timeline">
    {% for project in site.projects %}
      <div class="t-row">
        <span class="yr">{{ project.duration }}</span>
        <div><h4><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h4><p>{{ project.excerpt }}</p></div>
      </div>
    {% endfor %}
  </div>
</section>

<section class="section" style="border-top:1px solid var(--line);">
  <h2 style="font-family:'Fraunces',serif; font-size:22px; font-weight:500; margin-bottom:20px;">Tools</h2>
  <div class="tools">
    <span class="tool">Illustrator</span>
    <span class="tool">InDesign</span>
    <span class="tool">Photoshop</span>
    <span class="tool">Figma</span>
    <span class="tool">After Effects</span>
  </div>
</section>

<div class="cta-row" style="padding-bottom:56px;">
  <a href="/assets/angeliki-portfolio.pdf" class="btn btn-primary">Download portfolio PDF</a>
  <a href="{{ '/contact/' | relative_url }}" class="btn btn-ghost">Get in touch &rarr;</a>
</div>
