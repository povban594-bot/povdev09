// function congratulate (user,day){
//     console.log(`conncratulation!!${user} on your ${day} achivement`);

// }
// let steps = 12000;
// let workouTime = 60;
// if (steps > 10000){
//     congratulate("Daniel","monday");
// }
// if (workouTime > 30 ){
//     congratulate("Alice","wednesday");
// }
function calcutateFinalPrice(price,itemName){
    let taxRate = 0.1;
    let discount = 0.2;
    let deliveryFree = 5;
    let total = (price *(1-discount))*(1+taxRate)+deliveryFree;
    console.log (`final price for ${itemName} is $ ${total}`);
}
calcutateFinalPrice(80,"shoes");

