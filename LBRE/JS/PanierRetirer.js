// Ce fichier permet de programmer le retrait des articles du panier //

// Chacune de ces fonctions correspond au bouton retirer de l'un des 5 emplacements du panier //
// Elles permettent de retirer les jeux du panier et leur coût tout en repositionnant les autres jeux pour ne pas laisser d'espaces //
function RetirerJeu1(){
    if(PanierJeu5.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition1)).toString();
        PanierJeu1.innerHTML = PanierJeu2.innerHTML;
        PrixPosition1 = PrixPosition2;
        PanierJeu2.innerHTML = PanierJeu3.innerHTML;
        PrixPosition2 = PrixPosition3;
        PanierJeu3.innerHTML = PanierJeu4.innerHTML;
        PrixPosition3 = PrixPosition4;
        PanierJeu4.innerHTML = PanierJeu5.innerHTML;
        PrixPosition4 = PrixPosition5;
        PanierJeu5.innerHTML = "-";
        Retirer5.style.visibility = "hidden";
        EmplacementLibre = PanierJeu5;
    }else if(PanierJeu4.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition1)).toString();
        PanierJeu1.innerHTML = PanierJeu2.innerHTML;
        PrixPosition1 = PrixPosition2;
        PanierJeu2.innerHTML = PanierJeu3.innerHTML;
        PrixPosition2 = PrixPosition3;
        PanierJeu3.innerHTML = PanierJeu4.innerHTML;
        PrixPosition3 = PrixPosition4;
        PanierJeu4.innerHTML = "-";
        Retirer4.style.visibility = "hidden";
        EmplacementLibre = PanierJeu4;
    }else if(PanierJeu3.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition1)).toString();
        PanierJeu1.innerHTML = PanierJeu2.innerHTML;
        PrixPosition1 = PrixPosition2;
        PanierJeu2.innerHTML = PanierJeu3.innerHTML;
        PrixPosition2 = PrixPosition3;
        PanierJeu3.innerHTML = "-";
        Retirer3.style.visibility = "hidden";
        EmplacementLibre = PanierJeu3;
    }else if(PanierJeu2.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition1)).toString();
        PanierJeu1.innerHTML = PanierJeu2.innerHTML;
        PrixPosition1 = PrixPosition2;
        PanierJeu2.innerHTML = "-";
        Retirer2.style.visibility = "hidden";
        EmplacementLibre = PanierJeu2;
    }else if(PanierJeu1.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition1)).toString();
        PanierJeu1.innerHTML = "-";
        this.style.visibility = "hidden";
        EmplacementLibre = PanierJeu1;
    }
}

function RetirerJeu2(){
    if(PanierJeu5.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition2)).toString();
        PanierJeu2.innerHTML = PanierJeu3.innerHTML;
        PrixPosition2 = PrixPosition3;
        PanierJeu3.innerHTML = PanierJeu4.innerHTML;
        PrixPosition3 = PrixPosition4;
        PanierJeu4.innerHTML = PanierJeu5.innerHTML;
        PrixPosition4 = PrixPosition5;
        PanierJeu5.innerHTML = "-";
        Retirer5.style.visibility = "hidden";
        EmplacementLibre = PanierJeu5;
    }else if(PanierJeu4.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition2)).toString();
        PanierJeu2.innerHTML = PanierJeu3.innerHTML;
        PrixPosition2 = PrixPosition3;
        PanierJeu3.innerHTML = PanierJeu4.innerHTML;
        PrixPosition3 = PrixPosition4;
        PanierJeu4.innerHTML = "-";
        Retirer4.style.visibility = "hidden";
        EmplacementLibre = PanierJeu4;
    }else if(PanierJeu3.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition2)).toString();
        PanierJeu2.innerHTML = PanierJeu3.innerHTML;
        PrixPosition2 = PrixPosition3;
        PanierJeu3.innerHTML = "-";
        Retirer3.style.visibility = "hidden";
        EmplacementLibre = PanierJeu3;
    }else if(PanierJeu2.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition2)).toString();
        PanierJeu2.innerHTML = "-";
        this.style.visibility = "hidden";
        EmplacementLibre = PanierJeu2;
    }
}

function RetirerJeu3(){
    if(PanierJeu5.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition3)).toString();
        PanierJeu3.innerHTML = PanierJeu4.innerHTML;
        PrixPosition3 = PrixPosition4;
        PanierJeu4.innerHTML = PanierJeu5.innerHTML;
        PrixPosition4 = PrixPosition5;
        PanierJeu5.innerHTML = "-";
        Retirer5.style.visibility = "hidden";
        EmplacementLibre = PanierJeu5;
    }else if(PanierJeu4.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition3)).toString();
        PanierJeu3.innerHTML = PanierJeu4.innerHTML;
        PrixPosition3 = PrixPosition4;
        PanierJeu4.innerHTML = "-";
        Retirer4.style.visibility = "hidden";
        EmplacementLibre = PanierJeu4;
    }else if(PanierJeu3.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition3)).toString();
        PanierJeu3.innerHTML = "-";
        this.style.visibility = "hidden";
        EmplacementLibre = PanierJeu3;
    }
}

function RetirerJeu4(){
    if(PanierJeu5.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition4)).toString();
        PanierJeu4.innerHTML = PanierJeu5.innerHTML;
        PrixPosition4 = PrixPosition5;
        PanierJeu5.innerHTML = "-";
        Retirer5.style.visibility = "hidden";
        EmplacementLibre = PanierJeu5;
    }else if(PanierJeu4.innerHTML != "-"){
        valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition4)).toString();
        PanierJeu4.innerHTML = "-";
        this.style.visibility = "hidden";
        EmplacementLibre = PanierJeu4;
    }
}

function RetirerJeu5(){
    valeurtotale.innerHTML = (parseInt(valeurtotale.innerHTML) - parseInt(PrixPosition5)).toString();
    this.style.visibility = "hidden";
    PanierJeu5.innerHTML = "-";
    EmplacementLibre = PanierJeu5;
}

// On vide le panier lorsque l'on appuie sur "Acheter les articles" //
function Achat(){
    PanierJeu1.innerHTML = "-";
    PanierJeu2.innerHTML = "-";
    PanierJeu3.innerHTML = "-";
    PanierJeu4.innerHTML = "-";
    PanierJeu5.innerHTML = "-";
    Retirer1.style.visibility = "hidden";
    Retirer2.style.visibility = "hidden";
    Retirer3.style.visibility = "hidden";
    Retirer4.style.visibility = "hidden";
    Retirer5.style.visibility = "hidden";
    EmplacementLibre = PanierJeu1;
    valeurtotale.innerHTML = "0";
    alert("Merci pour votre achat !");
}



// Appels des fonctions //
document.getElementById("Retirer1").onclick = RetirerJeu1;
document.getElementById("Retirer2").onclick = RetirerJeu2;
document.getElementById("Retirer3").onclick = RetirerJeu3;
document.getElementById("Retirer4").onclick = RetirerJeu4;
document.getElementById("Retirer5").onclick = RetirerJeu5;
document.getElementById("acheterPanier").onclick = Achat;