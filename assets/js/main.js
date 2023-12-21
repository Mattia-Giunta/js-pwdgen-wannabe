// variabili

// inizializzazione variabili
let nomeUtente = prompt('Digita il tuo Nome');
console.log("questo è il nome utente:",nomeUtente);

let cognomeUtente = prompt('Digita il tuo Cognome');
console.log("questo è il cognome utente:",cognomeUtente);

let coloreUtente = prompt('Digita il tuo Colore preferito');
console.log("questo è il colore utente:",coloreUtente);

let numero = Math.floor(Math.random(0)*100);
console.log("questo è il numero generato casuale da 0 a 100:",numero);


console.log("questa è la password generata:",nomeUtente + cognomeUtente + coloreUtente + numero);

document.getElementById('pwd-result').innerHTML='<p> Password:' + " " + nomeUtente + cognomeUtente + coloreUtente + numero + '</p>';

// finito esercizio