'use strict';
console.log('app js is connected!');

var imageElements = document.getElementsByTagName('img');
var nameForm = document.getElementById('nameForm');

var pizzaIndex1 = 0;
var pizzaIndex2 = 1;

var rounds = 10;





var totalClicks = 0;

function imageWasClicked(event){
  totalClicks++;
  if(event.srcElement.id === '1'){
    allPizzas[pizzaIndex1].timesClicked++;
  } else if (event.srcElement[pizzaIndex2] === '2'){
    allPizzas[pizzaIndex2].timesClicked++;
  }
  var nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);

  while((nextPizzaIndex1 === pizzaIndex1) || (nextPizzaIndex1 === nextPizzaIndex2)){
    nextPizzaIndex1 = Math.floor(Math.random() * allPizzas.length);
  }
  var nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  while((nextPizzaIndex2 === pizzaIndex2) || (nextPizzaIndex2 === nextPizzaIndex1)){
    nextPizzaIndex2 = Math.floor(Math.random() * allPizzas.length);
  }

  pizzaIndex1 = nextPizzaIndex1;
  pizzaIndex2 = nextPizzaIndex2;

  imageElements[0].src = allPizzas[pizzaIndex1].imageUrl;
  allPizzas[pizzaIndex1].timesShown++;

  imageElements[1].src = allPizzas[pizzaIndex2].imageUrl;
  allPizzas[pizzaIndex2].timesShown++;

  if(totalClicks >= rounds){
    localStorage.setItem('savedPizza', JSON.stringify(allPizzas));

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
    }// closes

    for(var x = 0; x < imageElements.length; x++){
      imageElements[x].removeEventListener('click', imageWasClicked);
    }
    // runMyChartsNow();
  }//close if totalClicks
}//closing image was clicked.






for(var i = 0; i < imageElements.length; i++){
  // console.log('this is the even listener for the click on pizza event.');
  imageElements[i].addEventListener('click', imageWasClicked);
}


//form
nameForm.addEventListener('submit', function(event){
  event.preventDefault();
  var nameUserProvided = document.getElementById('name').value;
  localStorage.setItem('userName', nameUserProvided);
  nameForm.textContent = 'Welcome to our site ' + nameUserProvided;
});

