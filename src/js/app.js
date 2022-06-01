import { settings } from '../settings.js';


const app = {
  initData: function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  initHeader: function() {
    
    const hamburger = document.getElementById('hamburger');
    const navUL = document.getElementById('nav-ul');

    hamburger.addEventListener('click',() => {
      navUL.classList.toggle('show');
    });
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initHeader();
  },
};

app.init();