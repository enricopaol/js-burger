var calculatePriceBurger = document.getElementById('button-price-burger');
calculatePriceBurger.addEventListener('click', function() {

    // Ricavo il Nome Utente
    var nomeBurger = document.getElementById('input-name-burger');

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
        console.log('somma dentro', somma);

    }

    console.log('somma dopo', somma);
    

});


