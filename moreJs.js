// unit conversation

// function sheerToMon(sheer){
//     const mon = sheer / 40;
//     return mon;
// }
// const totalMon = sheerToMon(120);
// console.log(totalMon);

// shopping iteams

// function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
//     const perShirtPrice = 100;
//     const perPantPrice = 200;
//     const perShoeprice = 500;

//     const shirtTotalSall = shirtQuantity * perShirtPrice;
//     const pantTotalSell = pantQuantity * perPantPrice;
//     const shoeTotalSell = shoeQuantity * perShoeprice;

//     var totalSell =  shirtTotalSall + pantTotalSell + shoeTotalSell;
//     return totalSell;
// }

// const totalCost = totalSales(2,2,2);
// console.log(totalCost);


// function DeliveryCost(tshirtQuantity){
//     const first100Cost = 100;
//     const second100COst = 80;
//     const third100Cost = 50;
//     if(tshirtQuantity <= 100){
//         const first100TshirtCost = tshirtQuantity * first100Cost;
//         return first100TshirtCost;
//     }
//     else if(tshirtQuantity < 200){
//         const first100 = 100 * first100Cost;
//         const restTshirt = tshirtQuantity - 100;
//         const second100 = restTshirt * second100COst;
//         const total = first100 + second100;
//         return total;
        
//     }
//     else if(tshirtQuantity < 300){
//         const first = 100 * first100Cost;
//         const rest = tshirtQuantity - 100;
//         const second = rest * second100COst;
//         const againRest = tshirtQuantity -80;
//         const third = againRest * third100Cost;
//         const inTotal = first + second + third;
//         return inTotal;
//     }
// }
// const totalTshirtQuantity = DeliveryCost(250);
// console.log(totalTshirtQuantity);