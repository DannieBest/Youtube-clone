const sidebarToggle = document.querySelector('.sidebar__toggle');
const sidebar = document.querySelector('aside');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
