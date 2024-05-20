// Variabili globali
let divContainer = document.querySelector('div.container'); 
let button = document.querySelector('button');
let section = document.querySelector('section');
let select = document.querySelector('#select-difficult');
let article = document.querySelector('article')

let arrayBombe = [];

// FUNZIONI

// Funzione randomica generale
function numberRandomInt(min, max) {
    return Math.floor(Math.random () * ((max + 1) - min)) + min;
}

for (let i = 1; i <= 16; i++) {
    arrayBombe.push(numberUnicoRandom(arrayBombe, 1, 100));
}

// Funzione che ci permette di controllare SE un numero randomico, è stato già generato, e quindi deve essere "sostituito" da un altro randomico.
function numberUnicoRandom(arrayBombe, min, max) {

    let randomNumber;
    let question = false;

    while (!question) {
        randomNumber= numberRandomInt(min, max);

        // se il numero random generato NON è presente nella blacklist...
        if (arrayBombe.includes(randomNumber) === false) {
            // ... ho trovato il numero giusto. Esco dal ciclo.
            question = true;
        }
    return randomNumber;
}}

if (arrayBombe === article) {
    article.classList.add('red');
}

console.log(arrayBombe)

// Bottone play
button.addEventListener('click', function() {
    section.classList.add('active');
    divContainer.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        let article = document.createElement('article'); 
        divContainer.appendChild(article);
        article.append(i);
        article.addEventListener('click', function() {
            article.classList.add('active');
            console.log(i);
        })
        button.addEventListener('click', function() {
            section.classList.add('active');
        })
    }
})

