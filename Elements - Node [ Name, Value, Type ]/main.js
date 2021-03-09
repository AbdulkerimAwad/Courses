var myMainDiv = document.getElementById('main');

/**
 * myMainDiv =     The Main Parent Div
 * childNodes[3] = <div>This Is Our HTML Div</div>
 * childNodes[0] = First Child Of <div>This Is Our HTML Div</div>
 */

console.log(myMainDiv.childNodes[1].childNodes[0].nodeType);
console.log(myMainDiv.childNodes[1].childNodes[0].nodeName);
console.log(myMainDiv.childNodes[1].childNodes[0].nodeValue);