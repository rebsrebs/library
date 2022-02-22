

// Variables
let myLibrary = [];

const cardcontainer = document.querySelector('#cardcontainer');
const newbookbutton = document.querySelector('#newbookbutton');
const newbooksubmit = document.querySelector('#newbooksubmit');





//constructor
function bookPrototype(title,author,pageCount,readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
}

// Function to add new book to library 
function addBookToLibrary(book) {
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

// //Function to send new book to card container
// // https://www.w3schools.com/jsref/met_node_appendchild.asp
const newBookCard = function(){
    const bookCard = document.createElement("div");
    bookCard.classList.add( "bookCard" );
    const textnode = document.createTextNode("Water");
    console.log(textnode);
    bookCard.appendChild(textnode);
    document.getElementById("cardcontainer").appendChild(bookCard);
    }
    

//Function to save a new book using input from form and push to myLibrary array
function saveNewBook(){
    var newBook= Object.create(bookPrototype.prototype);
        newBook.title = document.getElementById('title').value;
        newBook.author = document.getElementById('author').value;
        newBook.pageCount = document.getElementById('pageCount').value;
        newBook.readStatus = document.querySelector('input[name="readStatus"]:checked');
    myLibrary.push(newBook);
    console.log(newBook);
    console.log([myLibrary]);
//   newBook.newBookCard();
    document.getElementById("newBookForm").reset();
    hideElement("newBookFormContainer");
}


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

// good to have 
// function createElementWithClass(type, className) {
//     const element = document.createElement(type);
//     element.className = className
//     return element;
//   }