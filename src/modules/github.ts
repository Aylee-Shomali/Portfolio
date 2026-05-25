const GITHUB_USERNAME = 'Aylee-Shomali';
const API_BASE = 'https://api.github.com';

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  'C#':        '#239120',
  Python:      '#3572A5',
  HTML:        '#E34C26',
  CSS:         '#563D7C',
  Vue:         '#41B883',
  default:     '#9C8071',
};

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

function langColor(lang: string | null): string {
  if (!lang) return LANG_COLORS.default;
  return LANG_COLORS[lang] ?? LANG_COLORS.default;
}

function formatName(name: string): string {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days < 1) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function createProjectCard(repo: GithubRepo): HTMLElement {
  const card = document.createElement('a');
  card.className = 'project-card reveal-up';
  card.href = repo.html_url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.setAttribute('aria-label', `${formatName(repo.name)} — view on GitHub`);

  const color = langColor(repo.language);

  card.innerHTML = `
    <div class="project-card__header">
      <h3 class="project-card__name">${formatName(repo.name)}</h3>
      <svg class="project-card__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
      </svg>
    </div>

    ${repo.description
      ? `<p class="project-card__desc">${repo.description}</p>`
      : `<p class="project-card__desc" style="font-style:italic;opacity:.6;">No description provided.</p>`
    }

    <div class="project-card__footer">
      ${repo.language
        ? `<span class="project-card__lang">
             <span class="lang-dot" style="background:${color}"></span>
             ${repo.language}
           </span>`
        : '<span></span>'
      }
      <div class="project-card__meta">
        <span class="project-card__stat" title="Stars">
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${repo.stargazers_count}
        </span>
        <span class="project-card__stat" title="Forks">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M7 6a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM12 20a2 2 0 100-4 2 2 0 000 4zm-5-2V8m5 8V8m0 0a5 5 0 00-5 0"/></svg>
          ${repo.forks_count}
        </span>
        <span class="project-card__stat">${relativeTime(repo.updated_at)}</span>
      </div>
    </div>
  `;

  return card;
}

export async function loadProjects(): Promise<void> {
  const grid    = document.getElementById('projects-grid')!;
  const loading = document.getElementById('projects-loading')!;

  try {
    const res = await fetch(
      `${API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=public`
    );

    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);

    const repos: GithubRepo[] = await res.json();

    const filtered = repos.filter(
      r => !r.fork && r.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase()
    );

    loading.remove();

    if (filtered.length === 0) {
      grid.innerHTML = '<p class="projects__error">No public repositories found.</p>';
      return;
    }

    filtered.forEach((repo, i) => {
      const card = createProjectCard(repo);
      card.style.transitionDelay = `${i * 80}ms`;
      grid.appendChild(card);
    });

    /* Trigger reveal on newly added cards */
    requestAnimationFrame(() => {
      grid.querySelectorAll('.project-card.reveal-up').forEach(el => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              observer.unobserve(e.target);
            }
          });
        }, { threshold: 0.08 });
        observer.observe(el);
      });
    });

  } catch {
    loading.remove();
    grid.innerHTML = `
      <div class="projects__error">
        <p>Could not load GitHub projects. <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener">View on GitHub →</a></p>
      </div>`;
  }
}
