// Typing Effect
const typingEl = document.querySelector('.typing');
const typingText = typingEl.getAttribute('data-text').split(' • ');
let textIndex = 0, charIndex = 0;

function type() {
  if (charIndex < typingText[textIndex].length) {
    typingEl.textContent += typingText[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = typingText[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % typingText.length;
    setTimeout(type, 500);
  }
}
type();

// Reveal on Scroll
const reveals = document.querySelectorAll('.reveal-up');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  reveals.forEach(reveal => {
    const boxTop = reveal.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      reveal.classList.add('show');
    }
  });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

// Card Tilt Effect
document.querySelectorAll('.card-3d').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x / 20}deg) rotateX(${ -y / 20}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0)';
  });
});