export function bindScrollProgress(el, onProgress) {
  let ticking = false;

  function update() {
    ticking = false;

    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;

    const total = r.height + vh;
    const passed = vh - r.top;
    const p = Math.min(1, Math.max(0, passed / total));

    onProgress(p);
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  requestUpdate();

  return () => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
  };
}