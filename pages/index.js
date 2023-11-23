
const ratio = .1

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
};

const handleInterset = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
         entry.target.classList.add('apparut-visible');
         observer.unobserve(entry.target);
    }
   });
};
const observer = new IntersectionObserver(handleInterset, options) ;
    document.querySelectorAll('[class*="apparut-"]').forEach(function (r) {
    observer.observe(r);
   });
 window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
 document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: -10,
      behavior: 'smooth'
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var headerHeight = navbar.offsetHeight; // Obtenez la hauteur de la barre de navigation

    document.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > headerHeight) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    });

    // Sélectionnez tous les éléments de lien dans la barre de navigation
    var navLinks = document.querySelectorAll('.nav-link');

    // Ajoutez un gestionnaire d'événements de clic à chaque lien
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Empêche le comportement par défaut du lien (redirection)
            event.preventDefault();

            // Supprime la classe 'active' de tous les liens
            navLinks.forEach(function (otherLink) {
                otherLink.classList.remove('active');
                // Supprime les styles du lien précédemment cliqué
                otherLink.style.backgroundColor = '';
                otherLink.style.color = '';
                otherLink.style.borderRadius = '';
                otherLink.style.padding = '';
            });

            // Ajoute la classe 'active' à l'élément cliqué
            link.classList.add('active');

            // Stocke le lien actif dans le stockage local
            localStorage.setItem('activeLink', link.getAttribute('href'));

            // Applique les styles au lien actif
            link.style.backgroundColor = '#2C86D2';
            link.style.color = 'white';
            link.style.borderRadius = '10px';
            link.style.padding = '5px';

            // Ajoute un délai avant le changement de page (par exemple, 500 millisecondes)
            setTimeout(function () {
                // Récupère l'URL de la page liée à l'élément cliqué
                var targetURL = link.getAttribute('href');

                // Redirige l'utilisateur vers la nouvelle page
                window.location.href = targetURL;
            }, 500); // ajustez la durée du délai selon vos besoins
        });
    });

    // Restaure le lien actif lors du chargement de la page
    var storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
        var activeLink = document.querySelector('.nav-link[href="' + storedActiveLink + '"]');
        if (activeLink) {
            activeLink.classList.add('active');
            // Applique les styles au lien actif
            activeLink.style.backgroundColor = '#2C86D2';
            activeLink.style.color = 'white';
            activeLink.style.borderRadius = '10px';
            activeLink.style.padding = '5px';
        }
    }
});
