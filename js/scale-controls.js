(() => {
  const smallerButton = document.querySelector('#textSmaller');
  const largerButton = document.querySelector('#textLarger');
  if (!smallerButton || !largerButton) return;

  const storageKey = 'novena-page-text-scale';
  let scale = 1;
  try {
    scale = Number(localStorage.getItem(storageKey)) || 1;
  } catch {
    // El ajuste sigue funcionando durante esta sesión si el navegador bloquea el almacenamiento local.
  }
  scale = Math.min(1.4, Math.max(0.8, scale));

  function setScale(nextScale) {
    scale = Math.min(1.4, Math.max(0.8, Math.round(nextScale * 10) / 10));
    document.documentElement.style.setProperty('--page-text-scale', String(scale));
    try {
      localStorage.setItem(storageKey, String(scale));
    } catch {
      // No se necesita almacenamiento local para aplicar el tamaño actual.
    }
  }

  function markText(root) {
    if (root.nodeType === Node.ELEMENT_NODE && root.matches('script, style, noscript')) return;
    const elements = root.nodeType === Node.ELEMENT_NODE ? [root, ...root.querySelectorAll('*')] : [];
    elements.forEach(element => {
      if (element.hasAttribute('data-page-scaled-text') || element.closest('.print-program')) return;
      const hasOwnText = [...element.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (!hasOwnText) return;
      const baseSize = getComputedStyle(element).fontSize;
      element.style.setProperty('--page-base-font-size', baseSize);
      element.setAttribute('data-page-scaled-text', '');
    });
  }

  setScale(scale);
  markText(document.body);
  const observer = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(markText)));
  observer.observe(document.body, { childList: true, subtree: true });
  smallerButton.addEventListener('click', () => setScale(scale - 0.1));
  largerButton.addEventListener('click', () => setScale(scale + 0.1));
})();
