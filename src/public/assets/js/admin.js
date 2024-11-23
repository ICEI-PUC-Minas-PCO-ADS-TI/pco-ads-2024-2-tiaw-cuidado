// Barra Lateral - Inicio

const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

const collapsedSidebarHeight = "80px";
const fullSidebarHeight = "calc(100vh - 32px)";

const adjustSidebarHeight = () => {
    if (window.innerWidth >= 1025) {
        sidebar.style.height = fullSidebarHeight;
        sidebar.classList.remove("menu-active");
    } else {
        sidebar.style.height = collapsedSidebarHeight;
        sidebar.classList.remove("collapsed");
        const isMenuActive = sidebar.classList.contains("menu-active");
        menuToggler.querySelector("img").src = isMenuActive ? "/src/public/assets/images/admin-images/fechar.png" : "/src/public/assets/images/admin-images/menu.png";
    }
};

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    sidebar.classList.remove("menu-active");
    adjustSidebarHeight();
});

menuToggler.addEventListener("click", () => {
    const isMenuActive = sidebar.classList.toggle("menu-active");
    toggleMenu(isMenuActive);
});

const toggleMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : collapsedSidebarHeight;
    menuToggler.querySelector("img").src = isMenuActive ? "/src/public/assets/images/admin-images/fechar.png" : "/src/public/assets/images/admin-images/menu.png";
};

window.addEventListener("resize", adjustSidebarHeight);
window.addEventListener("load", adjustSidebarHeight);

// Barra Lateral - Fim 

const ctx = document.getElementById('barchart').getContext('2d');
const ctx2 = document.getElementById('doughnut').getContext('2d');

// Gráfico Barra - Inicio
const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Idoso', 'Cuidadores'],
        datasets: [{
            label: 'Quantidade de Usuários',
            data: [2, 5],
            backgroundColor: [
                'rgba(39, 174, 96, 0.2)',
                'rgba(142, 68, 173, 0.2)'
            ],
            borderColor: [
                'rgba(39, 174, 96)',
                'rgba(142, 68, 173)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Gráfico Barra - Fim

// Gráfico Circulo - Inicio
const doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Idoso', 'Cuidadores'],
        datasets: [{
            label: 'Quantidade de Usuários',
            data: [2, 5],
            backgroundColor: [
                'rgba(39, 174, 96, 0.2)',
                'rgba(142, 68, 173, 0.2)'
            ],
            borderColor: [
                'rgba(39, 174, 96)',
                'rgba(142, 68, 173)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Gráfico Circulo - Fim