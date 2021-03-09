var myFirstDiv = document.getElementById('div1'),
    myFirstBtn = document.getElementById('button1'),
    mySecBtn = document.getElementById('button2');

myFirstBtn.onclick = function() {

    myFirstDiv.classList.add('new-class');

};

mySecBtn.onclick = function() {

    myFirstDiv.classList.remove('new-class');

};

/* ------------------------------------------------- */

var myThiBtn = document.getElementById('button3'),
    mySecDiv = document.getElementById('div2');

myThiBtn.onclick = function() {

    mySecDiv.classList.toggle('style');

}