// Ce fichier javascript permet de programmer les differents évenements de l'inscription //

// Lorsque l'on appuie sur le bouton "s'identifier" , un formulaire apparaît . //
function Identification (){
	php1.style.visibility = "visible";
	php2.style.visibility = "visible";
	php3.style.visibility = "visible";
	php4.style.visibility = "visible";
	identificationEmplacement.style.visibility = "hidden";
	boutonValider.style.visibility = "visible";
}

// Lorsque l'on appuie sur le bouton pour valider le formulaire , il disparait et ajoute notre nom au message de bienvenue et au titre du panier //
function Validation (){
	php1.style.visibility = "hidden";
	php2.style.visibility = "hidden";
	php3.style.visibility = "hidden";
	php4.style.visibility = "hidden";
	this.style.visibility = "hidden";
	bienvenue.style.marginLeft = "20%";
	bienvenue.textContent = "Bienvenue" + " " + php2.value + " " + php4.value + " !";
	TitrePanier.textContent = "Panier de " + php4.value;
	soustitre.style.visibility = "hidden";
}



// Appels des fonctions //
document.getElementById("boutonIdentification").onclick = Identification;
document.getElementById("boutonValider").onclick = Validation;