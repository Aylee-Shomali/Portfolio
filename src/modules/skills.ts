const SKILLS = [
  { name: 'Angular',        icon: 'devicon-angular-plain' },
  { name: 'TypeScript',     icon: 'devicon-typescript-plain colored' },
  { name: 'JavaScript',     icon: 'devicon-javascript-plain colored' },
  { name: 'C#',             icon: 'devicon-csharp-plain colored' },
  { name: 'HTML5',          icon: 'devicon-html5-plain colored' },
  { name: 'CSS3',           icon: 'devicon-css3-plain colored' },
  { name: 'Bootstrap',      icon: 'devicon-bootstrap-plain colored' },
  { name: 'Vue.js',         icon: 'devicon-vuejs-plain colored' },
  { name: 'Python',         icon: 'devicon-python-plain colored' },
  { name: 'Figma',          icon: 'devicon-figma-plain colored' },
  { name: 'Visual Studio',  icon: 'devicon-visualstudio-plain colored' },
  { name: 'Postman',        icon: 'devicon-postman-plain colored' },
  { name: 'RxJS',           icon: 'devicon-rxjs-plain colored' },
];

export function renderSkills(): void {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const fragment = document.createDocumentFragment();

  SKILLS.forEach(skill => {
    const item = document.createElement('div');
    item.className = 'skill-item';
    item.setAttribute('title', skill.name);

    const icon = document.createElement('i');
    icon.className = skill.icon;
    icon.setAttribute('aria-hidden', 'true');

    const label = document.createElement('span');
    label.className = 'skill-item__label';
    label.textContent = skill.name;

    item.appendChild(icon);
    item.appendChild(label);
    fragment.appendChild(item);
  });

  grid.appendChild(fragment);

  /* Staggered reveal */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = grid.querySelectorAll<HTMLElement>('.skill-item');
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 60);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(grid);
}
