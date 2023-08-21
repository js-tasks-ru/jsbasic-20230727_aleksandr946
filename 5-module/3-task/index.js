function initCarousel() {
  // ваш код...
  const rightArrow = document.querySelector('.carousel__arrow carousel__arrow_right');
  let leftArrow = document.querySelector('.carousel__arrow carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');

  function rightArrowMove () {
    carouselInner.style.transform = 'translateX(-300px)';
  }
  rightArrow.addEventListener('click', rightArrowMove);


} 
