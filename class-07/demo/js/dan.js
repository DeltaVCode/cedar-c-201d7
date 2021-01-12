var theTimesArray = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var Seattle = { 
    minCust: 23,
    maxCust: 65,
    avgCookie:6.3,
    totalCookies: 0,
    custPerHour:[],
    avgCookiePerHour:[],
    calcCustomerEachHour : function() {
        for (var i = 0; i < theTimesArray.length; i++) {
          console.log([i]);
            this.custPerHour.push(random(this.minCust,this.maxCust));
            console.log(this.custPerHour);
        }
    },
    calcCookiesPerHour : function () {
        this.calcCustomerEachHour();
        for (i = 0; i < theTimesArray.length; i++){
            var thisTotal = Math.ceil(this.custPerHour[i]*this.avgCookie);
            this.totalCookies += thisTotal;
            this.avgCookiePerHour.push(this.totalCookies);
        }
    }
    
}

Seattle.calcCookiesPerHour();



// var Tokyo = {
//     MinCust: 3,
//     MaxCust:24,
//     AvgCookie:1.2,
//     TotalCookies: 0,
//     CustPerHour:[],
//     AvgCookiePerHour:[],
//     randomPopulate : function() {
//         for (i = 0; i < theTimesArray.length; i++){
//             this.CustPerHour[i] = Math.floor(Math.random()*(this.MaxCust - this.MinCust))+this.MinCust;
//         }
//         for (i = 0; i < theTimesArray.length; i++){
//             this.AvgCookiePerHour[i] = thisCustPerHour[i]*this.AvgCookie;
//         }
//     }
// }
// var Dubai = {
//     MinCust: 11,
//     MaxCust:38,
//     AvgCookie:3.7,
//     TotalCookies: 0,
//     CustPerHour:[],
//     AvgCookiePerHour:[],
//     randomPopulate : function() {
//         for (i = 0; i < theTimesArray.length; i++){
//             this.CustPerHour[i] = Math.floor(Math.random()*(this.MaxCust - this.MinCust))+this.MinCust;
//         }
//         for (i = 0; i < theTimesArray.length; i++){
//             this.AvgCookiePerHour[i] = thisCustPerHour[i]*this.AvgCookie;
//         }
//     }
// }
// var Paris = {
//     MinCust: 20,
//     MaxCust:38,
//     AvgCookie:2.3,
//     TotalCookies: 0,
//     CustPerHour:[],
//     AvgCookiePerHour:[],
//     randomPopulate : function() {
//         for (i = 0; i < theTimesArray.length; i++){
//             this.CustPerHour[i] = Math.floor(Math.random()*(this.MaxCust - this.MinCust))+this.MinCust;
//         }
//         for (i = 0; i < theTimesArray.length; i++){
//             this.AvgCookiePerHour[i] = thisCustPerHour[i]*this.AvgCookie;
//         }
//     }
// }
// var Lima = {
//     MinCust: 2,
//     MaxCust: 16,
//     AvgCookie:4.6,
//     TotalCookies: 0,
//     CustPerHour:[],
//     AvgCookiePerHour:[],
//     randomPopulate : function() {
//         for (i = 0; i < theTimesArray.length; i++) {
//             this.CustPerHour[i] = Math.floor(Math.random()*(this.MaxCust - this.MinCust))+this.MinCust;
//         }
//         for (i = 0; i < theTimesArray.length; i++){
//             this.AvgCookiePerHour[i] = thisCustPerHour[i]*this.AvgCookie;
//         }
//     }
// }
function random(min,max) {
  // console.log('min and max', min, max);
  // console.log('random',Math.floor(Math.random * (max - min + 1) )+ min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Seatle List Population. Generate Numbers first, create list items next, append the children
//function SeattleList(){
 //   Seattle.randomPopulate();
//     var SeattleUl = document
//     for (var i = 0; i < theTimesArray.length; i++) {
//         var theListItem = document.createElement('li');
//         theListItem.textContent = theTimesArray[i] + ": " + Seattle.AvgCookiePerHour[i] + " cookies";
//         SeattleUl.appendChild('li');
//     }
// }
//SeattleList();