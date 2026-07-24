---
layout: default
title: Home
---
<section class="hero">
  <div class="eyebrow"><span class="crossmark"></span><span class="mono">Graphic designer — Vienna / remote</span></div>
  <h1 class="headline">Brand, print and packaging design, <em>built to hold up</em>.</h1>
  <p class="sub">{{ site.description }}</p>
  <div class="hero-cta">
    <a href="{{ '/work/' | relative_url }}" class="btn btn-primary">View the work &rarr;</a>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-ghost">Start a project</a>
  </div>
</section>

<section class="section">
  <div class="section-head">
    <h2>Selected work</h2>
    <p class="mono">Branding — Packaging — Print — Events</p>
  </div>
  <div class="grid">
    {% for project in site.projects limit:4 %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>

<section class="section" id="services">
  <div class="section-head"><h2>What I take on</h2><p class="mono">Fixed-scope or retainer</p></div>
  <div class="services">
    <div class="service"><span class="crossmark"></span><div><h4>Brand identity</h4><p>Logo, colour and type systems your team can run with.</p></div></div>
    <div class="service"><span class="crossmark"></span><div><h4>Packaging design</h4><p>Production-ready artwork, single SKU to full ranges.</p></div></div>
    <div class="service"><span class="crossmark"></span><div><h4>Print &amp; editorial</h4><p>Reports, booklets and ads, press-ready.</p></div></div>
    <div class="service"><span class="crossmark"></span><div><h4>Event materials</h4><p>Badges, banners and signage for multi-day events.</p></div></div>
  </div>
</section>

<section class="section about-block">
  <div class="avatar">AK</div>
  <div>
    <h2 style="font-family:'Fraunces',serif; font-size:28px; font-weight:500; margin-bottom:18px;">About</h2>
    <p>I'm Angeliki, a graphic designer with ten years' experience across branding, packaging and print, gained working with food &amp; beauty brands and Europe's largest tech conferences.</p>
    <p>Now based in Vienna and working remotely with clients across Europe.</p>
    <div class="loc"><span class="crossmark"></span><span class="mono">Vienna, Austria — available for remote &amp; on-site work</span></div>
  </div>
</section>

<section class="testimonial">
  <blockquote>&ldquo;Angeliki has produced our conference materials for a decade — every year, without a single missed deadline or off-brand detail.&rdquo;
  <cite class="mono">Event organiser, Voxxed Days / Devoxx</cite></blockquote>
</section>

<section class="cta">
  <h2>Have a project in mind?</h2>
  <div class="cta-row">
    <a href="mailto:{{ site.email }}" class="btn btn-primary">{{ site.email }}</a>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-ghost">Get in touch</a>
  </div>
</section>
