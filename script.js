

// Variables
let myLibrary = [];

const cardcontainer = document.querySelector('#cardcontainer');
const newbookbutton = document.querySelector('#newbookbutton');
const newbooksubmit = document.querySelector('#newbooksubmit');
// const bookCard = document.createElement("div");




//constructor
function bookPrototype(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.card = function() {
        let bookCard = document.createElement('div');
        const textnode = document.createTextNode(this.title);
        bookCard.appendChild(textnode);
        // document.cardcontainer.appendChild(bookCard);
        document.getElementById("cardcontainer").appendChild(bookCard);
    }}

// Function to add new book to library 
function addBookToLibrary (book) {
    myLibrary.push(book);
}

// Function to display element
function displayElement(ID){
    document.getElementById(ID).style.display ='block';
}

// Function to hide element
function hideElement(ID){
    document.getElementById(ID).style.display ='none';
}

//Function to save a new book using input from form and push to myLibrary array
function saveNewBook(){
    // let newBook = {};
    var newBook= Object.create(bookPrototype.prototype);
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pageCount = document.getElementById('pageCount').value;
    newBook.readStatus = document.querySelector('input[name="readStatus"]:checked');
    myLibrary.push(newBook);
    console.log({newBook});
    console.log([myLibrary]);
    // newBook.card();
    document.getElementById("newBookForm").reset();
    hideElement("newBookFormContainer");
}

// //Function to send new book to card container
// // https://www.w3schools.com/jsref/met_node_appendchild.asp
// function newBookCard(book){
// const textnode = document.createTextNode("Water");
// bookCard.appendChild(textnode);
// document.getElementById("cardcontainer").appendChild(bookCard);
// }

//New Book button is pushed
newbookbutton.addEventListener('click',function(){
    displayElement("newBookFormContainer");
    });
    
//Submit button on New Book form is pushed   
newbooksubmit.addEventListener('click',function(){
    saveNewBook();
    });





//show all books
//for each book in array
//display card with book information

