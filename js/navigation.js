// navigation.js - Navigation multi-pages pour TreeTraque

document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu mobile uniquement
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileToggle && navList) {
        mobileToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Ferme le menu mobile quand on clique sur un lien (permet la navigation normale)
        const navLinks = navList.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                mobileToggle.classList.remove('active');
                // Ne pas empêcher la navigation par défaut - laisse le navigateur suivre le lien
            });
        });
    }
    
    // Met en évidence la page active dans la navigation
    highlightActivePage();
});

/**
 * Met en évidence la page active dans la navigation
 */
function highlightActivePage() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (href) {
            const pageName = href.replace('.html', '').replace('index', 'home');
            if (pageName === currentPage || (currentPage === 'home' && href === 'index.html')) {
                link.classList.add('active');
            }
        }
    });
}

/**
 * Obtient le nom de la page actuelle
 */
function getCurrentPageName() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop();
    
    if (!fileName || fileName === '' || fileName === 'index.html') {
        return 'home';
    }
    
    return fileName.replace('.html', '');
}