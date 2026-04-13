// console.log("hello world");


// var a = 10;
// var b = 20;

// console.log(a < b);

// console.log(2 ** 3);

// if( a > b){
//     console.log("a is big");
// } else{
//     console.log("b is big");
// }

// var num=10
// console.log(typeof num);

// var num1="hi"
// console.log(typeof num1);

// var num3=10.23
// console.log(typeof num3);

// var num4=true
// console.log(typeof num4);


// var x = 10
// var y = "10"

// if(x==y) console.log(-1);   //StrictOperator(===)

// if(x!==y) console.log(1);

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

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];

}















