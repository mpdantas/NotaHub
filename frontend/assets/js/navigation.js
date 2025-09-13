document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que a página recarregue

            // Pega o ID da seção a ser mostrada
            const targetId = this.getAttribute('data-target');

            // Remove a classe 'active' de todas as seções e links
            contentSections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Adiciona a classe 'active' à seção e ao link clicado
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                this.classList.add('active');
            }
        });
    });
});