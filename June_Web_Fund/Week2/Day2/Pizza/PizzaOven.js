// var sandwich1 = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

// function pizzaOven(crustType, sauceType,cheese,toppings){
//     var pizza = [
//         {"crustType":["deepdish","hand tossed", "traditional"]},
//         {"sauceType":["marinara", "alfredo"]},
//         {"cheese":["mozzarella","feta","fourcheese"]},
//         {"toppings":["pepperoni","sausage","mushrooms","olives","onions"]}
//     ];
//     console.log('Allora, mangiamo')
//     return pizza
//}

// pizza.crustType = ["deepdish","hand tossed", "traditional"];
// pizza.protein = ["pepperoni","sausage","skip"];
// pizza.sauceType = ["marinara", "alfredo"];
// pizza.cheese = ["mozzarella","feta","fourcheese"];
// pizza.toppings = ["mushrooms","olives","onions"];


function pizzaOven(crustType,protein,sauceType,cheese,toppings) {
    console.log('One pizza with')
    var pizza = {};
    pizza.crustType = crustType;
    pizza.protein = protein;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza
}

var mangia = pizzaOven("Traditional","skip","marinara","mozzarella","olives")
console.log(mangia)