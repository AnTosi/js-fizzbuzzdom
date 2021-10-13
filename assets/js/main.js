/* metto le variabili 
*/

/* seleziono l'ul e gli assegno una var */
let cont = document.getElementById("list");
let divPad = document.querySelector("li > div")
const zero = 0;
/* creo loop i da 1 a 100, poi per i multipli faccio dopo */

for (let i = 1; i <=100; i++) {
    console.log(i);
    
    if (i % 15 == 0) {
        cont.innerHTML += `<li><div class="fizzbuzz"> fizzbuzz </div></li>`;

    }

    else if (i % 3 == zero)  {
        cont.innerHTML += `<li><div class="fizz"> fizz </div></li>`;   
    }

    else if (i % 5 == 0) {
        cont.innerHTML += `<li><div class="buzz"> buzz </div></li>`;
    }

    

    else {
        cont.innerHTML += `<li><div> ${i} </div></li>`;
    }

    // if (z = i % 5) 
}

/* metto condizioni per multipli 3 e 5 */
// cont.innerHTML += `<li><div>${i}</div></li>`;


