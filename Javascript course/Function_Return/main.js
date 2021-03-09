function myAgeInDays() {
    var myAge = 50;
    return myAge * 365;
}

var hoursCalc = myAgeInDays();

document.getElementById("test").innerHTML =
    "Your Age In Days Is: " + hoursCalc + " Days"
