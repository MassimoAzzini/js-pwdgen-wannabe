// ## Ragionamento ##
// 1. Salvare 3 variabili nome, cognome e colore preferito chiesti all'utente
// 2. Salvare una variabile con l'anno attuale 2023
// 3. Prendere le ultime 2 cifre dell'anno
// 4. Comporre il messaggio di output
// 5. Stampare il messaggio di output


//1.
const name = prompt('Inserire il nome');
const lastName = prompt('Inserire il cognome');
const favoriteColor = prompt('Inserire il colore preferito');

//2.3.
const currentYear = '2023';

const lastTwoNumberYear = currentYear.substring(2, 4);

console.log(lastTwoNumberYear);


// 4.5.
const messaggio = `
${name}${lastName}${favoriteColor}${lastTwoNumberYear}
`;

document.getElementById('output').innerHTML = messaggio;
