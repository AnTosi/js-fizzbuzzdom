/* metto le variabili 
*/

/* seleziono l'ul e gli assegno una var */
let cont = document.getElementById("list");

/* creo loop di base i da 1 a 100, poi per i multipli faccio dopo
    (cronologicamente è stato così, anche se non sembra)
*/


// il console.log mi serve solo per vedere se funziona il loop
for (let i = 1; i <=100; i++) {
    console.log(i);
    
    // questo è divisibile per 3 E per 5, messo prima per escluderlo dal calcolo degli altri. Il div dentro al list item serve per avere il padding, che serve per avere lo spazio omogeneo tra i background dei li. senza necessità di padding avrei dato le classi direttamente al li
    if (i % 3 == 0 && i % 5 ==0) {
        cont.innerHTML += `<li><div class="fizzbuzz"> fizzbuzz </div></li>`;
    }

    // questo è divisibile per 3, cronologicamente il primo if che ho fatto, ho usato modulus che restituisce il resto, lo avevamo già visto per vedere se un numero fosse pari o dispari. Rispetto alla casella base sostituisce il numero con "fizz" e il div senza classe a uno con una classe, che poi gli andrà a cambiare il colore di background nel css.
    // probabilmente avrei anche potuto sostituire il numero con fizz e aver aggiunto una classe al div pre esistente (come visto nell'esercizio di ieri), ma sostituire tutto il div mi sembrava più semplice
    
    else if (i % 3 == 0)  {
        cont.innerHTML += `<li><div class="fizz"> fizz </div></li>`;   
    }

    // divisibile per 5, stesso discorso di sopra

    else if (i % 5 == 0) {
        cont.innerHTML += `<li><div class="buzz"> buzz </div></li>`;
    }

    
    // qua c'è il loop di base, messo per ultimo altrimenti duplicava le caselle perché le condizioni nei casi sopra venivano soddisfatte due volte
    else {
        cont.innerHTML += `<li><div> ${i} </div></li>`;
    }

}

/* metto condizioni per multipli 3 e 5, le ho dovute mettere sopra nel loop e sopra al numero base altrimenti (giustamente) duplicava la casella. Per divisibile per 3 e 5 avevo inizialmente usato 15 (che matematicamente è la stessa cosa, essendo due numeri primi il loro minimo comune multiplo è il loro prodotto), ho poi messo 3 and 5 perché più da programmatore */ 


