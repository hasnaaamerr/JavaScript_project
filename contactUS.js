

var inputName = document.getElementById("name");


console.log(inputName.value);


inputName.addEventListener("input", function (e) {

    if (inputName.value.length < 10 || !isNaN(e.target.value)) {

        inputName.style.border = "2px solid red";


    } else {
        inputName.style.border = "2px solid green";


    }
});


var password = document.getElementById("password");

password.addEventListener("input", function (e) {

    if (password.value.length < 8 || password.value.length > 20) {
        password.style.border = "2px solid red";

    } else {
        password.style.border = "2px solid green";

    }

});



var email = document.getElementById("email");
var emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("input", function (e) {
    // console.log("hhhhhhhhhhh")

    if (emailRE.test(email.value)) {
        console.log("valid email address");
        email.style.border = "2px solid green";

    } else {
        console.log("Invalid email address");
        email.style.border = "2px solid red";
    }
});


var phone = document.getElementById("phone");
var phoneRE = /^01[012]\d{8}$/;
phone.addEventListener("input", function (e) {

    if (phoneRE.test(phone.value)) {
        phone.style.border = "2px solid green";
        console.log("valid email address");
    }
    else {

        phone.style.border = "2px solid red";
        console.log("hhhhhhhhhalid email address");
    }
})





