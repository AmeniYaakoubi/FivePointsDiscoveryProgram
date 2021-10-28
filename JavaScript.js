var nombre = Math.floor(Math.random() * 100);
var i = 1;
do{
    var essai= prompt("Essayez de trouver le nombre aléatoire!");
    essai = parseInt(essai);
    if( essai==nombre){
          alert(
            "Félicitations! Vous avez trouvez le nombre aléatoire en " + i + " coups"
        );
    }
    else if( essai < nombre){
        alert(
            "Réessayez! Le nombre que vous cherchez est plus grand!"
            )
        i++;
    }
    else  if(essai > nombre){
        alert(
            "Réessayez! Le nombre que vous cherchez est plus petit!"
            )
        i++;
    }


}while (essai!==nombre);


