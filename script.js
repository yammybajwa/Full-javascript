// alert

// alert('welcome here!');

//prompt with if else condition

// const user = prompt();

// if(user >= 18 ){
//     alert("you are eligible");
// } 
// else{
//     alert("you are not eligible");
// };

// const myName="muhammad";

// for(let i=0 ; i<myName.length; i++){
//     const result = myName;
//     console.log(result)
// };

// const array = ["john","yammy","bajwa"]

// for (let index=0; index < 20; index++){
//     console.log(array)
// };

//table teller using loop and input 

// const btn = document.getElementById("submit");

// btn.onclick =()=>{
// const value = document.getElementById("value").value;



//     for(let index=1; index < 11;index++){
//        const result = value *index
//       const finalResult = console.log( value+ " *", index + "=",result);
//     }
// } 

// & this method is use for more than one condition in a one statements like stName and cgpa and fail pass method

// let age =18;
// let hobby = "cricket";
// if(age >= 18 & hobby === "cricket"  ){
//     alert("welcome to our club")
// } else{
//     alert("sorry Better luck try Next Time!")
// }

//adding and removing element from array

// let myArray=["Zayan","hello","john","markovniko's","ICT" ,"bug","fox"];

//for removing element from the end of array
// myArray.pop();

//for removing element from the first
// myArray.shift();

// for putting element in the array on 1st number
// myArray.unshift("Backend Developer");

//target for some specific word element in word : key point => its counting start from zero
// console.log(myArray[0]);

//splice method
//insert one or more elements anywhere in an array, while optionally removing one or more elements that come after it

//its index also start from zero
// myArray.splice(0,1,"alexy");

//slice method
//slice method to copy one or more consecutive elements in any position and put them into a new array
//its index also start from zero addition of extra one number at the end 
// const sliceMethod= myArray.slice(0,3)

// console.log(sliceMethod);

// ===>  changing case 

// const UserValue = prompt("") 

// const cleanCity=["fsd","karachi","lahore"];


// for ( let i=0 ; i<3 ; i++){
//     if(UserValue === cleanCity[i]){
//         alert("your city is clean")
//     } else{
//         alert("city is not in a List");
//     }
// }
 

//  String Measure Part

// const StringOne ="JOhnAlexBajwa";
// console.log(StringOne.length);
// console.log(StringOne[10]);

// const cities = prompt();
// const character = cities.length;
// if( character > 3 ){
//     console.log(cities.slice(0,4))
// }

//Rounding number
// let num = 5.23
// const number = Math.round(num);

// console.log(number)

// genrating random number without decimal
const number =Math.random();
 
const multilply = number * 6;
const final = Math.floor(multilply); 
console.log(final)

