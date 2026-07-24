document.addEventListener('DOMContentLoaded', function () {
  // Burger menu toggle (mobile/tablet)
  var burgerBtn = document.getElementById('burgerBtn');
  var drawer = document.getElementById('mobileDrawer');
  if (burgerBtn && drawer) {
    burgerBtn.addEventListener('click', function () {
      var isOpen = drawer.classList.toggle('open');
      burgerBtn.classList.toggle('open', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // Live client-side filtering on the Work grid (no plugin, no reload)
  var filterBar = document.querySelector('.filters');
  var cards = document.querySelectorAll('.grid .card');
  if (filterBar && cards.length) {
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      filterBar.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split(',');
        card.style.display = (filter === 'all' || tags.indexOf(filter) !== -1) ? '' : 'none';
      });
    });
  }
});
