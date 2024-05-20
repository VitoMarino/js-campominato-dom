let divContainer = document.querySelector('div.container'); 
let button = document.querySelector('button');
let section = document.querySelector('section');

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