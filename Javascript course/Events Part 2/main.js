var myInput = document.getElementById("input"),
    myDiv = document.getElementById("div");


// element.event = function () { code }
myInput.onkeyup = function () {
    myDiv.innerHTML = myInput.value * 3.75;
}