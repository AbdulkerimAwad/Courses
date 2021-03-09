var myMainDiv = document.getElementById('main'),

    // creat new paragraph
    myP = document.createElement('p'),

    // creat new text
    myText = document.createTextNode('Text from javascript with appendChild');

myMainDiv.appendChild(myP).appendChild(myText);
