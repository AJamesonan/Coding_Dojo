const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output 1

console.log(randomCar)//tesla
console.log(otherRandomCar)//mercedes



const employee = {
    name1: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name1: otherName } = employee;
//Predict the output 2
//console.log(name1); //undefined 
console.log(otherName);//elon 



const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output 3
console.log(password); // 12345
console.log(hashedPassword); // undefined 



const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output 4
console.log(first == second); // 5
console.log(first == third); // 2 



const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output 5
console.log(key); //value 
console.log(secondKey);// [ 1, 5, 1, 8, 3, 3 ]
console.log(secondKey[0]);//1
console.log(willThisWork);//5

