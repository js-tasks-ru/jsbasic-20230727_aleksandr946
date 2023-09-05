import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }
  
  render() {
    let elem = createElement(
      `<div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    </div>`);
    
    this.categories.forEach(element => {
      let navElement = createElement(`<a href="#" class="ribbon__item" data-id="${element.id}">${element.name}</a>`);
      elem.querySelector('.ribbon__inner').appendChild(navElement);
    });

    let ribbonInner = elem.querySelector('.ribbon__inner');
    let ribbonArrowLeft = elem.querySelector('.ribbon__arrow_left').closest('button');
    let ribbonArrowRight = elem.querySelector('.ribbon__arrow_right').closest('button');

    ribbonArrowRight.addEventListener('click', function () {
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      ribbonInner.scrollBy(350, 0);
      ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      if (scrollRight <= 1) {
        this.classList.remove('ribbon__arrow_visible');
      }
    });

    ribbonArrowLeft.addEventListener('click', function () {
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      ribbonInner.scrollBy(-350, 0); 
      ribbonArrowRight.classList.add('ribbon__arrow_visible');
      if (scrollLeft <= 1) {
        (this.classList.remove('ribbon__arrow_visible'));
      }
    });

    ribbonInner.addEventListener('click', function(e) {
      ribbonInner.querySelectorAll('a').forEach(e => e.classList.remove('ribbon__item_active'));
      e.preventDefault();

      if (e.target.classList.contains('ribbon__item')) {
        e.target.classList.add('ribbon__item_active');

        let addProduct = new CustomEvent('ribbon-select', {
          detail: e.target.dataset.id,
          bubbles: true,
        });
        ribbonInner.dispatchEvent(addProduct);
      }
    });

    ribbonInner.addEventListener('ribbon-select', (e)=>{
      console.log(e.detail);
    });

    return elem;
  }  
}
