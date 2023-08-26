const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slides');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const allSildes = slider.childElementCount;
window.onload = () => {
  slider.querySelectorAll('div').forEach(ele => {
    let randomBgColor = (
        (Math.random() * 0xffffff) << 0
      ).toString(16).padStart(6, '0');
      console.log(randomBgColor);
      ele.style.backgroundColor = `#${randomBgColor}`
  })
  slider.style.width = `${allSildes*100}%`
}

let direction = 'next';
next.addEventListener('click', () => {
  if (direction == 'prev') {
    slider.prepend(slider.lastElementChild)
    direction = 'next'
  }
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = `translate(-${1/allSildes*100}%)`;

});

prev.addEventListener('click', () => {
  if (direction == 'next') {
    slider.appendChild(slider.firstElementChild)
  }

  direction = 'prev'
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = `translate(${1/allSildes*100}%)`;

});

slider.addEventListener('transitionend', () => {
  if (direction == 'next') {
    slider.appendChild(slider.firstElementChild)
  } else {
    slider.prepend(slider.lastElementChild)
  }

  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 500ms linear'
  })

});