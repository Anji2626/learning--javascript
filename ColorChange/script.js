const  col = () => {

    let display = document.getElementById("box");
    
    let codes = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

    let color = "#";

    for(let i = 0 ; i < 6 ; i++){
        let rand = Math.floor(Math.random()*16)
        color += codes[rand]
    }

    display.style.backgroundColor = color

    document.getElementById("display").innerText = color;
}

col()