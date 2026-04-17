const validateForm = (event) => {
    event.preventDefault()

    let username = event.target.username.value
    let password = event.target.password.value

    console.log(username);
    

    let msg = document.getElementById("message");

    if(username === "" && password === ""){
        msg.innerText = "Please Enter Useraname & Password"
        msg.style.color = "red";
    }
    else if(username === "" && password === password){
        msg.innerText = "Please Enter Useraname"
        msg.style.color = "red";
    }
    else if(username === username && password === ""){
        msg.innerText = "Please Enter Password"
        msg.style.color = "red";
    }
    else {
        msg.innerText = "Login SuccessFull"
        msg.style.color = "green";
    }
}