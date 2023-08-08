
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
      top: 0,
      behavior: 'smooth'
    });
  });


  
  