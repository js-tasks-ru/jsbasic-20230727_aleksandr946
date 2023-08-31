import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  render() {
    let carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        </div>
      </div>`);
    
    this.slides.forEach(element => {
      let oneSlide = createElement(`
      <div class="carousel__slide" data-id="${element.id}">
      <img src="/assets/images/carousel/${element.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
      <span class="carousel__price">€${element.price.toFixed(2)}</span>
      <div class="carousel__title">${element.name}</div>
      <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
      </div>
      </div>`);
      carousel.querySelector('.carousel__inner').appendChild(oneSlide);
    });
            
    function init() {
      let rightArrow = carousel.querySelector('.carousel__arrow_right');
      let leftArrow = carousel.querySelector('.carousel__arrow_left');
      leftArrow.style.display = 'none';
      let carouselInner = carousel.querySelector('.carousel__inner');
      let carouselInnerWidth = 0;
      let carouselSlideWidth = 0;
      let slidesAmount = carouselInner.children.length;
      let slideNo = 1;
    
      rightArrow.onclick = function rightArrowMove () {
        if (slideNo < slidesAmount) {
          carouselSlideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
          leftArrow.style.display = '';
          carouselInner.style.transform = 'translateX(' + (carouselInnerWidth - carouselSlideWidth) + 'px)';
          carouselInnerWidth = carouselInnerWidth - carouselSlideWidth;
          slideNo++;
          if (slideNo == slidesAmount) {rightArrow.style.display = 'none';}
        }
      };
    
      leftArrow.onclick = function leftArrowMove () {
        if (slideNo > 1) {
          carouselSlideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
          rightArrow.style.display = '';
          carouselInner.style.transform = 'translateX(' + (carouselInnerWidth + carouselSlideWidth) + 'px)';
          carouselInnerWidth = carouselInnerWidth + carouselSlideWidth;
          slideNo--;
          if (slideNo == 1) {leftArrow.style.display = 'none';}
        }
      };

      carousel.onclick = function(event) {
        if (event.target.closest('.carousel__button')) {
          let addProduct = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
            detail: event.target.closest('.carousel__slide').dataset.id, // Уникальный идентификатора товара из объекта слайда
            bubbles: true // это событие всплывает - это понадобится в дальнейшем
          });
          carousel.dispatchEvent(addProduct);
        }
      };

      document.addEventListener('product-add', event =>{
        console.log('product-add', event.detail);
      });

      function resizeFunc () {
        carouselSlideWidth = document.querySelector('.carousel__slide').offsetWidth;
        carouselInnerWidth = -(slideNo - 1) * carouselSlideWidth;
        carouselInner.style.transform = 'translateX(' + (-(slideNo - 1) * carouselSlideWidth) + 'px)';
      } 
      window.onresize = resizeFunc;
    }
   
    init();
    
    return carousel;
  }
}
