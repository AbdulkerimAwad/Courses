/*

var i = 0;

for (;;) {

    if (i > 10) break;

    console.log(i);

    i++;

} 

*/

/* ------------------------------------------------- */

// App 1

/* 

function generateYears(Start, End) {

    var years;

    document.write("<select>")

    for (years = Start; years <= End; years++) {

        document.write("<option value=\"" + years + "\">" + years + "</option>");

    }

    document.write("</select>");

}

generateYears(2003, 2021); // Abdulkerim
generateYears(2002, 2021); // Mustafa

 */

/* ------------------------------------------------- */

 // App 2
var
    input1 = document.getElementById("start"),
    input2 = document.getElementById("end"),
    btn = document.getElementById("btn");

    btn.onclick = function() {

    var i;

    document.write("<select>");

    for (i = input1.value; i <= input2.value; i++) {

        document.write("<option value='" + i + "'>" + i + "</option>");
        
    };

    document.write("</select>");

};


