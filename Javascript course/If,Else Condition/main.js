
/*
if (condition1) {

} else if (condition2) {

} else {
    // other than conditon 1 or 2
}
*/

// test 1 : type your age
/*
var yourAge = prompt("Whats Your Age?");

if (yourAge < 18) {
    
    document.getElementById("test").innerHTML =
        "sorry your age is " + yourAge + " you are not allowed here";

} else {
    document.getElementById("test").innerHTML =
        "hello your age is " + yourAge + " you are welcome here"
}
*/

// test 2
/*

var ticketprice = 2000; // ticket price variable

if (ticketprice < 1500) { // if the ticket cheaper than 1500

    console.log("Yes Its Cheap"); // display message that its cheap

} else if (ticketprice == 2000) { // if the ticket price is 2000

    console.log("yes it is good price") // display message that its good

} else {

    console.log("no its expensive") // display message that its expensive

}
*/

// test 3
var myCountry = prompt("what is your country?" + " ( Syria, Turkey, Other )");

if (myCountry == "syria") {
    document.getElementById("test").innerHTML =
        "مرحبا بك في موقعنا"
} else if (myCountry == "turkey") {
    document.getElementById("test").innerHTML =
        "hoş geldiniz bizim sitemizde"
} else {
    document.getElementById("test").innerHTML =
        "welcome in our site"
}