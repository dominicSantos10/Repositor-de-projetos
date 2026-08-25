const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const openBtn = document.getElementById('openBtn');
const logoBtn = document.getElementById('logoBtn');

function toggleSidebar() {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
  }
}

// Associa a mesma ação aos três elementos clicáveis
logoBtn.addEventListener('click', toggleSidebar);
toggleBtn.addEventListener('click', toggleSidebar);
openBtn.addEventListener('click', toggleSidebar);