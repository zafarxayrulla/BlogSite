// Kunduzgi / tungi rejim tugmasi
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  function apply(theme) {
    var label = theme === 'dark' ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish";
    root.setAttribute('data-theme', theme);
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  btn.hidden = false;

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // Scroll storytelling: DOM tartibida, bir vaqtda ko'ringanlari 100ms stagger bilan
  if ('IntersectionObserver' in window) {
    var items = document.querySelectorAll([
      '.statement > p', '.stat',
      '.projects .section-head > *', '.case', '.case-head', '.metric', '.metric > div', '.results li', '.quote',
      '.services .section-head > *', '.service',
      '.cta'
    ].join(','));

    items.forEach(function (el) {
      el.setAttribute('data-reveal', el.classList.contains('metric') ? 'pop' : '');
    });
    root.classList.add('reveal-on');

    var io = new IntersectionObserver(function (entries) {
      var shown = entries
        .filter(function (e) { return e.isIntersecting; })
        .map(function (e) { return e.target; })
        .sort(function (a, b) {
          return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
      shown.forEach(function (el, i) {
        el.style.setProperty('--d', Math.min(i, 8) * 100 + 'ms');
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    items.forEach(function (el) { io.observe(el); });

    // Animatsiya tugagach elementni asl holatiga qaytaramiz (hover transition'lari tiklanadi)
    document.addEventListener('transitionend', function (e) {
      var el = e.target;
      if (e.propertyName !== 'opacity' || !el.classList.contains('is-in')) return;
      el.removeAttribute('data-reveal');
      el.classList.remove('is-in');
      el.style.removeProperty('--d');
    });
  }

  // 3D tilt: faqat haqiqiy hover va sichqoncha bor qurilmalarda
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.case').forEach(function (card) {
      var frame = 0;
      card.addEventListener('pointermove', function (e) {
        if (e.pointerType !== 'mouse') return;
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(function () {
          card.classList.add('is-tilt');
          card.style.transform = 'perspective(1400px) rotateX(' + (-y * 7).toFixed(2) + 'deg) rotateY(' + (x * 7).toFixed(2) + 'deg) translateY(-4px)';
        });
      });
      card.addEventListener('pointerleave', function () {
        cancelAnimationFrame(frame);
        card.classList.remove('is-tilt');
        card.style.transform = '';
      });
    });
  }
})();
