/* eslint-disable no-undef */
import {select, templates } from '../settings.js';
import utils from '../utils.js';


class Products {
  constructor(data){
    const thisProducts = this;
    thisProducts.render(data);
    //thisHome.initCarousel();
  }
  
  render(data){
    const thisProducts = this;
    /* generate HTML based on template */
    const generatedHTML = templates.productPage(data);
    /* create element using utils.createElementFromHTML */
    thisProducts.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const productsContainer = document.querySelector(select.containerOf.productList);
    console.log('###PAGE', productsContainer);
    /* add element to menu */
    productsContainer.appendChild(thisProducts.element);   
    //console.log(productsContainer.appendChild(thisProducts.element));
    
    /*thisProducts.dom = {
      wrapper: element,
     
    };*/
  }
}
export default Products;