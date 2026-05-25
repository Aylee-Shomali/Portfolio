import './styles/main.css';
import { initNavbar }   from './modules/navbar';
import { initAnimations } from './modules/animations';
import { renderSkills }  from './modules/skills';
import { loadProjects }  from './modules/github';

function init(): void {
  initNavbar();
  initAnimations();
  renderSkills();
  loadProjects();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
