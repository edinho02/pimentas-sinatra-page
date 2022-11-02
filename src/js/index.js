document.querySelectorAll('.link-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const link = btn.getAttribute('lk');
    if (!link) {
      return;
    }
    window.open(link, '_system');
  });
});
