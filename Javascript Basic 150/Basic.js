// Q1. Write a JavaScript program to display the current day and time in the following format
// Sample Output : TOday is :Tuesday
// Current time is : 10pm: 30:38


let date = new Date();
let day = date.getDay();

let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

switch(day){
    case 0:
    day ="Sunday"
    break;
    case 1:
    day = "Monday"
    break;
    case 2:
    day="Tuesday"
    break;
    case 3:
    day ="wednesday"
    break;
    case 4:
    day="Thursday"
    break;
    case 5:
    day="Friday"
    break;
    case 6:
    day="Saturday"      
}

console.log(`Today is: ${day}`)
console.log(`Current time is:${currentTime} `)
