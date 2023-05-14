
var count = 0;
var slideIndex = 0;

var btn = document.getElementById("btn");
var slides = document.getElementsByTagName("img");
var cars = document.getElementsByName("car");


slides[0].style.display = "block";
// showSlides();

function showSlidesForward() {
    var i;
    // var slides = document.getElementsByTagName("img");
    for (i = 0; i < 6; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= 6) { slideIndex = 1 }
    slides[slideIndex].style.display = "block";
    //   setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showSlidesBack() {

    for (var i = 0; i < 6; i++) {

        slides[i].style.display = "none";

    }
    slideIndex--;
    if (slideIndex < 0) { slideIndex = 5 }
    slides[slideIndex].style.display = "block";

}

// function cars(){

// var cars=document.getElementsByClassName("car");
// var all = document.getElementsByClassName("all");
// all.classList.remove("show");
// cars.classList.add('show');






// }

var phone = document.getElementById("phone");



function getphones() {

    console.log("hhhhhhhhhh");
    var all = document.getElementsByClassName("all");
    for (var i = 0; i < all.length; i++) {
        all[i].classList.add("hide");
    }

    var phones = document.getElementsByClassName("phone");
    for (var i = 0; i < phones.length; i++) {
        phones[i].classList.remove("hide");
        phones[i].classList.add("show");
    }
    var phone1 = document.getElementsByClassName("phone1");
    for (var i = 0; i < phone1.length; i++) {
        phone1[i].classList.remove("hide");
        phone1[i].classList.add("show");
    }




}


function getcars() {

    console.log("ccccccccccccc");
    var all = document.getElementsByClassName("all");
    for (var i = 0; i < all.length; i++) {
        all[i].classList.add("hide");
    }

    var cars = document.getElementsByClassName("car");
    for (var i = 0; i < cars.length; i++) {
        cars[i].classList.remove("hide");
        cars[i].classList.add("show");
    }
    var cars1 = document.getElementsByClassName("cars1");
    for (var i = 0; i < cars1.length; i++) {
        cars1[i].classList.remove("hide");
        cars1[i].classList.add("show");
    }




}



function getlaps() {

    console.log("llllllllll");
    var all = document.getElementsByClassName("all");
    for (var i = 0; i < all.length; i++) {
        all[i].classList.add("hide");
    }

    var laps = document.getElementsByClassName("lap");
    for (var i = 0; i < laps.length; i++) {
        laps[i].classList.remove("hide");
        laps[i].classList.add("show");
    }
    var lap1 = document.getElementsByClassName("lap1");
    for (var i = 0; i < lap1.length; i++) {
        lap1[i].classList.remove("hide");
        lap1[i].classList.add("show");
    }


}


function getmakeup() {

    console.log("llllllllll");
    var all = document.getElementsByClassName("all");
    for (var i = 0; i < all.length; i++) {
        all[i].classList.add("hide");

    }
    // var alldiv=document.getElementsByClassName("div1");
    // for(var i=0;i<alldiv.length;i++){
    //     alldiv.classList.add("hide");
    // }

    var makeup = document.getElementsByClassName("makeup");
    for (var i = 0; i < makeup.length; i++) {
        makeup[i].classList.remove("hide");
        makeup[i].classList.add("show");
    }
    var makeup1 = document.getElementsByClassName("makeup1");
    for (var i = 0; i < makeup1.length; i++) {
        makeup1[i].classList.remove("hide");
        makeup1[i].classList.add("show");
    }



}

// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {


    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        console.log("ffffffffffffffff");
    } else {
        document.getElementById("myBtn").style.display = "none";
        console.log("kkkkkkkkk")
    }
}

// var countNum = 0;
// var counter = document.querySelectorAll(".btn");

// for (var i = 0; i < counter.length; i++) {

//     counter[i].addEventListener("click", function () {

//         countNum++;
//         console.log(countNum)
//         var c = document.createElement("span");
//         c.innerHTML = countNum;
//         c.style.backgroundColor = "green"

//         var count = document.getElementById("count");

//         count.append(c);
//     });


// }


// var c = document.createElement("span");
// c.innerHTML = countNum;
// c.style.backgroundColor = "red"

// var count = document.getElementById("count");

// count.append(c);
// *******************************************************************************************************************************************



function counts() {
    count++;
    showCount();
}

function showCount() {
    var c = document.getElementById("count");
    c.innerHTML = count;
    c.style.color = "red"
}

// var btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//     counts();
// })


function showCart() {
    var show = document.createElement("p");
    show.innerHTML = ""
    show.style.background = " rgb(162, 115, 200)"
    show.style.width = "300px"
    show.style.height = "500px"
    show.style.position = "absolute"
    show.style.left = "85%"
    show.style.top = "5px"

    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh")

    var parent = document.getElementById("parent")
    parent.append(show);
}