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