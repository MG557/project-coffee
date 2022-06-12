export const settings = {

  db: {
    //url: '//localhost:3131',
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    /*products: 'products',
    orders: 'orders',
    booking: 'bookings',*/
    products: 'products',
    contact: 'contact',
    home: 'home',
  },
};

export const select = {
  templateOf: {
    homePage: '#template-home-page',
    productPage: '#template-product-page', 
    contactPage: '#template-contact-page',
    //homePage: '#template-home-page',
  },
  containerOf: {
    homeP: '.home-Page',
    productP: '.product-Page',
    contactP: '.contact-Page',
    pages: '#pages',
    productList: '#product-list',
    contact: '.contact-wrapper',
    home: '.home-wrapper', 
  },
  nav: {
    links: '.nav-ul a',
    homeLinks: '.home-Page a',
  },
};
export const classNames = {
  nav: {
    active: 'active',
  },

  pages: {
    active: 'active',
  },

};
export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
 
  productPage: Handlebars.compile(document.querySelector(select.templateOf.productPage).innerHTML),
  
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
};