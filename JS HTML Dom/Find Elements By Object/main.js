/**
* [1] document.title
* [2] document.images
* [3] document.forms
* [4] document.body
* [5] document.anchor
* [6] 
*/

// [1]
var myDiv = document.getElementById("title");

myDiv.innerHTML = document.title;


// [2]
var myDiv = document.getElementById("image");

myDiv.innerHTML = document.images[1].src;


// [3]
var myDiv = document.getElementById("form");

myDiv.innerText = document.forms[1].z2.value;

// [4]
var myDiv = document.getElementById("body");

myDiv.innerHTML = "</br>" + "document.body: " + document.body.innerHTML;


// [5]
var myDiv = document.getElementById("anchor");

myDiv.innerText = "Anchors: " + document.anchors.length;


// [6]
var myDiv = document.getElementById("links");

myDiv.innerText = "links: " + document.links.length;