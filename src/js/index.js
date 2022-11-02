document.querySelectorAll('[lk]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    const link = btn.getAttribute('lk');
    if (!link) {
      return;
    }

    window.open(link, '_system');
  });
});
