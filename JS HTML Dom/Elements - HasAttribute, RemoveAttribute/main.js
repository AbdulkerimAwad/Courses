var myImage = document.querySelector('img');

if (myImage.hasAttribute('alt')) {
    
    if(myImage.alt === '') {

        myImage.removeAttribute('alt');

    } else {

        myImage.alt = 'This Value From JavaScript';

    }

} else {

    myImage.setAttribute('alt', 'This Value From Js')

}