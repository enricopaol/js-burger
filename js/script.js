var calculatePriceBurger = document.getElementById('button-price-burger');
calculatePriceBurger.addEventListener('click', function() {

    // Ricavo il Nome Burger e lo stampo nel footer
    var inputNomeBurger = document.getElementById('input-name-burger').value;

    // Valido il nome burger con un ciclo while 
    while (inputNomeBurger == '') {
        inputNomeBurger = prompt('Dai un nome al tuo burger');
    }
    
    // Checkboxes:
    // Targhetizzo e salvo in una variabile le checkbox
    var ingredientCheckbox = document.getElementsByClassName('ingredient-checkbox');
    // eseguo un ciclo for per scorrere la collection html e vedere se le chechbox
    // sono attive. Se sono attive ricavo il valore e faccio la somma.
    var somma = 5;

    for(var i = 0; i < ingredientCheckbox.length; i++) {
        var thisCheckbox = ingredientCheckbox[i];

        if (thisCheckbox.checked) {
            somma += parseInt(thisCheckbox.value); 
        }
        // console.log('somma dentro', somma);

    }

    // Creo un array con i codici coupon per avere uno sconto del 50%
    var coupons = ['90506AXZYJ', '87605DGHET', '67321KOLVC'];
    console.log(coupons);
    // Targhetizzo il valore dell'input coupon
    var inputCoupon = document.getElementById('coupon-input');

    // Creo un ciclo per scorrere i coupons.
    for (var j = 0; j < coupons.length; j++) {
        var thisCoupon = coupons[j]; 
               
        // se inputCoupon è uguale a uno dei coupons, la somma diminuisce del 50%
        if (inputCoupon.value == thisCoupon) {
            somma -= somma * 0.5;
        }
    } 



    // Targhetizzo e Stampo il nome del burger e la somma
    // var finalBurgerName = inputNomeBurger;
    // document.getElementById('final-name-burger').innerHTML = finalBurgerName;

    // Targhetizzo e stampo il valore della somma
    document.getElementById('final-price').innerHTML;
    


    

    console.log('somma dopo', somma);
    

});


