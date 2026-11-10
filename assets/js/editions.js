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
});
