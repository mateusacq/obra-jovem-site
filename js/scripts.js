/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    // Verifica a preferência salva no armazenamento do navegador
    const currentTheme = localStorage.getItem('theme');

    // Aplica o tema escuro imediatamente se estiver salvo
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if(themeIcon) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Lógica de alternância ao clicar no botão
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            let theme = document.documentElement.getAttribute('data-theme');

            if (theme === 'dark') {
                // Muda para claro
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                // Muda para escuro
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }
});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
