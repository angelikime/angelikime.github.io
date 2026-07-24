# angeliki kalandatze — portfolio (Jekyll + GitHub Pages)

## What this is
A ready-to-use site: sidebar navigation with burger menu on mobile, a Work grid
with live client-side filtering (no plugins, pure JS), and single project pages —
matching the mockups we designed. Every project is one Markdown file, no HTML editing needed.

## 1. Put this online (GitHub Pages)

1. Create a new repository on GitHub, e.g. `angelikime.github.io` (if you use this
   exact name, GitHub Pages publishes it automatically at that URL — no extra setup).
   If you use a different repo name, go to repo Settings → Pages → set source to
   the `main` branch.
2. Upload all files/folders in this project to that repository
   (drag-and-drop on github.com works fine for a first upload, or use `git push`
   if you're comfortable with the command line).
3. Wait 1-2 minutes, then visit your GitHub Pages URL.

GitHub Pages builds Jekyll sites automatically — you don't need to install anything
or run any build command yourself.

## 2. Use your own domain (angeliki.me)

In repo Settings → Pages, add your custom domain (`angeliki.me`) in the "Custom domain"
field. Then, at your domain registrar, add the DNS records GitHub shows you
(usually a few `A` records + a `CNAME`). This is free — no GitHub Pages fee.

## 3. Add a new project (this is the "easy update" part)

1. Duplicate any file inside `_projects/` (e.g. copy `chess-academy.md`).
2. Rename it, e.g. `_projects/new-brand-project.md`.
3. Edit the front matter (the part between `---`) at the top: title, tags, client,
   role, duration, deliverables, card_color.
4. Write the case study text below the front matter in plain Markdown
   (use `## Brief`, `## Approach`, `## Result` as section headings, or your own).
5. Optionally add a real photo: drop it in `assets/images/work/`, then set
   `image: /assets/images/work/your-photo.jpg` in the front matter.
6. Save, commit, push — it appears automatically on the Home page (first 4 projects)
   and on the Work page (all projects), with filtering already working.

No other file needs to change. The design, sidebar, and grid all update themselves.

## 4. Turn on the contact form

The contact form posts to [Formspree](https://formspree.io) (free tier: 50
submissions/month, no backend needed). Sign up for a free account, create a form,
and replace `YOUR_FORM_ID` in `contact/index.md` with the ID they give you.

## 5. Colors, fonts, spacing

Everything lives in `assets/css/style.css`. The color palette is defined once at
the top in `:root` — change `--magenta`, `--cyan`, `--paper`, etc. there and it
updates everywhere on the site.
