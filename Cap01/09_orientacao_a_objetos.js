//vamos iniciar como podemos criar um objeto em Javascript
var obj = new Object(); //criamos obj
//outra maneira é
var obj2 = {}; // também é um objeto válido

// objecto completo
objCompleto = {
    name: {
        first: 'John',
        last: 'Wick'
    },
    address: 'New York'
};

//declara uma classe Book (construtor)
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

// para instanciar a classe Book
var book = new Book('Dama de Vermelho', 120, 'ABC123456');
//podemos acessar as suas propriedades e atualizá-las:
console.log(`Título: ${book.title}`);
console.log(`Páginas: ${book.pages}`);
console.log(`ISBN: ${book.isbn}`);

Book.prototype.printTitle = function(){
    console.log(this.title);
}

book.printTitle();

function Book2(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        this.isbn;
    };
}

console.log(Book2.printIsbn());