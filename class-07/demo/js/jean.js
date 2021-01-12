// //OBJECT LITERAL
'use strict';
// Store hours: Opens 6am, Closes 7pm 
var hourOfOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
console.log('Show me hours of operation: ',hourOfOp);

var storeOne = {
  city: 'Seattle',
  minCustHour: 23,
  maxCustHour: 65,
  avgCookieSale: 6.3,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookies: 0,
  hourlyCust: function (){
    for (var i = 0; i < hourOfOp.length; i++) {
    this.custPerHour.push(random(this.minCustHour,this.maxCustHour));  
    } 
  }, //closes hourlyCust function
  calcCookiesPerHour: function(){
    this.hourlyCust();
    for (var i = 0; i < hourOfOp.length; i++) {
      //Create a variable to hold the cookies each hour
      //                         then, we take the customer per hour that we calculate in the method hourlyCust and multiply is times the avgCookieSale amount that is given to us. We are now rendering numbers in our arrays. 
      var thisHourTotal = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      console.log('This hour: ' + hourOfOp[i] + ' has a total of ' + thisHourTotal);
      this.cookiesPerHour.push(thisHourTotal);
      //this where we will keep running total of cookies.
      this.totalCookies = this.totalCookies + thisHourTotal;
      // or we can  write it like this
      // this.totalCookies += thisHourTotal;
    }
  },
  render(){
    this.calcCookiesPerHour();
//render object literal to the page
  }
};
console.log('Show me my first store object: ',storeOne);

storeOne.render();
// second store -----------
// var storeTwo = {
//   city: 'Tokyo',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookieSale: 1.2,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0
// };
// setAge:   function() {
// this.age = randomAge(3, 12) + 'Months old.';
// }
// };
// petTwo.setAge();
// var storeThree = {
//   city: 'Dubai',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookieSale: 3.7,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0
// };
// var storeFour = {
//   city: 'Paris',
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookieSale: 2.3,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0
// };
// var storeFour = {
//   city: 'Lima',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookieSale: 4.6,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0
// };
function random(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
};