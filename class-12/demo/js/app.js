'use strict';
console.log('app js is connected!');




//These are in an html collection(array) use ref to image index instead of id's for tracking images shown we are still going to count total clicks and each image's click amount.

var imageElements = document.getElementsByTagName('img');
console.log('image Elements source',imageElements);

var pizzaIndex1 = 0;
var pizzaIndex2 = 1;

var rounds = 5;
var allPizzas = [];

function Pizza(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  this.timesShown = 0;
  allPizzas.push(this);
  // console.log('this is our pizza objects being created: ', this);
}
//-----------Add a function for our chart to render pizza data from our objects
function getPizzaArray(nameOfThePropertyIWant){
  var answer = [];

  for(var i = 0; i < allPizzas.length; i++){
    answer[i] = allPizzas[i][nameOfThePropertyIWant];
  }
  console.log('name of the property i want ',answer);
  return answer;
}

// actually create our Pizza's
new Pizza('Brick Oven Pizza', 'images/brickOvenPizza.jpeg');
new Pizza('Calzone', 'images/calzonePizza.jpeg');
new Pizza('Chicago Deep Dish', 'images/chicagoPizza.jpeg');
new Pizza('Chicago Pizza and Oven Grinder', 'images/cpoGinderPizza.jpeg');
new Pizza('Detroit Style', 'images/detroitPizza.jpeg');
new Pizza('Papa Vito\'s Thin', 'images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'images/newYorkPizza.jpeg');
new Pizza('Detroit Style', 'images/sgDansHtossedMeatLovPizza.jpg');




var totalClicks = 0;

function imageWasClicked(event){
  totalClicks++;
  // console.log(totalClicks);
  if(event.srcElement.id === '1'){
    allPizzas[pizzaIndex1].timesClicked++;
  } else if (event.srcElement[pizzaIndex2] === '2'){
    allPizzas[pizzaIndex2].timesClicked++;
  }
  //logic so that we dont see the same images from click to click
  var nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  // console.log('next pizza one from our random(): ', nextPizzaIndex1);
  while((nextPizzaIndex1 === pizzaIndex1) || (nextPizzaIndex1 === nextPizzaIndex2)){
    nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  }
  var nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  while((nextPizzaIndex2 === pizzaIndex2) || (nextPizzaIndex2 === nextPizzaIndex1)){
    nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  }
  //relfect the updates to the new values next pizzas
  //set up reference to new pizza images.
  pizzaIndex1 = nextPizzaIndex1;
  pizzaIndex2 = nextPizzaIndex2;
  imageElements[0].src = allPizzas[pizzaIndex1].imageUrl;
  allPizzas[pizzaIndex1].timesShown++;
  console.log(allPizzas[pizzaIndex1].timesShown);
  imageElements[1].src = allPizzas[pizzaIndex2].imageUrl;
  allPizzas[pizzaIndex2].timesShown++;

  if(totalClicks >= rounds){
    var asideUl = document.getElementById('voteResults');
    for(var i = 0; i < allPizzas.length; i++){
      var voteResultListItem = document.createElement('li');
      voteResultListItem.textContent = `${allPizzas[i].name} was clicked on ${allPizzas[i].timesClicked} times. And was shown ${allPizzas[i].timesShown} times.`;
      asideUl.appendChild(voteResultListItem);

      var percentageListItem = document.createElement('li');
      if(allPizzas[i].timesShown === 0){
        var math = `ZERO clicks and shown ${allPizzas[i].timesShown} times.`;
      }else {
        math = Math.round(((allPizzas[i]['timesClicked'] / allPizzas[i]['timesShown']).toFixed(2) * 100)) + '%';
      }
      percentageListItem.textContent = `${allPizzas[i].name} percentage of clicked on vs times shown is  ` + math;

      asideUl.appendChild(percentageListItem);
    }

    for(var x = 0; x < imageElements.length; x++){
      imageElements[x].removeEventListener('click', imageWasClicked);
    }
    runMyChartsNow();
  }//close if totalClicks
}//closing image was clicked.




function runMyChartsNow(){
  var ctx = document.getElementById('myResultsChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getPizzaArray('name'),
      datasets: [{
        label: '# of Votes',
        data: getPizzaArray('timesClicked'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });




}//this close the canvas chart




for(var i = 0; i < imageElements.length; i++){
  // console.log('this is the even listener for the click on pizza event.');
  imageElements[i].addEventListener('click', imageWasClicked);
}
