// Q1. Write a JavaScript program to display the current day and time in the following format
// Sample Output : TOday is :Tuesday
// Current time is : 10pm: 30:38


// let date = new Date();
// let day = date.getDay();

// let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// switch(day){
//     case 0:
//     day ="Sunday"
//     break;
//     case 1:
//     day = "Monday"
//     break;
//     case 2:
//     day="Tuesday"
//     break;
//     case 3:
//     day ="wednesday"
//     break;
//     case 4:
//     day="Thursday"
//     break;
//     case 5:
//     day="Friday"
//     break;
//     case 6:
//     day="Saturday"
//     default:
//     day="no day"


// }

// console.log(`Today is: ${day}`)
// console.log(`Current time is:${currentTime} `)

// Learinig:
// 1:new Date() and getHour(), getMinute(),getSeconds()
// 2:switch case 
    //   break => if case match then code break help to out from code stop code execution 
    //   default => is when no case match the deafult code run

// ------------------------------------------------------

// Q-2 Write a JavaScript program to print the contents of the current window.

// function printPage(){
//     window.print();
// }

// Learinig:
// 1:- onclick
// 2:window.print() : - print the content of the html page;


// -----------------------------------------------

// Q-3 Write a JavaScript program to get the current date.

// let date = new Date();
// let currentDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`


// console.log(currentDate)

// Leanring:
// 1:getMonth(),getDate(),getFullYear()


// ------------------------------------------------------------------

// Q-4 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
// a=side
// b= base
// c=side

// area = root s(s-a)(s-b)(s-c)
// s=a+b+c/2 
// let a =5
// let b= 6;
// let c= 7;

// let perimeter = (a+b+c)/2;

// let area = Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)))

// console.log(area)

// Learning:-
// Math.sqrt is used for square root


// ---------------------------------------------

// Q-5 Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front

let names = "sandeep"


let x = names.split("")
let str=[];

function rotate(){
    for(let i=0;i<=x.length;i++){
      str.push(x[x.length-i])
              
        }
console.log(str.join(""))
}




// setInterval(rotate,1000)





