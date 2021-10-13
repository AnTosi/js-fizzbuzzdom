/* metto le variabili 
*/

/* seleziono l'ul e gli assegno una var */
let cont = document.getElementById("list");


/* creo loop i da 1 a 100, poi per i multipli faccio dopo */

for (let i = 1; i <=100; i++) {
    console.log(i);
    cont.innerHTML += `<li> ${i} </li>`;
}

