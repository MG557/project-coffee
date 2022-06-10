import { settings, select , classNames } from '../settings.js';
import Home from './components/home.js';

const app = {

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links + ',' + select.nav.homeLinks);
    console.log('navLinks', thisApp.navLinks);
    const idFromHash = window.location.hash.replace('#/', '');
    
    let pageMatchingHash = thisApp.pages[0].id;
    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }

    }
    
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
        
        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }

  },

  activatePage: function(pageId){
    const thisApp = this;

    /* Add to class "active" to matching pages, remove from non-matching */
    for( let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* Add to class "active" to matching links, remove from non-matching */
    for( let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  
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

  initHome(){
    const thisApp = this;
    const homeElem = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeElem);
  },

  init: function() {
    const thisApp = this;
    thisApp.initHome();
    this.initPages();
    thisApp.initData();
    thisApp.initHeader();
  },
};

app.init();