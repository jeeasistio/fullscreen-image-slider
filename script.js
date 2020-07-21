// Selectors
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const slideNext = () => {
  // get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // check for next slide
  current.nextElementSibling ?
  current.nextElementSibling.classList.add('current'):
  slides[0].classList.add('current');

  setTimeout(() => current.classList.remove('current'));
}

const slidePrev = () => {
  // get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // check for prev slide
  current.previousElementSibling ?
  current.previousElementSibling.classList.add('current'):
  slides[slides.length - 1].classList.add('current');

  setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);