/*
    var = 10 + 1 + "Ahmet" = 11Ahmet
    var = "Ahmet" + 10 + 1 = Ahmet101
    var = "Ahmet" + (10 + 1) = Ahmet11
*/

var myName = "Abdulkerim",
    myAge = 18,
    myCountry = "Syria";

document.getElementById("kim_ben").innerHTML =
    "<p>" + "<span style='color:blue'> my name is: " + "</span>" + myName + "</p>" +
    "<p>" + "<span style='color:red'>" + "my age is: " + "</span>" + myAge + "</p>" +
    "<p>" + "<span style='color:green'>" + "my country is: " + "</span>" + myCountry + "</p>"