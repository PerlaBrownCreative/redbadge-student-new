// PROBLEM 2
function convertToDegreeCelcus(temps) {
    return temps.map(function (singleTemp) { return Math.floor(((+singleTemp - 32) * 5) / 9); });
}
var dailyTemps = [93, 78, 88];
console.log(convertToDegreeCelcus(dailyTemps));
