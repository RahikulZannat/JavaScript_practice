//functions practice
//convert inches to feet
// function inchesToFeet(inches){
//     var feet = inches / 12;
//     return feet;
// }

// var mimInches=154;
// var feet= inchesToFeet(mimInches);
// console.log(feet);

//check even and odd numbers

// function isEven(number){
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// }

// const myNumb = 11;
// const findEven = isEven(myNumb);
// console.log(findEven);

//check whether the year is leap year or not

// function leapYear(year){
//     if(year%4==0){
//         return true;
//     }
//     return false;
// }

// const enterYear = 2030
// const findLeapYear = leapYear(enterYear);
// console.log("this is leap Year", findLeapYear);


//Calculate Factorial Of A Number Using For Loop


// let Factorial = 1;
// for(let i=1; i<=6; i++){
//     Factorial = Factorial * i;
// }
// console.log(Factorial);

// function Factorial(number){
//     let fact=1;
//     for(let i=1; i<=number; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// const putNumber= 5;
// const findFactorial= Factorial(putNumber);
// console.log(findFactorial);


// function Factorial(number){
//     let fact = 1;
//     let i= 1;
//     while(i<= number){
//         fact = fact *i;
//         i++;
//     }
//     return fact;
// }
// const putNumber= 5;
// const findFactorial= Factorial(putNumber);
// console.log(findFactorial);


//Calculate Factorial In A Recursive Function

// function Factorial(n){
//     if(n==1){
//         return 1;
//     }
//     return n * Factorial(n-1);
// }
// const myFactorial = Factorial(5);
// console.log(myFactorial);

// for(let i=0; i<=30; i++){
//     const output = math.random() * 6;
//     const rounded = math.round(output);
//     console.log(rounded);
// }

// const numbers = [12,22,33,44,55,66];
// let sum = 0;
// for(i=0; i < numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
// }
// console.log(sum);

// wood calculator //

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//     const woodPerChair = 3;
//     const woodPerTable = 10;
//     const woodPerBed = 50;

//     const chairWoodQUantity = chairQuantity * woodPerChair;
//     const tableWoodQuantity = tableQuantity * woodPerTable;
//     const bedWoodQuantity = bedQuantity * woodPerBed;
//     const totalWood = chairWoodQUantity + tableWoodQuantity + bedWoodQuantity;
//     return totalWood;
// }

// const totalWoodCount = woodCalculator(1,1,1);
// console.log(totalWoodCount);


// ================== //

// for (i=0; i <= 50; i++){
//     if(i % 3==0 && i%5==0){
//         console.log("divided by both",i);
//     }
//     else if(i % 3==0){
//         console.log("divided by 5",i);                      
//     }
//     else if(i%5==0 ){
//         console.log("divided by 5",i);
//     }
//     else{
//         console.log("did not divided by 3",i);
//         console.log("did not divided by 5",i);
//     }
// }


// ==== //
// const cart = [{name:'iphone', price:120000, quantity:2},
//                 {name:'nokia', price:22000, quantity:4},
//                 {name:'samsung', price:10000, quantity:9},
//                 {name:'xaiomi', price:9000, quantity:6}
// ];

// let cartTotal = 0;
// for(const product of cart){
//     console.log(product);
//     const productTotal = product.price * product.quantity;
//     cartTotal = cartTotal + productTotal;
// }
// console.log(cartTotal);
// ======== //

function animalCount(mile){
    const first10 = 10;
    const second10=50;
    if(mile <=10){
        const count = mile * first10;
        return count;
    }
    else if(mile <= 20){
        const firstTenMile = 10 * first10;
        const restMile = mile - 10;
        const secondTenMile = restMile * second10;
        const total = firstTenMile + secondTenMile
        return total;
    }
}
const totalAnimal = animalCount(11);
console.log(totalAnimal);