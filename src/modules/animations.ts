/* Scroll-reveal via IntersectionObserver */
export function initAnimations(): void {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal-up, .reveal-fade').forEach(el => {
    revealObserver.observe(el);
  });

  /* Parallax: hero decorative shapes shift subtly on scroll */
  const circleShape = document.querySelector<HTMLElement>('.hero__shape--circle');
  const arcShape    = document.querySelector<HTMLElement>('.hero__shape--arc');

  if (circleShape || arcShape) {
    let rafId = 0;

    window.addEventListener('scroll', () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (circleShape) circleShape.style.transform = `translateY(${y * 0.18}px)`;
        if (arcShape)    arcShape.style.transform    = `translateY(${y * 0.1}px)`;
      });
    }, { passive: true });
  }
}
