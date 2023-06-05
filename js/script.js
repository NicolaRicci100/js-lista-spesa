console.log('JS OK');

//* creo la lista della spesa
const items = ['Pane', 'Birra', 'Lievito', 'Guaciale', 'Uova'];
console.log (items);  // mostro in console

//* creo una variabile per l'id della lista
const list = document.getElementById('list');

let note = ''; // variabile vuota utile alla restituzione in pagina

//* creo un ciclo for per vedere ogni elemento della lista
for (let i = 0; i < items.length; i++){
    // mostro in console
    console.log(items[i]);
    // mostro in pagina
    note += `<li>${items[i]}</li>`;
    list.innerHTML = note;
}

