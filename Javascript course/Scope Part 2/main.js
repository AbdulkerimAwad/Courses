(function adlarımız() {
    var birinciAd = "Abdulkerim",
        ikinciAd = "Ahmet",
        üçüncüAd = "Ali";

    console.log(birinciAd);

    function iki() {
        console.log(ikinciAd);

        function üç() {
            console.log(üçüncüAd);
        }

        return üç();

    }

    return iki();

})();