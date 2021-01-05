'use strict';
//first thing to do. 
console.log('This is the app.js, connected to the index.');


// //prompt our user for input data
// var userName = prompt('What is your name?');
// console.log(userName);

// //Greet the user
// alert('Hello ' + userName);


// //Validate user input. 
// var toLowerCase = userName.toLowerCase();
// console.log(toLowerCase);

// //Validate the input using conditional logic using strict equals.

// // if(condition){do something}else{do something else}


// if(toLowerCase === 'craig' || toLowerCase === 'bob')//FALSE

// //WILL NOT RUN
// {

//   alert('Welcome back to my page, ' + userName);

// } 


// //DO THIS
// else {

//   alert('Welcome new user to my page.');

// }


// logical operator example ---------------
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else if
// var myBooleenValueTrue = true;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = false;
//next else if
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = true;
//else
// var myBooleenValueTrue = false;
// var anotherBooleenValueFalse = false;
// var thirdBooleenValueTrue = false;

// if (myBooleenValueTrue && thirdBooleenValueTrue){
//   alert('The && will run if both are true');
//   console.log('both values were true');
// } else if(myBooleenValueTrue || anotherBooleenValueFalse){
//   alert('The || will run if both are true');
//   console.log('one of values was true');
// } else if(thirdBooleenValueTrue){
//   alert('the 3rd value was tru so this will run');
//   console.log('thirdBooleenValueTrue was true');
// } else {
//   alert('nope we reached the else statement.');
//   console.log('There were no true values');
// }


//create an emtpy array
var emptyArray = [];
//create an array full of quiz answers 
//array index      0   1   2   3    4
var quizAnswer = ['b','c','c','c','a'];
console.log(quizAnswer);


//nested array         0           1             2
var nestedArray = [['yes','y'],['no','n'],['maybe','maybe not', 'hello']];
                      // 0    1      0   1      0        1            2
//multiline array
var nestedArray = [
  ['yes','y'],
  ['no','n'],
  ['maybe','maybe not', 'hello']
];
// we dont always have the same data types in our arrays. 
var mixedDataTypes = [['yes'],'string',10,true,false];

// // console.log();