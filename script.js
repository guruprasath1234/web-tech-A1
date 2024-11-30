// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // Adjust for sticky header height
        behavior: 'smooth',
      });
    }
  });
});

// Dynamic Skill Highlighting
const skillElements = document.querySelectorAll('.skills span');
skillElements.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.1)';
    skill.style.backgroundColor = '#ffeb3b';
    skill.style.color = '#333';
  });

  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
    skill.style.backgroundColor = '#0078d7';
    skill.style.color = '#fff';
  });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '18px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.border = 'none';
backToTopButton.style.backgroundColor = '#0078d7';
backToTopButton.style.color = '#fff';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; // Initially hidden
backToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Show/Hide Back to Top Button on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});
