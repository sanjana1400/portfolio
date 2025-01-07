const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animation
const skillCards = document.querySelectorAll('.skill-card');

const skillSection = document.getElementById('skills');

// Function to check if skill cards are in view
function checkSkillInView() {
  const sectionPosition = skillSection.getBoundingClientRect();
  if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
    skillCards.forEach((card, index) => {
      card.style.animation = `fadeInUp 0.5s ${0.2 + index * 0.2}s forwards`;
    });
  }
}

// Trigger scroll check on page load and scroll event
window.addEventListener('scroll', checkSkillInView);
window.addEventListener('load', checkSkillInView);


// Toggling the navbar on mobile view
document.getElementById('hamburger').addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});
