'use strict';
console.log('app.js is connected.');

//global variable 
var userPoints = 0;


// alert('Hello, and welcome to the Guessing Game');
// var user = prompt('What is your name?');
//console.log(user);

//the user variable 
// -string
// -null
// -""empty 

// If the user is empty sting or null, keep asking them for their name
// while(user === '' ||  user === null){do something}

//shorter version
// while(!user){
//   user = prompt('What is your name please? Provide it now.');
// }

//Control Flow 
//if(condition){.............}
// if(condition){....} else {.......}
// if(condition){....} else if(second condition) {.......} else {...}
// if(condition){.....} else if(second condition) {....} else if (thirdCondition) {.....} else {.......}


// This is the not equals comparison operator.
// if(user !== 'craig'){
//   console.log(user);
//   alert('You are not the lowercase craig we are looking for.');
// }

// alert('Hello, ' + user + ' are you ready to play a game?');

var answer = prompt('Is my favorite food popcorn? Please answer yes or no.').toLowerCase();
// console.log(answer);

//Check user input to add points for the game
if(answer === 'no' || answer === 'n'){
  alert('You are right! Popcorn is not my favorite.');
  userPoints = userPoints + 1;
  console.log('this is the point total ', userPoints);
} else {
  alert('Popcorn is good, but not my favorite');
  console.log('this is the point total ', userPoints);
}


var answer = prompt('Is my favorite food pizza? Please answer yes or no.').toLowerCase();
if(answer === 'yes' || answer === 'y'){
  alert('You are right! Pizza is my favorite.');
  userPoints = userPoints + 1;
  console.log('this is the point total ', userPoints);
} else {
  alert('Pizza rules!');
  console.log('this is the point total ', userPoints);
}

/**  multi line comment. 
 
loops will run until a condition is true or truthy, or not true

while(condition){
    has to change 
} 
value =100;
var i = 0;
while(i < value){
  //do something
  i++;
   
}

This is the DO while loop:

do {
  here code runs first and always then the condition is checked. 
} while(condition)



for( 1. setUP     2. condition  3.change variable){
    code that does stuff 
}
*/
for(var i = 0; i < 10; i++){
 // console.log(i);
  if(i === 2){
   // console.log('keep going past this number: ', i);
    continue;
  }
  if(i === 4){
  //  console.log('the variable i : ', i);
  }
  
}

//Array Review
var foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];
// console.log(foodsILike);

//use a loop to traverse through an array
// lots of different array methods.
/** 
for(var x = 0; x < foodsILike.length; x++){
  console.log('for loop doing work', foodsILike[x]);
 }
 */
// add to an array
//  foodsILike.push('swiss chard');
//  console.log('array push method adding an element', foodsILike);

// //remove from array 
// foodsILike.pop();
// console.log('array pop method removing an element', foodsILike);

// //shift an array
// var shiftArray = foodsILike.shift();
// console.log('shift array method', shiftArray);
// console.log(foodsILike);

// var mixedUpArray = ['yeehaw',42,true,['yes'], {}];
// console.log(mixedUpArray);




// Evaluating Comparisons ----------------------------
// Type coercion, weak typing, truthy/falsy
// falsy values are :
// - 0
// - null
// - NaN
// - ''
// - undefined
// - false


// truthy values. ==== everything else.

// Logical Operators ------------------------
// - (craig === 'instructor' || 'teacher')    => will not Work

// - (craig === 'instructor' && craig === 'teacher')

// Comparison  operators : Comparison Operator

// - < less than.
// - > great than
// - <= less than or equal to
// - >= great then or equal to

// - == kinda equals
// - != kinda not equals
// ----------------------------------------
//stictly sure data type is correct.
// - === strictly equals
// - !== strictly not equals

alert('you have ' + userPoints + 'points out of 5 points, good job.');