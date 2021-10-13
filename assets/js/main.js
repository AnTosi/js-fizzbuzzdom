/* metto le variabili 
*/

/* seleziono l'ul e gli assegno una var */
let cont = document.getElementById("list");
let divPad = document.querySelector("li > div")


/* creo loop i da 1 a 100, poi per i multipli faccio dopo */

for (let i = 1; i <=100; i++) {
    console.log(i);
    cont.innerHTML += `<li><div>${i}</div></li>`;
}

