'use strict';
console.log('connected');

// function lotteryNumberPicker() {
//   //Start by creating an Array for the numbers
//   var lotteryArray = [];
//   //Set the first number in the array to be 10
//   lotteryArray[0] = 10;
//   //run 5 times to get a random number
//   //we can write with a for loop or a while loop
//   for(var i = 0; i < 5; i++){
//   //random generated number.
//   // lotteryArray[i] = Math.ceil(Math.random() * 99);
//   //A method on arrays htat allows up to put value on the end of arrays is called push();
//   lotteryArray.push(Math.round(Math.random() * 99));
//   }
//   console.log(lotteryArray);
//   //Pick one number and return it. 
//   return lotteryArray;
  

// }
// lotteryNumberPicker();
// function lotteryNumberPicker(){
//   var lotteryArray = [];
//   lotteryArray[0] = 10;
//   for(var i = 0; i < 5; i++){
//       lotteryArray[i] = Math.ceil(Math.Random() * 99);
//   }
//  return lotteryArray;
// }

function lotteryNumbers(quantity, lotteryMax){
  var lotteryArray = [];
  for(var i = 0; i < quantity; i++){
  console.log(i); 
      lotteryArray.push(Math.ceil(Math.random() * lotteryMax));
  }
  console.log(lotteryArray);
 return lotteryArray;
}

var lotteryQuantity = Number(prompt('How many numbers would you like?'));
var lotteryMax = Number(prompt('What is the Max amount per number?'));
alert(lotteryNumbers(lotteryQuantity, lotteryMax));