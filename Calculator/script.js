const add = () =>{
    event.preventDefault()
    let val1 = document.getElementById("num1").value
    let val2 = document.getElementById("num2").value

    let display = document.getElementById("result");

    let num1 = parseInt(val1)
    let num2 = parseInt(val2)

    display.innerHTML = `The sum of ${num1} and ${num2} is ${num1 + num2}`
} 

const sub = () =>{
    event.preventDefault()
    let val1 = document.getElementById("num1").value
    let val2 = document.getElementById("num2").value

    let display = document.getElementById("result");

    let num1 = parseFloat(val1)
    let num2 = parseFloat(val2)

    display.innerHTML = `The sub of ${num1} and ${num2} is ${num1 - num2}`
} 

const mul = () =>{
    event.preventDefault()
    let val1 = document.getElementById("num1").value
    let val2 = document.getElementById("num2").value

    let display = document.getElementById("result");

    let num1 = parseInt(val1)
    let num2 = parseInt(val2)

    display.innerHTML = `The mul of ${num1} and ${num2} is ${num1 * num2}`
} 

const div = () =>{
    event.preventDefault()
    let val1 = document.getElementById("num1").value
    let val2 = document.getElementById("num2").value
    
    let display = document.getElementById("result");

    let num1 = parseFloat(val1)
    let num2 = parseFloat(val2)

    display.innerHTML = `The div of ${num1} and ${num2} is ${num1 / num2}`
} 