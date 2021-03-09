var myMainDiv = document.getElementById('main'),

    // create New Element
    myNewElement = document.createElement('div'),

    // create new text
    myText = document.createTextNode('this is div from javascript');


myMainDiv.insertBefore(myNewElement, myMainDiv.childNodes[3]);

myNewElement.appendChild(myText);