let number1;
let name1;
let stringExample: string;
let boolExample: boolean;
let numberExample: number;
let unionStringNumber: number | string;
let springWeather: any;

unionStringNumber = 5;
unionStringNumber = "5";

stringExample = "Hello";

//Type Inference
let number2 = 5;

let restaurant = {
    name: "McDonalds",
    dineIn: false,
    foodItems: ["hamburgers", "fries", "apple pie"],
};

restaurant.foodItems.forEach((item) => {
    console.log(item.toUpperCase())
});

/*
Create a function that takes 3 parameters for 
buying or selling stock
-first parameter is the StockName
-second parameter is the Quantity
-third parameter is the Action - "buy-stock" or "sell-stock"
-example return  statement "You just bought 15 stocks of 
Bank of America for 
a total of $152"
*/

function buySellStock(stockName: string, qty: number | string, action: "sell-stock"|"buy-stock") {
    let total = Number(qty) * 15
    let status = action ==="sell-stock" ? "sold" : "bought"

    return `You just ${status} ${qty} shares of ${stockName} Stock for a total of $${total}`
}

buySellStock("Bank of America", 5, "sell-stock");
console.log(buySellStock("Bank of America", 5, "sell-stock"))

//interfaces only used for objects
interface IWeather{
    temp: number;
    cloudConditions: string;
    next5dayTemps?: number[];
}

let weather: IWeather = {
    temp: 55,
    cloudConditions: "overcast",
    next5dayTemps: [56, 43, 54]
}

console.log(weather.cloudConditions)

// let weather = {
//     temp: 78,
//     cloudConditions: 'overcast',
//     next5dayTemps: [81, 74, 49, 81, 83],
// }








