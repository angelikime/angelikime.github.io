---
layout: default
title: Contact
permalink: /contact/
---
<section class="section" style="padding-top:64px; padding-bottom:8px;">
  <h1 style="font-family:'Fraunces',serif; font-size:36px; font-weight:500; margin-bottom:14px;">Let's work together</h1>
  <p style="color:var(--ink-soft); font-size:15px; max-width:460px;">Tell me a bit about your project — brand, packaging, print or event materials — and I'll get back to you within 1–2 business days.</p>
</section>

<div class="direct">
  <a href="mailto:{{ site.email }}" class="email">{{ site.email }}</a>
  <div class="social mono">
    <a href="{{ site.social.linkedin }}">LinkedIn</a>
    <a href="{{ site.social.instagram }}">Instagram</a>
    <a href="{{ site.social.upwork }}">Upwork</a>
  </div>
</div>

<!--
  This form posts to Formspree (free tier, no backend needed).
  Setup: create a free account at formspree.io, create a form,
  and replace YOUR_FORM_ID below with the ID they give you.
-->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <div class="row-2">
    <div class="field"><label>Name</label><input type="text" name="name" placeholder="Your name" required></div>
    <div class="field"><label>Email</label><input type="email" name="email" placeholder="you@company.com" required></div>
  </div>
  <div class="field">
    <label>What do you need?</label>
    <select name="project_type">
      <option>Brand identity</option>
      <option>Packaging design</option>
      <option>Print &amp; editorial</option>
      <option>Event materials</option>
      <option>Something else</option>
    </select>
  </div>
  <div class="field"><label>Project details</label><textarea name="message" placeholder="Tell me about your timeline, scope and budget..." required></textarea></div>
  <button type="submit" class="btn btn-primary">Send message &rarr;</button>
</form>

<section class="section" style="padding-bottom:64px;">
  <h2 style="font-family:'Fraunces',serif; font-size:22px; font-weight:500; margin-bottom:20px;">Good to know</h2>
  <div class="faq-item"><h4>Response time</h4><p>I reply to all enquiries within 1–2 business days.</p></div>
  <div class="faq-item"><h4>Availability</h4><p>Based in Vienna, working remotely with clients across Europe — happy to hop on a call in CET hours.</p></div>
  <div class="faq-item"><h4>Project types</h4><p>Fixed-scope projects and ongoing retainers both welcome.</p></div>
</section>
