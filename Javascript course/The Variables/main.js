/* global console, alert */

/*
    start with letter, underscore, $

    var = javascript variable keyword

    myprice = variable name

    ( = ) = assignment operator

    450 = variable value
*/

var mainPrice = 450,

    mySmallDiscount = 50,

    myMediumDiscount = 100,

    myBigDiscount = 250;

document.getElementById("price").innerHTML = mainPrice;

document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; // 450 - 50 = 400

document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount; // 450 - 100 = 350

document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; // 450 - 250 = 200