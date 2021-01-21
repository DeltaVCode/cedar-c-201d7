'use strict';
console.log('common js connected');


var allPizzas = [];


function Pizza(name, imageUrl, timesClicked){
  this.name = name;
  this.imageUrl = imageUrl;
  if(timesClicked){
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }
  this.timesShown = 0;
  allPizzas.push(this);
}

var savedPizzaString = localStorage.getItem('savedPizza');
if(savedPizzaString){
  var arrayOfNotYetPizzaObject = JSON.parse(savedPizzaString);
  for(var j = 0; j < arrayOfNotYetPizzaObject.length; j++){
    new Pizza(arrayOfNotYetPizzaObject[j].name, arrayOfNotYetPizzaObject[j].imageUrl,
      arrayOfNotYetPizzaObject[j].timesClicked);
  }
} else {
  new Pizza('New York Thin', 'images/newYorkPizza.jpeg');
  new Pizza('Detroit Style', 'images/detroitPizza.jpeg');
  new Pizza('Calzone', 'images/calzonePizza.jpeg');
  new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
  new Pizza('Chicago Deep Dish', 'images/chicagoPizza.jpeg');
  new Pizza('Chicago Pizza and Oven Grinder', 'images/cpoGinderPizza.jpeg');
  new Pizza('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
  new Pizza('Shot Gun Dan\'s', 'images/sgDansHtossedMeatLovPizza.jpg');

}

allPizzas[0].timesShown = 1;
allPizzas[1].timesShown = 1;
