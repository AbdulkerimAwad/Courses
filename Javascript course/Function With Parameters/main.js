/*
function ageCalcer(myAge) {

    var 
        year = 365;
        
        return myAge * year;
        
}

var myName = "Abdulkerim";
    
document.getElementById("test").innerHTML =
    "my name is " + 
    myName + " and my age in days is " + ageCalcer(18) + " days";
*/

// test 2
/*
function yourName(firstName,lastName) {

    return firstName + lastName ;

}

document.getElementById("test").innerHTML =
    yourName("Abdulkerim", " Awad");
*/

// test 3

function yourAgeInHours(yourAge) {
    
    var 
        calculater = 365 * 24;

    return yourAge * calculater;
}

TheYearlyAge = prompt("What Is Your Age?");

document.getElementById("test").innerHTML =
    "Your Age In Hours Is " + "<span style='color: #00FF00; font-weight:bolder'>" + yourAgeInHours(TheYearlyAge) + "</span>" + " Hours"