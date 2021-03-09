var
    myInput = document.getElementById("enter"),

    currency = document.getElementById("mycCurrency"),

    resulte = document.getElementById("myDiv");

currency.onchange = function () {

resulte.innerHTML = myInput.value * currency.value;

};