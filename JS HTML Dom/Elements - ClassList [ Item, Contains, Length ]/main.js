var myDiv = document.querySelector('div');

console.log(myDiv.classList.length);

console.log(myDiv.classList.item(1));

console.log(myDiv.classList.contains('show'));

if(myDiv.classList.contains('click')) {

    console.log('Yes This Element Has click Class');

} else {

    console.log('No This Element Hasn\'t click Class ');

}

/* ---------------------- Test --------------------- */

var myP = document.querySelector('p'),
    myInp = document.querySelector('input'),
    result = document.getElementById('result');

myInp.onclick = function() {

    if (myP.classList.contains(myInp.value)) {

        result.textContent = 'This p has same value as class';

    } else {

        result.textContent = 'Sorry this p hasn\'t same value as class'

    }

}