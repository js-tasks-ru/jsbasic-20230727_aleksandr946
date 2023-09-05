import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();

  }

  render() {
    this.elem = createElement(`
  <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>

  </div>
`);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
    this.esc = (e) => this.keydownEsc(e);
    document.addEventListener('keydown', this.esc);
    this.elem.querySelector('.modal__close').addEventListener('click', (e)=> this.clickOn(e));
  }

  setTitle(title) {
    this.elem.querySelector('.modal__title').textContent = title;
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(node);
  }
  
  clickOn(e) {
    if (e.target.className = '.modal__close') {
      e.preventDefault();
      this.close();
    }
  }

  keydownEsc(e) {
    console.log(e.code);
    if (e.code === 'Escape') {
      e.preventDefault();
      this.close();
    }
  }

  close() {
    document.removeEventListener('keydown', this.esc);
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}
