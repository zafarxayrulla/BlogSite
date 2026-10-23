// Saqlangan mavzuni sahifa chizilishidan oldin qo'yamiz (oq "chaqnash" bo'lmasligi uchun).
// Tanlov bo'lmasa sayt kunduzgi rejimda ochiladi.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  document.documentElement.setAttribute('data-theme', saved === 'dark' ? 'dark' : 'light');
})();
