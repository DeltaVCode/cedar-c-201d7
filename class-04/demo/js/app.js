'use strict';

console.log('app.js file is connected');

//what is a function 
//function declaration 
function sayHello(){
  //add code 
  console.log('hello world');
}

//invoke or call a function 
// sayHello();

//when we declare a function you have parameters that gives names to function inputs. 


function sayGoodBye(name) {
  console.log('good bye', name);
}

// the data we pass into function is called an argument

// sayGoodBye('Neo');

//if we want to pass information back to the program we can use a return statement.

function getFullName(firstName, lastName){
  return firstName + ' ' + lastName;
}

// var theName = getFullName('Craig', 'Smith');


// console.log('Full Name: ' + theName);





// function yesOrNoPrompt(promptInfo){

//   var userInput = prompt(promptInfo);
//   if (userInput === 'yess'){
//     console.log('hurray');
//   } else if ( userInput === 'no'){
//     console.log('nope');
//   } else if (userInput === 'mabe'){
//     console.log('make up your mind');
//   } else {
//     console.log('ERROR: incorrect useage');
//   }

// }

// yesOrNoPrompt('whell yess or no');
// yesOrNoPrompt('how bout yess or no');
// var pizzaType;

// function pizzaCrust() {

//   var pizzaCrustType = Number(prompt('What type of pizza crust would you like?'));


//    if(pizzaCrustType < 2){
//        confirm('You would like to try our thin crust style pizza?');
//    } else if(pizzaCrustType >=2 && pizzaCrustType <= 5){
//        confirm('You would like the Deep Dish Chicago style pizza?');
//    } else if(pizzaCrustType > 5 && pizzaCrustType <= 10){
//        confirm('You would like the Detroit style pizza?');
//    } else {
//       confirm('You want the italian meat ball sub sandwich?');
//       pizzaType = 'MeatBall Sub Sandwich';
//    }





//    console.log('Customer Pizza Crust Type is: ' + pizzaType);


//    return pizzaCrustType;
// }
// // We can remove this and call it in the console.


// pizzaCrust();
// //run function then see the return value in the console and then run the log to see the value used.
//    console.log('Customer Pizza Crust Type is: ' + pizzaType);
