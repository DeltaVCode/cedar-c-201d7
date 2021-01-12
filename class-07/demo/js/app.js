'use strict';
console.log('This is the app.js connected.');


// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have: 
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like.
// an image
// is good with kids
// is good with dogs
// is good with other animals

// var petOne = {

// name: 'Fluffy',
// breed: 'maine coon',
// age: 0,
// imageName: 'diabloBlanco',
// interests: ['Sun light', 'Mouse Toys', 'CatNip'],
// isGoodWithKids: false,
// isGoodWithDogs: true,
// isGoodWithCats: false,
// setAge: function () {
//   this.age = randomAge(3, 12) + ' Months';
// }
// };
//petOne.setAge();



// constuctor function 

function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats){
  this.name = name,
  this.breed = breed,
  this.imageName = imageName,
  this.interests = interests,
  this.isGoodWithKids = isGoodWithKids,
  this.isGoodWithDogs = isGoodWithDogs,
  this.isGoodWithCats = isGoodWithCats
}


//Pet.prototype.functionName = function(any, parameters, can, go, here){};
//Now, any pet created withthe Pet constructor will be able to call this method.

Pet.prototype.setAge = function(){
  this.age = randomAge(3,12) + ' Months old.';
};

//create the random age
function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


Pet.prototype.getInterests = function(){
  var randomIndex = Math.floor(Math.random() * this.interests.length);
  console.log('random index for interests', randomIndex);
  return this.interests[randomIndex];
};

Pet.prototype.render = function(){
    //Grab the Parent element 
    //create child elements article, h2, p, ul, li, interests and image
    var parentElement = document.getElementById('kittenProfiles');
    //article
    var article = document.createElement('article');
    parentElement.appendChild(article);
    // h2

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);

    //paragraph
    var petPara = document.createElement('p');
    //  template literal use back ticks and the $ to mix strings and js stuff. 
    petPara.textContent = `${this.name} is adorable, and is ${this.age} months old.`;
    console.log(petPara);

    //pet interests 
    var ul = document.createElement('ul');
    article.appendChild(ul);
    //fill list items 
    for(var i = 0; i < this.interests.length; i++){
    var li = document.createElement('li');
    //update the li to new interests
    li.textContent = this.interests[i];
    //add to the ul the list item 
    ul.appendChild(li);
    }
      var img = document.createElement('img');
      img.setAttribute('src', 'images/' + this.imageName + '.jpeg');
      img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!, no TODAY!');
      article.appendChild(img);


//Add a Table 
var animalTable = document.getElementById('adoptPets-holder');
var petRow = document.createElement('tr');
//create element
var nameCell = document.createElement('td');
//update the textcontent
nameCell.textContent = this.name;
//then append
petRow.appendChild(nameCell);

//breed
var breedCell = document.createElement('td');
breedCell.textContent = this.breed;
petRow.appendChild(breedCell);

//ageCell
var ageCell = document.createElement('td');
ageCell.textContent = this.age;
petRow.appendChild(ageCell);
//interests

var interestsCell = document.createElement('td');
// interestsCell.textContent = this.getInterests();
interestsCell.textContent = this.interests;
petRow.appendChild(interestsCell);

animalTable.appendChild(petRow);


};//close the render prototype function for our pet objects. 




























var firstPet = new Pet('Nova', 'Lab', 'labradorDog',['chewy Toys','Playin Keep Away','Dog Park'], true, true, true);
firstPet.setAge();
firstPet.getInterests();
var secondPet = new Pet('Tiger','US shorthair', 'diabloBlanco', ['cat knip', 'needy', 'small'], true, true, true);
secondPet.setAge();
secondPet.getInterests();
var thirdPet = new Pet('Iggy', 'iguana', 'littleDragon', ['green', 'scaly', 'chill', 'dragony'], true, true, true);
thirdPet.setAge();
thirdPet.getInterests();


var adoptPet = [firstPet,secondPet,thirdPet];


//loop through the objects to show some information on the page. 

for(var i = 0; i < adoptPet.length; i++){
  console.log(adoptPet[i]);
        adoptPet[i].render();
}



//IIFE tomorrow 
