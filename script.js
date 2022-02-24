

// VARIABLES

//The array where book objects are stored - empty version
let myLibrary = [];

// The array where books objects are stored - starting with one default book
// let myLibrary = [ bookPrototype = {
//     title = 'The Hobit',
//     author = 'J.R. Tolkien',
//     pageCount = 200,
//     readStatus = 'read',
// }]



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

// Function to remove all children elements
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


//This version works by being called inside saveNewBook 
//but instead I need a way to loop over the myLibrary array and 
//make cards from each item in array rather than the newly created object.
// Function to create a book card with details from book object
// and put the card in the card container.
// https://www.w3schools.com/jsref/met_node_appendchild.asp

// const newBookCard = function(book){
//     const bookCard = document.createElement("div");
//     bookCard.classList.add( "bookCard" );
//     bookCard.textContent=
//     `Title: "${book.title}"\r\n
//     Author: ${book.author}\r\n
//     Pages: ${book.pageCount}\r\n 
//     Status: ${book.readStatus}   
//     `;
//     document.getElementById("cardcontainer").appendChild(bookCard);
//     }

//end old version of newBookCard

//  for each start array.forEach((item) => {
// for version(let i = 0, i = array.length-1, i++)
// new version is now newCards since it adds all of them
const newCards = function(array){
    console.log('newCards function is running')
    console.log([array]);
   
    
    removeAllChildNodes(cardcontainer);

   for (let i = 0; i < array.length; i++) {
       console.log(array[i].author);
    
    const bookCard = document.createElement("div");
        bookCard.classList.add( "bookCard" );
        bookCard.textContent=
        `Title: ${array[i].title}\r\n
        Author: ${array[i].author}\r\n
        Pages: ${array[i].pageCount}\r\n 
        Status: ${array[i].readStatus}   
        `;
        document.getElementById("cardcontainer").appendChild(bookCard);
    };}
    

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
    // newBookCard(newBook);
    newCards(myLibrary);
    console.log(readStatus.value);
    document.getElementById("newBookForm").reset();
    hideElement("newBookFormContainer");
}

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
