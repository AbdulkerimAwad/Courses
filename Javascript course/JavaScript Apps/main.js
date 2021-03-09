/* --------------- The Age Calculater -------------- */

function calc() {

    var myAge = document.getElementById("Age"),
        time = document.getElementById("select"),
        result = document.getElementById("AgeResulte");

    if (myAge.value == "") {

        result.innerHTML = "sorry you didn't write any thing";

    } else if (myAge.value == 0) {

        result.innerHTML = "sorry this value can't be zero";

    } else if (myAge.value < 0) {

        result.innerHTML = "sorry this value can't be negative";

    } else if (time.value == 12) {

        result.innerHTML = "your age is: " + myAge.value * time.value + " months";

    } else if (time.value == 365) {

        result.innerHTML = "your age is: " + myAge.value * time.value + " days";

    } else {

        result.innerHTML = "your age is: " + myAge.value * time.value + " hours";

    }


}

/* ------------- End The Age Calculater ------------ */

/* ---------------- Values Selector ---------------- */

var myBtn = document.getElementById("find");

myBtn.onclick = function() {

    var input = document.getElementById("inputText"),
        selVal = document.getElementById("selectValue"),
        result = document.getElementById("selectResult");

    if (selVal.value == "1") {

        result.innerHTML = "the min value is: " + Math.min(...input.value.split(", "));

    } else {

        result.innerHTML =  "the max value is: " + Math.max(...input.value.split(", "));

    } 

}

/* -------------- End Values Selector -------------- */

/* ----------------- Random Number ----------------- */

function set() {

    var result = document.getElementById("res"),
        x = Math.random(),
        endValue = 1000;

        result.innerHTML = Math.round(x * endValue) + 1;

}

/* ----------------- End Random Number ----------------- */

/* -------------------- Keyboard ------------------- */

function type() {

    var typeA = document.getElementById("a");

    document.getElementById("result").value += typeA.value;

}