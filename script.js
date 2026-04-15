// console.log("hello world");


// var a = 10;
// var b = 20;

// console.log(a < b);

//console.log(2 ** 3);

// if( a > b){
//     console.log("a is big");
// } else{
//     console.log("b is big");
// }

// var num=10
//  console.log(typeof num);

// var num1="hi"
// console.log(typeof num1);

// var num3=10.23
// console.log(typeof num3);

// var num4=true
// console.log(typeof num4);


// var x = 10
// var y = "10"

// if(x===y) console.log(-1);   //StrictOperator(===)

//if(x!==y) console.log(1);

//Prime Number.

// var num = 7;
// var fc = 0
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         fc++;
//     }
// }
// if(fc==2){
//     console.log("Prime Number");
// }

// var c = 0 ;
// var num = 2;

// while(c < 10){
//     var fc = 0
//     for(let i=1;i<=num;i++){
//         if(num%i==0){
//             fc++;
//         }
//     }
//     if(fc == 2){
//         console.log(num);
//         c++;
//     }
//     num++;
// }

//Identifiers(Varibales)

// var a = 10  //Redeclare and Reassign
// var a = 20
// console.log(a)

// const b = 30  //Can't Redeclare and Reassign
// console.log(b)

// let c = 40   //Only Reassign
// c = 50
// console.log(c)


//Arrays

// let UserData = [10,"hello",true,'javascript',7.65];
// console.log(UserData);
// console.log(UserData[0]);

// for(let i = 0;i < UserData.length; i++){
//     console.log(typeof UserData[i]);
// }

// let UserData1 = [10,"hello",true,'javascript',7.65];

//UserData1.push(20);
//UserData1.pop();
//UserData1.shift();
// UserData1.unshift(20);
// console.log(UserData1);

// const a = [10,20]

// a[0] = 30

// console.log(a);

// const obj = {
//     id : 1,
//     name : "js",
//     myData : [10,"ok",2.30]
// }

// console.log(obj.myData);

// boj.loc = "Ap"

// console.log(obj);

// const users = [
//     {
//         id : 1,
//         name : "user1",
//         loc : "Ap"
//     },

//     {
//         id : 2,
//         name : "user2",
//         loc : "HYD"
//     }
// ]
// console.log(users);
// console.log(users[0]);
// console.log(users[1].loc);

// for of - arrays,
// for in - objects

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];

// }

// function myFun() {
//     console.log("ok")
//     return -1
// }
// console.log(myFun())
// console.log(myFun)

// function myFun(a,b) {
//     console.log(a+b)
//     console.log("ok")
//     return a-b
// }
// console.log(myFun())
// console.log(myFun(10,"ok"))
// console.log(myFun(10,20))

// function myFun(a,b) {
//     console.log(a-b)
//     console.log("ok")
//     return a*b
// }

// const myFun =  function(a , b){
//     return a - b
// }

// console.log(myFun(10 , 5));

// function calculator(num1 , num2 ,operator){
//     let result
//     switch(operator){
//         case'+':
//             result = num1 + num2
//             console.log("The Addition of "+num1+" & "+num2+" is "+result)
//             break
//         case'-':
//             result = num1 - num2
//             console.log("The Subtraction of "+num1+" & "+num2+" is "+result)
//             break
//         case'*':
//             result = num1 * num2   
//             console.log("The Multiplication of "+num1+" & "+num2+" is "+result)
//             break 
//         case'/':
//             result = num1 / num2
//             console.log("The Divison of "+num1+" & "+num2+" is "+result)
//             break
//         case'%':
//             result = num1 % num2 
//             console.log("The Modulus of "+num1+" & "+num2+" is "+result)
//             break
//         default:
//             console.log("Enter Invalid Input")
//     }
// }
// calculator(10,5,'+')

// let name = "anji"
// let age = 20;

// console.log("My name is "+name+" My ag is "+age)
// console.log(`My name is ${name} My age is ${age}`);

// DOM(document object model)

// let para = document.getElementsByClassName("para");

// let Box = document.getElementsByClassName("Box");

// console.log(Box);

// Box[2].innerHTML = 'bye'
// para[0].innerHTML = "hello"


//Events

// const myFun = () => {
//     console.log("hello");
    
// }

// const myFun = () => {
//     let display = document.getElementsByClassName("para"); 
//         display[0].innerHTML = "bye"
// }

// const myFun = () => {
//     let display = document.getElementById("buchi"); 
//     display.innerHTML = display.innerHTML === "Hello" ? "Bye" : "Hello"
// }

// let b = true;
// const myFun = () => {
//     let display = document.getElementById("buchi"); 
//     if(b)
//        display.innerHTML = "bye"
//     else
//         display.innerHTML = "Hello"
//     b = !b;
// }

// const myFun = () => {
//     let display = document.getElementById("buchi"); 
//     display.innerHTML = display.innerHTML === "Hello" ? "Bye" : "Hello"
//     display.style.color = "red";
// }

// const myFun = () => {
//     let display = document.getElementById("buchi"); 
//     if(display.innerHTML === "JavaScript"){
//         display.innerHTML = "bye"
//         display.style.color = "red"
//     }
//     else{
//         display.innerHTML = "JavaScript"
//         display.style.color = "blue"
//     }
// }

// const myFun = () => {
//     let display = document.getElementById("buchi"); 
//    if(display.src === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfkCEjWkINAy1xTHx2kOQqJeParscyDTydA&s"){
//         display.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVw4_OCGfr2dcKp4sJiFjg2VFNNRGY_Gxjg&s"
//    }
//    else
//     display.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfkCEjWkINAy1xTHx2kOQqJeParscyDTydA&s"

// }

























