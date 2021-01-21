'use strict';

// Cart constructor.
var Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
  var newItem = new CartItem(product, quantity);
  this.items.push(newItem);
};

Cart.prototype.saveToLocalStorage = function () {
  localStorage.setItem('cart', JSON.stringify(this.items));
};

Cart.prototype.removeItem = function (item) {
  // In this implementation, the item parameter is the index of the item to be removed.
  this.items.splice(item, 1);
};

Cart.prototype.updateCounter = function () {
  document.getElementById('itemCount').textContent = '(' + this.items.length + ')';
};

var CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'bag');
  new Product('assets/banana.jpg', 'banana');
  new Product('assets/bathroom.jpg', 'bathroom');
  new Product('assets/boots.jpg', 'boots');
  new Product('assets/breakfast.jpg', 'breakfast');
  new Product('assets/bubblegum.jpg', 'bubblegum');
  new Product('assets/chair.jpg', 'chair');
  new Product('assets/cthulhu.jpg', 'cthulhu');
  new Product('assets/dog-duck.jpg', 'dog-duck');
  new Product('assets/dragon.jpg', 'dragon');
  new Product('assets/pen.jpg', 'pen');
  new Product('assets/pet-sweep.jpg', 'pet-sweep');
  new Product('assets/scissors.jpg', 'scissors');
  new Product('assets/shark.jpg', 'shark');
  new Product('assets/sweep.png', 'sweep');
  new Product('assets/tauntaun.jpg', 'tauntaun');
  new Product('assets/unicorn.jpg', 'unicorn');
  new Product('assets/usb.gif', 'usb');
  new Product('assets/water-can.jpg', 'water-can');
  new Product('assets/wine-glass.jpg', 'wine-glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();