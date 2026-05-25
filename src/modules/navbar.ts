export function initNavbar(): void {
  const navbar     = document.getElementById('navbar')!;
  const hamburger  = document.getElementById('hamburger')!;
  const navLinks   = document.getElementById('nav-links')!;
  const allLinks   = navLinks.querySelectorAll<HTMLAnchorElement>('.nav-link');
  const sections   = document.querySelectorAll<HTMLElement>('section[id]');

  let lastScrollY  = 0;
  let ticking      = false;

  /* ── Scroll: hide/show + opaque ── */
  function onScroll(): void {
    const y = window.scrollY;

    if (y > 60) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    if (y > lastScrollY && y > 200) {
      navbar.classList.add('navbar--hidden');
    } else {
      navbar.classList.remove('navbar--hidden');
    }

    lastScrollY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ── Active section highlighting ── */
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        allLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  /* ── Hamburger toggle ── */
  function closeMenu(): void {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* Close menu when a link is clicked */
  allLinks.forEach(link => link.addEventListener('click', closeMenu));

  /* Close on outside click */
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target as Node)) closeMenu();
  });
}
