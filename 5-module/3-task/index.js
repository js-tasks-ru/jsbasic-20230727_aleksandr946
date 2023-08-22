function initCarousel() {
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const leftArrow = document.querySelector('.carousel__arrow_left');
  leftArrow.style.display = 'none';
  const carouselInner = document.querySelector('.carousel__inner');
  let carouselInnerWidth = 0;
  let carouselSlide = document.querySelector('.carousel__slide').offsetWidth;
  let slidesAmount = carouselInner.children.length;
  let numOfSlide = 1;

  function rightArrowMove () {
    if (numOfSlide < slidesAmount) {
      leftArrow.style.display = '';
      carouselInner.style.transform = 'translateX(' + (carouselInnerWidth - carouselSlide) + 'px)';
      carouselInnerWidth = carouselInnerWidth - carouselSlide;
      numOfSlide++;
      if (numOfSlide == slidesAmount) {rightArrow.style.display = 'none';}
    }
  }

  function leftArrowMove () {
    if (numOfSlide > 1) {
      rightArrow.style.display = '';
      carouselInner.style.transform = 'translateX(' + (carouselInnerWidth + carouselSlide) + 'px)';
      carouselInnerWidth = carouselInnerWidth + carouselSlide;
      numOfSlide--;
      if (numOfSlide == 1) {leftArrow.style.display = 'none';}
    }
  }

  rightArrow.addEventListener('click', rightArrowMove);
  leftArrow.addEventListener('click', leftArrowMove);
}