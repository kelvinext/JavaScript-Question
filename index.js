// Question 1 : Given a string, resverse each word in the sentence
// let str = "Hey, My Self Kelvin Pradhan";
// let savedStr = str.split(" ").map((word)=>{
//     return word.split("").reverse().join("");
// });
// console.log(savedStr.join(" "));

// Question 2 : How to check if an object is an array or not? Provide some code.
// function checkArray(elem){
//  return Array.isArray(elem);
// }
// console.log(checkArray([]));
// console.log(checkArray({}));

// Question 3 : How to empty an array in JavaScript ?
// let arr = [1,2,3,4,5,6,7] ;
// arr.length = 0;
// console.log(arr);

// Question 4 : How would you check if a number is an integer ?
// 1.
// function checkInt(elem){
//     return Number.isInteger(elem);
// }
// console.log(checkInt(1.2));
// console.log(checkInt(1));
// 2.
// let a = 12.5;
// if(a%1 == 0){
//     console.log('yes this number is integer');
// }
// else {
//     console.log("no this number is not integer");
// }

// Question 5 : Make this work :
// duplicate([1,2,3,4,5]);  // [1,2,3,4,5,1,2,3,4,5]
// function concat(arr){
//     return arr.concat(arr);
// }
// console.log(concat([1,2,3,4,5]));

// Question 6 : Write a JavaScript function that reverse a number ?
// 1.
// function resver(num){
//     return Number(num.toString().split("").reverse().join(""));
// }
// console.log(resver(12));
// 2.
// function resver(num){
//     let rev = 0;
//     while(num > 0){
//         let rem = num%10;
//         rev = rev*10+rem;
//         num = Math.floor(num/10);
//     }
//     return rev;
// }
// console.log(resver(1234));

// Question 7 : Write a JavaScript function that checks whether a passed string is palindrome or not
// function strPalCheck(str){
//     let rever = str.split("").reverse().join("");
//     if(rever == str) return true;
//     else return false;
// }
// console.log(strPalCheck("lool"));
// console.log(strPalCheck("kel"));

// Question 8 : Write a JavaScript function that returns a passed string with letters in alphabetical order
// function sort(word){
//     return word.split("").sort().join("");
// }
// console.log(sort("apple"));

// Question 9 : Write a javaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
// function convertUppercase(str){
//   let allwords = str.split(" ").map((word)=>{
//     return  word.charAt(0).toUpperCase() + word.substring(1);
//   })
//  console.log(allwords.join(" "));
// }
// convertUppercase("my name is kelvin pradhan");

// Question 10 : Write a JavaScript function to get the number of eccurrences of each letter is specified string
// function occ(str){
// let occurences = {};
// str.split("").forEach((elems)=>{
//     if(occurences.hasOwnProperty(elems)== false){
//         occurences[elems] = 1;
//     }
//     else{
//         occurences[elems]++;
//     }
// })
// return occurences;
// }
// console.log(occ("kelvin pradhan"));

// Question 11 : loop an array and add all members of it
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// arr.forEach((elems)=>{
//     sum = sum + elems;
// })
// console.log(sum);

// Question 12 : In an array of number and String, only add those members which are not strings
// let arr = [1,2,3,"kumail","ashish",5,"ayan","nabeel"];
// let sum = 0;
// arr.forEach(function(elems){
//     if(typeof elems === 'number') {
// sum = sum + elems;
//     }
// })
// console.log(sum);


// Question 13 : Loop an arary of object and remove all objects which don't have gender's value male
// let arr = [
//     {name:"kelvin",gender:"male"},
//     {name:"kumail",gender:"male"},
//     {name:"krittika",gender:"female"},
//     {name:"shivangi",gender:"female"},
//     {name:"kavya",gender:"female"}
// ];
// let newArr = arr.filter((elem)=>{
// return elem.gender == "male";
// })
// console.log(newArr);

// Question 14 : Write a JavaScript fuction to clone a array
// function cloneArr(arr){
//    let newArr = [];
//    arr.forEach((e)=>{
// newArr.push(e);
//    })
//    return newArr;
// }
// newArr =  cloneArr([1,2,3,4,5]);
//  console.log(cloneArr([1,2,3,4,5]));
//  newArr.pop();
//  console.log(newArr);

// Question 15 : Write a JavaScript function which accepts an argument and returns the type
// Note : There are six possible values that typeof returns : object , boolean, function, number, string, and undefined.
// function typeTellet(arg){
// return typeof arg;
// }
// console.log(typeTellet({}));
// console.log(typeTellet(1));
// console.log(typeTellet("kelvin"));
// console.log(typeTellet(true));
// console.log(typeTellet(undefined));
// console.log(typeTellet(function(){}));

// Question 16 : Write a JavaScript funciton to get the first element of an array of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// function retrieve(arr, n = 1) {
//     if (n <= arr.length) {
//         for (let i = 0; i < n; i++) {
//             console.log(arr[i]);
//         }
//     }
//     else {
//         console.log("yeh kuch zada he nhi ho gaya," + 5 + " toh elements hai");
//     }
// }
// retrieve([1, 2, 3, 4, 5], 5);

// Question 17 : Write a JavaScript funciton to get the last element of an array of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// function retrieve(arr, n = 1) {
//     if (n <= arr.length) {
//         for (let i = 0; i < n; i++) {
//             console.log(arr.length - i);
//         }
//     }
//     else {
//         console.log("yeh kuch zada he nhi ho gaya," + 5 + " toh elements hai");
//     }
// }
// retrieve([1, 2, 3, 4, 5],5);

// Question 18 : Write a javaScript program to find the most frequent item of an array 
// function freq(arr){
// let obj = {};
// arr.forEach((elems)=>{
//     if(obj.hasOwnProperty(elems)) obj[elems]++;
//     else obj[elems] = 1;
// })
// console.log(obj);
//    let ans = Object.keys(obj).reduce((acc,next)=>{
//     return obj[acc] > obj[next] ? acc : [next];
//    })
//    console.log(ans);
// }
// freq([1,2,3,4,5,64,3,7,87,2,1,3,8]);

// Question 19 : Write a javaScript program to shuffle an array 
// function shuffle(arr){
// let arrLength = arr.length;
// while(arrLength > 0){
// arrLength--;
// let randamNum = Math.floor(Math.random() * arrLength);
// let temp = arr[arrLength];
// arr[arrLength] = arr[randamNum];
// arr[randamNum] = temp;
// }
// return arr;
// }
// console.log(shuffle([1,2,3,4,5,6,7,8,9,10]));

// Question 20 : Write a JavaScript program to compute the union of two arrays
// Sample Data : 
// console.log(union([1,2,3], [100,2,1,10]));
// [1,2,3,10,100];
// function union(arr1,arr2){
//    return  [...new Set(arr1.concat(arr2))];
// }
// console.log(union([1,2,3], [100,2,1,10]));






