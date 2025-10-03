
/// This code developed by sathish
///user intergeration  below first code user enter the store variable
document.getElementById("form-validate").addEventListener('submit', function (event) {
    event.preventDefault();
    ///
    const Username = document.getElementById    ("Username").value.trim()
    const Email = document.getElementById("Email").value.trim()
    const password = document.getElementById("password").value.trim()
    const ConfirmPassword = document.getElementById("ConfirmPassword").value.trim();
    //// Span valitation  user thorugh eror showing 

    const Unameerror = document.getElementById("Uname-error")
    const Emailerror = document.getElementById("Email-error")
    const passworderror = document.getElementById("password-error")
    const Cpasserror = document.getElementById("Cpass-error")

    let isvalid = true;

    const Passwordpattern = /^[A-Za-z]+ [A-za-z]+$/
    const emailpattern = /^[a-z0-9]+@+[a-z]{4,}\.[a-z]{2,}$/

    if (Username === "") {
        Unameerror.innerText = "*Name is required"
        isvalid = false
    }
    else if (!Passwordpattern.test(Username)) {
        Unameerror.innerText = "Enter the Full name"
        isvalid = false
    }
    else if (Passwordpattern.test(Username)) {
        Unameerror.innerText = "";
        isvalid = true
    }
    if (Email === "") {
        Emailerror.innerText = "*Email is required"
        isvalid = false
    }

    else if (!emailpattern.test(Email)) {
        Emailerror.innerText = "Enter the correct email"
        isvalid = false
    }

    else if (emailpattern.test(Email)) {
        Emailerror.innerText = "";
        isvalid = true
    }
    if (password === "") {
        passworderror.innerText = "*Password is required"
        isvalid = false

    }
    else if (password.length < 3 || password.length > 10) {
        passworderror.innerText = "Password should be greater than 3 above to 10 below "
        isvalid = false
    }

    else if (password.length > 3 || password.length < 10) {
        passworderror.innerText = "";
        isvalid = true
    }
    if (ConfirmPassword === "") {
        Cpasserror.innerText = "*ConfirmPassword is required "
        isvalid = false
    }
    else if (password !== ConfirmPassword) {
        Cpasserror.innerText = " Password is not match"
        isvalid = false

    }

    else if (password === ConfirmPassword) {
        Cpasserror.innerText = "";
        isvalid = true
    }
    if (isvalid) {
        alert(`Hey !!${Username} ,Welcome your new chapter 🤨`)
        console.log(Username, Email, password);

    }

})

