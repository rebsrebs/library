

// VARIABLES

//The array where book objects are stored
let myLibrary = [];

//Book card divs are placed inside this container
const cardcontainer = document.querySelector('#cardcontainer');

//Button that launches a form to fill in details for new book
const newbookbutton = document.querySelector('#newbookbutton');

//Button that submits user input details about a book to add
const newbooksubmit = document.querySelector('#newbooksubmit');


//CONSTRUCTORS

//constructor of prototype for books
function bookPrototype(title,author,pageCount,readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
}

// FUNCTIONS

// Function to add book object to myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Function to display one element
function displayElement(ID){
    document.getElementById(ID).style.display ='block';
}

// Function to hide element one element
function hideElement(ID){
    document.getElementById(ID).style.display ='none';
}

// Function to create a book card with details from book object
// and put the card in the card container.
// https://www.w3schools.com/jsref/met_node_appendchild.asp
const newBookCard = function(book){
    const bookCard = document.createElement("div");
    bookCard.classList.add( "bookCard" );
    bookCard.textContent=
    `Title: "${book.title}"\r\n
    Author: ${book.author}\r\n
    Pages: ${book.pageCount}\r\n 
    Status: ${book.readStatus}   
    `;
    // const textnode = document.createTextNode("Water");
    // console.log(textnode);
    // bookCard.appendChild(textnode);
    document.getElementById("cardcontainer").appendChild(bookCard);
    }
    

function saveNewBook(){
    var newBook= Object.create(bookPrototype.prototype);
        newBook.title = document.getElementById('title').value;
        newBook.author = document.getElementById('author').value;
        newBook.pageCount = document.getElementById('pageCount').value;
    setReadStatus(); 
        newBook.readStatus = readStatus;
    myLibrary.push(newBook);
    console.log(newBook);
    console.log([myLibrary]);
    newBookCard(newBook);
    console.log(readStatus.value);
    document.getElementById("newBookForm").reset();
    hideElement("newBookFormContainer");
}

//This does not work
// function to set a book's read value based on checkbox input
const setReadStatus = function(){
    if (readValue.checked){
        readStatus='read';
    }else{
        readStatus='unread';
    }
}

// EVENT LISTENERS

//New Book button is pushed
newbookbutton.addEventListener('click',function(){
    displayElement("newBookFormContainer");
    });
    
//Submit button on New Book form is pushed   
newbooksubmit.addEventListener('click',function(){
    saveNewBook();
    });







// BLAH EXPERIMENTS NOTES

//show all books
//for each book in array
//display card with book information

// good to have 
// function createElementWithClass(type, className) {
//     const element = document.createElement(type);
//     element.className = className
//     return element;
//   }


// var bookCardCode =
// '<p>'