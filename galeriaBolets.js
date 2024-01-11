window.onload = function () {
    let botoMostrarNoms = document.querySelector(".mostrarNomsBolets");

    botoMostrarNoms.addEventListener("click", function () {
        let galeriaItems = document.querySelectorAll(".galeria-item");

        for (let i = 0; i < galeriaItems.length; i++) {
            let item = galeriaItems[i];
            let nomBolet = item.querySelector(".nom-bolet");
            let missatgeNomBolet = item.querySelector(".missatge-nom-bolet");

            if (nomBolet && missatgeNomBolet) {
                missatgeNomBolet.remove(); //treu el nom del bolet
            } 
            else if (nomBolet) {
                let missatgeDiv = document.createElement("div");
                missatgeDiv.className = "missatge-nom-bolet";
                missatgeDiv.textContent = nomBolet.textContent;
                
                item.append(missatgeDiv); //posa el nom del bolet
            }
        }
    });
};
