'use strict';
console.log('demo js is connected!');



var clickableH1 = document.getElementById('click-h1');

/** 
clickableH1.addEventListener('click', function(event){
    console.log('H1 was clicked1');
    alert('Welcome to the site!');
}); 
*/
/** 
var clickableH1 = document.getElementById('click-h1');
clickableH1.addEventListener('click', function(event){
   document.getElementByTagName('html')[0].style.backgroundColor = '#23F';
}); 
*/


// we can also do things like 'mouseover' https://developer.mozilla.org/en-US/docs/Web/Events

/** 
clickableH1.addEventListener('click', function(event){
  var randomNumber = Math.floor(Math.random() * 256 * 256 * 256);
  document.getElementsByTagName('html')[0].style.backgroundColor = '#' + randomNumber.toString(16);
}); 
*/






/** 
 var clickableH1 = document.getElementById('click-h1');
clickableH1.addEventListener('click', function(event){
    console.log('H1 was clicked1');
}); 
*/





/** 
var changeText = document.getElementById('change-text');
changeText.addEventListener('input', function(event){             
document.getElementById('changeHOne').textContent = event.srcElement.value
}); 
*/

/** 
document.getElementById('showPassword').type = "text"; 
*/