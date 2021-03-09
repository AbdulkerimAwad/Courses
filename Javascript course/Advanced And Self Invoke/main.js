function calcYourMoney() {

    var enter = document.getElementById("dollar").value,
        resulte = enter * 7.5;
    
    if (isNaN(enter)) {
        document.getElementById("resulte").innerHTML = "özür dileriz bu kıymet numara olmalı";
    } else if (enter < 0) {
        document.getElementById("resulte").innerHTML = "özür dileriz bu kıymet olumlu olmalı";
    } else if (enter === "") {
        document.getElementById("resulte").innerHTML = "özür dileriz bu giriş alanı boş olmamalı";
    } else if (enter == "0") {
        document.getElementById("resulte").innerHTML = "özür dileriz bu değer sıfırdan daha büyük olmalı";
    } else if (enter > "999999") {
        document.getElementById("resulte").innerHTML = "<p>"+ "ne yapıyorsun amcam !!!" + "</p>" + "<img src='https://static.arageek.com/wp-content/uploads/2018/04/maxresdefault-10-e1524732512880.jpg' style='width:200px; height: 200px; padding: .5em'>";
    } else {
        document.getElementById("resulte").innerHTML = "<p style='color:#555'>" + enter + " USD = " + resulte + " TL" + "</p>"
    }

}