var x = 1; // global scope

function changeXto2() {

    x = 2; // global scope

}

function changeXto3() {

    x = 3; // global scope

}

function changeXto3() {

    var x = 3; // local scope

}

console.log(x); // 1

changeXto2();

console.log(x); // 2

changeXto3();

console.log(x); // 2 global scope