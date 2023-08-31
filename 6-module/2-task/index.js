import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) 
  {
    this.product = product;
    this.elem = this.render();
    //this.elem.onclick = this.addProduct();
  }

  render() 
  {
    const elem = createElement(`
		<div class="card">
		  <div class="card__top">
		    <img src="/assets/images/products/" class="card__image" alt="product">
		    <span class="card__price">€</span>
		  </div>
		  <div class="card__body">
		    <div class="card__title"> </div>
				<button type="button" class="card__button">
		      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
				</button>
		  </div>
		</div>`);
    
    elem.querySelector('.card__image').src = `/assets/images/products/` + this.product.image;
    elem.querySelector('.card__price').textContent = '€' + this.product.price.toFixed(2);
    elem.querySelector('.card__title').textContent = this.product.name;
      
    elem.querySelector('.card__button').addEventListener('click', () => {
      //console.log('кликкк');
      let addProduct = new CustomEvent('product-add', {
        detail: this.product.id,
        bubbles: true,
      });
      elem.dispatchEvent(addProduct);
    });

    elem.addEventListener('product-add', ()=>{
      console.log(this.product.id);
    });

    return elem;
  }	
}