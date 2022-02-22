

// Variables
let myLibrary = [];

const cardcontainer = document.querySelector('#cardcontainer');
const newbookbutton = document.querySelector('#newbookbutton');
const newbooksubmit = document.querySelector('#newbooksubmit');

//constructor
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.card = function() {
        let div = document.createElement('div');
        document.cardcontainer.appendChild('div');
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
    let newBook = {};
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pageCount = document.getElementById('pageCount').value;
    newBook.readStatus = document.querySelector('input[name="readStatus"]:checked');
    myLibrary.push(newBook);
    console.log({newBook});
    console.log([myLibrary]);
    document.getElementById("newBookForm").reset();
    hideElement("newBookForm");
}

//New Book button is pushed
newbookbutton.addEventListener('click',function(){
    displayElement("newBookFormContainer");
    });
    
//Submit button on New Book form is pushed   
newbooksubmit.addEventListener('click',saveNewBook);





//show all books
//for each book in array
//display card with book information

