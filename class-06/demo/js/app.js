'use strict';
console.log('Pet Adoption project go!');


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

//object literal
var petOne = {
      name: 'Fluffy',
      breed: 'tabby',
      imageName: 'diabloBlanco',
      interests: ['Sun light','Mouse Toys','Red Dot'],
      isGoodWithKids: false,
      isGoodWithDogs: true,
      isGoodWithCats: false,
      setAge: function(){
        this.age = randomAge(3,12) + ' Months old.';
      }
};

petOne.setAge();

// second pet -----------

var petTwo = {

  name: 'Tiger',
  breed: 'Tiger',
  age: 0,
  imageName: 'tommyBob',
  interests: ['Rainy Days', 'Running', 'Yarn'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithCats: true,
  setAge:   function() {
    this.age = randomAge(3, 12) + 'Months old.';
  }
};
petTwo.setAge();

function randomAge(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
// off the wall add of key value pair to object literal after object was created 
petOne.isFixed = true;
petTwo.isFixed = false;



// console.log(petOne);

//Create DOM elements and render it in html

//create a new element the parent element of the child element that we will create to render the pet article in the html
var parentElement = document.getElementById('kittenProfiles');
// console.log(parentElement);

// Create <article>
var article = document.createElement('article');
// console.log(article);
parentElement.appendChild(article);

// <h2></h2>
// Create h2
var h2 = document.createElement('h2');
h2.textContent = petOne.name;
console.log(h2);
article.appendChild(h2);

// <p></p>
var petPara = document.createElement('p');
petPara.textContent = 'Cats are adorable, and this cat is ' + petOne.age + ' old.';
article.appendChild(petPara);

// <ul>
var petUl = document.createElement('ul');
article.appendChild(petUl);

for(var i = 0; i < petOne.interests.length; i++){
  var petLi = document.createElement('li');
  console.log(petLi);
  petLi.textContent = petOne.interests[i];
  // console.log(petLi);
  petUl.appendChild(petLi);
}
//   <li></li>
// </ul>



//add image pet One.
var petOneImg = document.createElement('img');
console.log(petOneImg);
petOneImg.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
petOneImg.setAttribute('alt', 'Cute kitty huh? Adopt kitty Now!');
article.appendChild(petOneImg);



// <img />
// </article> 