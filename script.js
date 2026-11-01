(() => {
  const cfg = window.OUTREACH_MANIA_SITE || {};
  const buy = document.getElementById('purchaseLink');
  const note = document.getElementById('purchaseNote');
  if (cfg.checkoutUrl && /^https:\/\//i.test(cfg.checkoutUrl)) {
    buy.href = cfg.checkoutUrl;
    buy.textContent = 'Buy Outreach Mania ↗';
    buy.rel = 'noopener noreferrer';
    note.textContent = 'Secure checkout hosted by our payment provider. Separate OpenAI API usage charges apply.';
  }
  const support = document.getElementById('supportLink');
  if (cfg.supportEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.supportEmail)) {
    support.href = 'mailto:' + cfg.supportEmail;
    support.hidden = false;
  }
  const menu = document.getElementById('navLinks');
  const toggle = document.getElementById('navToggle');
  function closeNav() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open navigation'); }
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click',closeNav));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
