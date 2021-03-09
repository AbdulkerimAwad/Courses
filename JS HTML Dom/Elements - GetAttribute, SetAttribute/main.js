/**
 * getAttribute('Attribute Name')
 * 
 * setAttribute('Attribute Name', 'Attribute Value')
 * 
 */

var myImage = document.querySelector('img');

console.log(myImage.getAttribute('src'));

if (myImage.alt === '') {

    myImage.setAttribute('title', 'This Value From Js');

} else {

    console.log(myImage.getAttribute('alt'));

}