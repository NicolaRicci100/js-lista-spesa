console.log('JS OK');

//* creo la lista della spesa
const items = ['Pane', 'Birra', 'Lievito', 'Guaciale', 'Uova'];
console.log (items);  // mostro in console

//* creo una variabile per l'id della lista
const list = document.getElementById('list');

let note = ''; // variabile vuota utile alla restituzione in pagina

// //* creo un ciclo FOR per vedere ogni elemento della lista
// for (let i = 0; i < items.length; i++){
//     // mostro in console
//     console.log(items[i]);
//     note += `<li>${items[i]}</li>`;
//     // mostro in pagina
//     list.innerHTML = note;
// }

//* creo un ciclo WHILE per vedere ogni elemento della lista
let i = 0 // definisco la variabile fuori dal ciclo
while (i < items.length){
    note += `<li>${items[i]}</li>`;
    i++;
    // mostro in pagina
    list.innerHTML = note;
}