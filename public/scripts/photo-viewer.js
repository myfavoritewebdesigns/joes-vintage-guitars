// Separate from the decoder. Links still open the image without JavaScript.
(() => {
  const dialog = document.querySelector('#serial-photo-viewer');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const large = dialog.querySelector('#serial-photo-large');
  const title = dialog.querySelector('#serial-photo-title');
  const caption = dialog.querySelector('#serial-photo-caption');
  const original = dialog.querySelector('#serial-photo-original');
  const error = dialog.querySelector('#serial-photo-error');
  let opener = null;
  let previousOverflow = '';

  for (const link of document.querySelectorAll('[data-serial-photo]')) {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      title.textContent = link.dataset.photoTitle;
      caption.textContent = link.dataset.photoCaption;
      large.alt = link.querySelector('img').alt;
      error.hidden = true;
      large.src = link.href;
      original.href = link.href;
      previousOverflow = document.documentElement.style.overflow;
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
  }
  large.addEventListener('error', () => { error.hidden = false; });
  dialog.addEventListener('close', () => {
    document.documentElement.style.overflow = previousOverflow;
    large.removeAttribute('src');
    opener?.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
})();
