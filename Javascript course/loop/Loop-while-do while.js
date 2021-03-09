
/* 
    syntax while:

    while (condition) {

        statement

    }
*/

// App
/* 
function generateYears(Start, End) {

    var years = Start;

    document.write("<select>")

    while (years <= End) {

        document.write("<option value=\"" + years + "\">" + years + "</option>");

        years++;

    }

    document.write("</select>");

}

generateYears(2003, 2021); // Abdulkerim
generateYears(2002, 2021); // Mustafa
generateYears(2004, 2021); // Baraa
*/

/* ------------------------------------------------- */

/* 
syntax do, while:

do {

    statement

} while ( condition )
*/

// App
function generateYears(Start, End) {

    var years = Start;

    document.write("<select>")

    do {

        document.write("<option value=\"" + years + "\">" + years + "</option>");

        years++;

    } while (years <= End)

    document.write("</select>");

}

generateYears(2003, 2021); // Abdulkerim
generateYears(2002, 2021); // Mustafa
generateYears(2004, 2021); // Baraa