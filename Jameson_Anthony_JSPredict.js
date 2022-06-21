// 1) Below function will state--> I was born in 1980
function myBirthYearFunc(){
    console.log("I was born in " + 1980);
}
// 2) When this function is called and var birthYearInput =  1980 it will state--> I was born in 1980

function myBirthYearFunc(birthYearInput){
    console.log("I was born in " + birthYearInput);
}


// 3) num1 = 10 and num2 = 20
// When called the function will state--> Summing Numbers!
//                                        num1 is 10
//                                        num2 is 20
//                                        30
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}

console.log(add(4,7))
