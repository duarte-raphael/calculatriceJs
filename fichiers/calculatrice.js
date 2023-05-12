//fonction qui recupere l'operation et renvoie le resultat
function calculer() 
{ 
    let operation = document.getElementById("ecran").value 
    let calculer = eval(operation) 
    document.getElementById("ecran").value = calculer
} 

//fonction qui affiche le chiffre ou le ou signe opératoire
function afficher(val) 
{ 
    document.getElementById("ecran").value+=val 
}

function supprimer() 
{ 
    document.getElementById("ecran").value = document.getElementById("ecran").value.slice(0,-1)
}


//fonction qui efface l'écran 
function effacer() 
{ 
    document.getElementById("ecran").value = "" 
} 