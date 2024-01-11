window.onload = function () {
    let botonsReceptes = document.querySelectorAll('.botonsReceptes');
    for (let i = 0; i < botonsReceptes.length; i++) { //afegir un event listener a cada botó
        botonsReceptes[i].addEventListener('click', visibilitatReceptes);

        if (i === botonsReceptes.length - 1) {
            botonsReceptes[i].classList.add('active'); //obra l'ultima recepta
        }
    }

    function visibilitatReceptes() {  //alterna la visibilitat de les receptes
        let card = this.closest('.card');
        let recipeContainer = card.querySelector('.recepta-contenidor');
        let isRecipeVisible = recipeContainer.classList.contains('show'); 

        if (isRecipeVisible) {
            recipeContainer.classList.remove('show');
            this.classList.remove('active'); //treure la classe 'active' quan la recepta es tanca
        } else {
            ocultarReceptes();
            recipeContainer.classList.add('show');
            this.classList.add('active'); //afegir la classe 'active' quan la recepta es mostra
        }
    }
    
    function ocultarReceptes() { //oculta les receptes
        let allRecipeContainers = document.querySelectorAll('.recepta-contenidor');
        for (let j = 0; j < allRecipeContainers.length; j++) {
            allRecipeContainers[j].classList.remove('show');
        }
        
        for (let k = 0; k < botonsReceptes.length; k++) { //treu classe 'active' de tots els botons
            botonsReceptes[k].classList.remove('active');
        }
    }
};
