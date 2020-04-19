
var nome_utente = prompt('Inserisci solo il tuo nome.');
console.log(nome_utente);

var cognome_utente = prompt('Inserisci il tuo cognome.');
console.log(cognome_utente);

var colore_preferito = prompt('Inserisci il tuo colore preferito.');
console.log(colore_preferito);

var numero_preferito = prompt('Inserisci il tuo numero preferito.');
console.log(numero_preferito);

document.getElementById('password').innerHTML = nome_utente + cognome_utente + colore_preferito + numero_preferito;
