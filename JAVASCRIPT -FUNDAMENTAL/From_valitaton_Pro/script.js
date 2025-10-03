document.getElementById("form-validate").addEventListener('submit', function (event) {
    event.preventDefault();
    let userName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let ConfirmPassword = document.getElementById("ConfirmPassword").value.trim();

    //Span message showing 
    let Unameerror = document.getElementById("Uname-error")
    let mailerror = document.getElementById("Mail-error")
    let passworderror = document.getElementById("passwords-error")
    let Cpassworderror = document.getElementById("Cpasswords-error")

    let isvalid = true;
    let Unameparttern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailparttern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/
    if (userName === "") {
        Unameerror.innerText = "Name is required"
        isvalid = false
    } else if (!Unameparttern.test(userName)) {
        Unameerror.innerText = "*Enter the fullName"
        isvalid = false
    }
    else if (Unameparttern.test(userName)) {
        Unameerror.innerText = "";
        isvalid = true
    }


    if (email === "") {
        mailerror.innerText = "Email is required"
        isvalid = false
    }
    else if (!emailparttern.test(email)) {
        mailerror.innerText = "Enter the correct Email"
        isvalid = false
    }
    else if (emailparttern.test(email)) {
        mailerror.innerText = "";
        isvalid = true
    }
    if (password === "") {
        passworderror.innerText = "Password is required"
        isvalid = false
    }
    else if (password.length < 3 || password.length > 10) {
        passworderror.innerText = "Should be greater than 3 to below 10 chart only "
        isvalid = false

    }
    else if (password.length > 3 || password.length < 10) {
        passworderror.innerText = "";
        isvalid = true
    }

    if (ConfirmPassword === "") {
        Cpassworderror.innerText = "Confirm Password is required"
        isvalid = false
    }
    else if (ConfirmPassword !== password) {
        Cpassworderror.innerText = "*Password is not match"
        isvalid = false
    }

    else if (ConfirmPassword === password) {
        Cpassworderror.innerText = "";
        isvalid = true
    }

    if (isvalid) {
        alert(`Hi!! ${userName}, welcome your website`)
        console.log(userName, email, password);

    }
})





