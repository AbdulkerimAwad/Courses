/*

switch (expression) {

case x:
    code to exceute;
    break;

case x:
    code to exceute;
    break;

case x:
    code to exceute;
    break;

case x:
    code to exceute;
    break;

default:
    code to exceute;
    break;
}

*/

var mevsim = prompt("sana göre en favori mevsimin nedir?");

switch (mevsim) {

case "kış":
    alert("bu mevsim çok soğuk");
    break;

case "ilkbahar":
    alert("bu mevsim çok güzel");
    break;

case "yaz":
    alert("bu mevsim çok sıcak");
    break;

case "sonbahar":
    alert("bu mevsim çok muhteşem");
    break;

default:
    alert("özür dileriz hiç siz bir mevsim yazmadınız");
    break;

}