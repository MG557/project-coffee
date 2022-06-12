/* eslint-disable no-undef */
import {select, templates,} from '../settings.js';
import utils from '../utils.js';


class Contact {
  constructor(element){
    const thisContact = this;
    thisContact.render(element);
    //thisHome.initCarousel();
  }
  
  render(element){
    const thisContact = this;
    /* generate HTML based on template */
    const generatedHTML = templates.contactPage();
    /* create element using utils.createElementFromHTML */
    thisContact.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const contactContainer = document.querySelector(select.containerOf.contact);
    /* add element to menu */
    contactContainer.appendChild(thisContact.element);   
    
    thisContact.dom = {
      wrapper: element,
     
    };
  }
  

}
export default Contact;