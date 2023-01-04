// Ce fichier permet de programmer le panier //
// On initialise ici 5 variables qui vont permettre de savoir le prix du jeu en fonction de sa position dans le panier //
var PrixPosition1 = "";
var PrixPosition2 = "";
var PrixPosition3 = "";
var PrixPosition4 = "";
var PrixPosition5 = "";
// Le panier possède 5 emplacements , cette variable permet de dire quel est l'emplacement libre le plus haut //
var EmplacementLibre = PanierJeu1;
// Ces 4 fonctions correspondent au clic sur la touche d'ajout au panier pour les 4 jeux possibles //
// On ajoute le nom du jeu dans le panier et on augmente sa valeur en fonction de la derniere position libre //
function AjouterJeu1(){
    if(EmplacementLibre == PanierJeu1){
        PrixPosition1 = valeur1.innerHTML;
        EmplacementLibre.textContent = "-" + Nom1.innerHTML + "  [" + PrixPosition1 + " $]"; 
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur1.innerHTML)).toString();
        Retirer1.style.visibility = "visible";
        EmplacementLibre = PanierJeu2;
    }else if(EmplacementLibre == PanierJeu2){
        PrixPosition2 = valeur1.innerHTML;
        EmplacementLibre.textContent = "-" + Nom1.innerHTML + "  [" + PrixPosition2 + " $]";
        Retirer2.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur1.innerHTML)).toString();
        EmplacementLibre = PanierJeu3;
    }else if(EmplacementLibre == PanierJeu3){
        PrixPosition3 = valeur1.innerHTML;
        EmplacementLibre.textContent = "-" + Nom1.innerHTML + "  [" + PrixPosition3 + " $]"; 
        Retirer3.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur1.innerHTML)).toString();
        EmplacementLibre = PanierJeu4;
    }else if(EmplacementLibre == PanierJeu4){
        PrixPosition4 = valeur1.innerHTML;
        EmplacementLibre.textContent = "-" + Nom1.innerHTML + "  [" + PrixPosition4 + " $]";
        Retirer4.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur1.innerHTML)).toString();
        EmplacementLibre = PanierJeu5;
    }else if(EmplacementLibre == PanierJeu5){
        PrixPosition5 = valeur1.innerHTML;
        EmplacementLibre.textContent = "-" + Nom1.innerHTML + "  [" + PrixPosition5 + " $]"; 
        Retirer5.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur1.innerHTML)).toString();
        EmplacementLibre = 0;
    }else if(EmplacementLibre == 0){
        alert("Votre panier est plein")
    }
}

function AjouterJeu2(){
    if(EmplacementLibre == PanierJeu1){
        PrixPosition1 = valeur2.innerHTML;
        EmplacementLibre.textContent = "-" + Nom2.innerHTML + "  [" + PrixPosition1 + " $]"; 
        Retirer1.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur2.innerHTML)).toString();
        EmplacementLibre = PanierJeu2;
    }else if(EmplacementLibre == PanierJeu2){
        PrixPosition2 = valeur2.innerHTML;
        EmplacementLibre.textContent = "-" + Nom2.innerHTML + "  [" + PrixPosition2 + " $]";
        Retirer2.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur2.innerHTML)).toString();
        EmplacementLibre = PanierJeu3;
    }else if(EmplacementLibre == PanierJeu3){
        PrixPosition3 = valeur2.innerHTML;
        EmplacementLibre.textContent = "-" + Nom2.innerHTML + "  [" + PrixPosition3 + " $]"; 
        Retirer3.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur2.innerHTML)).toString();
        EmplacementLibre = PanierJeu4;
    }else if(EmplacementLibre == PanierJeu4){
        PrixPosition4 = valeur2.innerHTML;
        EmplacementLibre.textContent = "-" + Nom2.innerHTML + "  [" + PrixPosition4 + " $]"; 
        Retirer4.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur2.innerHTML)).toString();
        EmplacementLibre = PanierJeu5;
    }else if(EmplacementLibre == PanierJeu5){
        PrixPosition5 = valeur2.innerHTML;
        EmplacementLibre.textContent = "-" + Nom2.innerHTML + "  [" + PrixPosition5 + " $]"; 
        Retirer5.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur2.innerHTML)).toString();
        EmplacementLibre = 0;
    }else if(EmplacementLibre == 0){
        alert("Votre panier est plein")
    }
}

function AjouterJeu3(){
    if(EmplacementLibre == PanierJeu1){
        PrixPosition1 = valeur3.innerHTML;
        EmplacementLibre.textContent = "-" + Nom3.innerHTML + "  [" + PrixPosition1 + " $]"; 
        Retirer1.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur3.innerHTML)).toString();
        EmplacementLibre = PanierJeu2;
    }else if(EmplacementLibre == PanierJeu2){
        PrixPosition2 = valeur3.innerHTML;
        EmplacementLibre.textContent = "-" +  Nom3.innerHTML + "  [" + PrixPosition2 + " $]"; 
        Retirer2.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur3.innerHTML)).toString();
        EmplacementLibre = PanierJeu3;
    }else if(EmplacementLibre == PanierJeu3){
        PrixPosition3 = valeur3.innerHTML;
        EmplacementLibre.textContent = "-" + Nom3.innerHTML + "  [" + PrixPosition3 + " $]"; 
        Retirer3.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur3.innerHTML)).toString();
        EmplacementLibre = PanierJeu4;
    }else if(EmplacementLibre == PanierJeu4){
        PrixPosition4 = valeur3.innerHTML;
        EmplacementLibre.textContent = "-" + Nom3.innerHTML + "  [" + PrixPosition4 + " $]"; 
        Retirer4.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur3.innerHTML)).toString();
        EmplacementLibre = PanierJeu5;
    }else if(EmplacementLibre == PanierJeu5){
        PrixPosition5 = valeur3.innerHTML;
        EmplacementLibre.textContent = "-" + Nom3.innerHTML + "  [" + PrixPosition5 + " $]"; 
        Retirer5.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur3.innerHTML)).toString();
        EmplacementLibre = 0;
    }else if(EmplacementLibre == 0){
        alert("Votre panier est plein")
    }
}

function AjouterJeu4(){
    if(EmplacementLibre == PanierJeu1){
        PrixPosition1 = valeur4.innerHTML;
        EmplacementLibre.textContent = "-" + Nom4.innerHTML + "  [" + PrixPosition1 + " $]"; 
        Retirer1.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur4.innerHTML)).toString();
        EmplacementLibre = PanierJeu2;
    }else if(EmplacementLibre == PanierJeu2){
        PrixPosition2 = valeur4.innerHTML;
        EmplacementLibre.textContent = "-" + Nom4.innerHTML + "  [" + PrixPosition2 + " $]"; 
        Retirer2.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur4.innerHTML)).toString();
        EmplacementLibre = PanierJeu3;
    }else if(EmplacementLibre == PanierJeu3){
        PrixPosition3 = valeur4.innerHTML;
        EmplacementLibre.textContent = "-" + Nom4.innerHTML + "  [" + PrixPosition3 + " $]"; 
        Retirer3.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur4.innerHTML)).toString();
        EmplacementLibre = PanierJeu4;
    }else if(EmplacementLibre == PanierJeu4){
        PrixPosition4 = valeur4.innerHTML;
        EmplacementLibre.textContent = "-" + Nom4.innerHTML + "  [" + PrixPosition4 + " $]"; 
        Retirer4.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur4.innerHTML)).toString();
        EmplacementLibre = PanierJeu5;
    }else if(EmplacementLibre == PanierJeu5){
        PrixPosition5 = valeur4.innerHTML;
        EmplacementLibre.textContent = "-" + Nom4.innerHTML + "  [" + PrixPosition5 + " $]";
        Retirer5.style.visibility = "visible";
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) + parseInt(valeur4.innerHTML)).toString();
        EmplacementLibre = 0;
    }else if(EmplacementLibre == 0){
        alert("Votre panier est plein")
    }
}




//Appels des fonctions //
document.getElementById("Bouton_Acheter_1").onclick = AjouterJeu1;
document.getElementById("Bouton_Acheter_2").onclick = AjouterJeu2;
document.getElementById("Bouton_Acheter_3").onclick = AjouterJeu3;
document.getElementById("Bouton_Acheter_4").onclick = AjouterJeu4;
