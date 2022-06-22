/* eslint-disable no-undef */
import {select, templates } from '../settings.js';
import utils from '../utils.js';


class Products {
  constructor(element){
    const thisProducts = this;
    thisProducts.render(element);
    //thisHome.initCarousel();
  }
  
  render(element){
    const thisProducts = this;
    /* generate HTML based on template */
    const generatedHTML = templates.productPage();
    /* create element using utils.createElementFromHTML */
    thisProducts.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const productsContainer = document.querySelector(select.containerOf.productList);
    console.log("###PAGE", productsContainer);
    /* add element to menu */
    productsContainer.appendChild(thisProducts.element);   
    console.log(productsContainer.appendChild(thisProducts.element));
    
    thisProducts.dom = {
      wrapper: element,
     
    };
  }
}
export default Products;