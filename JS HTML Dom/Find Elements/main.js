/**
 * [1]- document.getElementById('ID')
 * 
 * [2]- document.getElementsByTagName('Tag Name with index')
 * 
 * [3]- document.getElementsByClassName('Class Name with index')
 * 
 * [4]- document.querySelectorAll('ID Or Class Or tag.class with i...')
 */

// [1] Test

document.getElementById("one").innerHTML =
    "div Changed By JavaScript With getElementById";


// [2] Test

document.getElementsByTagName("p")[1].innerHTML =
    "p Changed By JavaScript With getElementsByTagName";


// [3] Test

document.getElementsByClassName("div")[0].innerHTML =
    "div Changed By JavaScript With getElementsByClassName";


// [4] Test

document.querySelectorAll("p")[0].innerHTML =
    "p Changed By JavaScript With querySelectorAll"