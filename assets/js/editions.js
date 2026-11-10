// Edition picker for project pages that define `editions:` in their front matter.
// Filters the edition strip by city and shows the selected edition's gallery.
document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('.ed-section');
  if (!root) return;
  var chips = root.querySelectorAll('.ed-filters button');
  var tiles = root.querySelectorAll('.ed');
  var panels = root.querySelectorAll('.ed-panel');

  function select(tile) {
    tiles.forEach(function (t) { t.setAttribute('aria-pressed', t === tile ? 'true' : 'false'); });
    panels.forEach(function (p) { p.hidden = p.id !== tile.getAttribute('data-target'); });
  }

  root.addEventListener('click', function (e) {
    var chip = e.target.closest('.ed-filters button');
    if (chip) {
      var city = chip.getAttribute('data-city');
      chips.forEach(function (c) { c.classList.toggle('active', c === chip); });
      var first = null;
      tiles.forEach(function (t) {
        var show = city === 'all' || t.getAttribute('data-city') === city;
        t.hidden = !show;
        if (show && !first) first = t;
      });
      if (first) select(first);
      return;
    }
    var tile = e.target.closest('.ed');
    if (tile) select(tile);
  });

  // ---- Lightbox: click a gallery image to view it large; arrows / swipe / Esc to navigate.
  var lb = document.createElement('div');
  lb.className = 'lb'; lb.hidden = true;
  lb.innerHTML = '<button class="lb-x" aria-label="Close">&times;</button>' +
    '<button class="lb-p" aria-label="Previous">&#8249;</button>' +
    '<button class="lb-n" aria-label="Next">&#8250;</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption');
  var set = [], idx = 0;

  function show(i) {
    idx = (i + set.length) % set.length;
    var f = set[idx];
    lbImg.src = f.querySelector('img').src;
    lbImg.alt = f.querySelector('img').alt;
    var c = f.querySelector('figcaption');
    lbCap.textContent = (c ? c.textContent : '') + '  ' + (idx + 1) + '/' + set.length;
  }
  function open(fig) {
    set = Array.prototype.slice.call(fig.closest('.project-gallery').querySelectorAll('.gallery-item'));
    show(set.indexOf(fig)); lb.hidden = false; document.body.style.overflow = 'hidden';
  }
  function close() { lb.hidden = true; document.body.style.overflow = ''; }

  document.addEventListener('click', function (e) {
    var fig = e.target.closest('.gallery-item');
    if (fig && lb.hidden && fig.querySelector('img')) { open(fig); return; }
    if (e.target.closest('.lb-x') || e.target === lb) close();
    else if (e.target.closest('.lb-p')) show(idx - 1);
    else if (e.target.closest('.lb-n')) show(idx + 1);
  });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  var x0 = null;
  lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
  });
});
