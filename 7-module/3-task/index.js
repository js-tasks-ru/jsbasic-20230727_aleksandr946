import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();
    this.addSlides();
    this.sliderInit();
  }

  render() {
    this.elem = createElement(`
    <div class="slider">
    <div class="slider__thumb">
      <span class="slider__value"></span>
    </div>
    <div class="slider__progress"></div>
    <div class="slider__steps">
    </div>
  </div>`);
  }

  addSlides() {
    for (let i = 1; i <= this.steps; i++) {
      let slide = createElement(`<span></span>`);
      this.elem.querySelector('.slider__steps').appendChild(slide);
    }
  }

  sliderInit() {
    this.elem.querySelectorAll('.slider__steps span')[this.value].classList.add('slider__step-active');
    this.elem.querySelector('.slider__value').append(this.value);
    this.elem.addEventListener('click', (e)=> this.moveSlider(e));
  }

  coloring() {
    this.elem.querySelector('.slider__progress').style.width = this.sliderThumbPos + '%';
    this.elem.querySelector('.slider__thumb').style.left = this.coloringLeftPercent + '%';
  }
  
  moveSlider(e) {
    const allSlides = this.elem.querySelectorAll('.slider__steps span');
    allSlides[this.value].classList.remove('slider__step-active');
    let x = this.elem.getBoundingClientRect().left;
    let width = this.elem.offsetWidth;
    let cursorPos = e.clientX;
    let step = width / (this.steps - 1);
    this.value = Math.round((cursorPos - x) / (step));
    allSlides[this.value].classList.add('slider__step-active');
    this.elem.querySelector('.slider__value').innerHTML = '';
    this.elem.querySelector('.slider__value').append(this.value);
    this.coloringLeftPercent = 100 * (this.value) / (this.steps - 1);
    this.sliderThumbPos = this.coloringLeftPercent;
    this.coloring();
    let sliderChange = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
      detail: this.value, // значение 0, 1, 2, 3, 4
      bubbles: true // событие всплывает - это понадобится в дальнейшем
    });
    this.elem.dispatchEvent(sliderChange);
  }
}

