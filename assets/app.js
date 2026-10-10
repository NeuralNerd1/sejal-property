// Progressive enhancement only: the page is fully readable without JS.
(() => {
  const dlg = document.getElementById('lightbox');
  if (!dlg || !dlg.showModal) return;
  const items = [...document.querySelectorAll('.gallery button')];
  const img = dlg.querySelector('img'), cap = dlg.querySelector('p');
  let i = 0;
  const show = n => {
    i = (n + items.length) % items.length;
    const b = items[i];
    img.src = b.dataset.full; img.alt = b.dataset.alt; cap.textContent = b.dataset.alt;
  };
  items.forEach((b, n) => b.addEventListener('click', () => { show(n); dlg.showModal(); }));
  dlg.querySelector('[data-prev]').addEventListener('click', e => { e.stopPropagation(); show(i - 1); });
  dlg.querySelector('[data-next]').addEventListener('click', e => { e.stopPropagation(); show(i + 1); });
  dlg.addEventListener('click', () => dlg.close());
  dlg.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(i - 1); if (e.key === 'ArrowRight') show(i + 1); });
})();
