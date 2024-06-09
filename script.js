document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');

  function handleScroll() {
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
          if (scrollPosition >= section.offsetTop - 60 && scrollPosition < section.offsetTop + section.offsetHeight) {
              links.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                      link.classList.add('active');
                  }
              });
          }
      });
  }

  window.addEventListener('scroll', handleScroll);

  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop - 50,
              behavior: 'smooth'
          });
      });
  });

  handleScroll();
});
