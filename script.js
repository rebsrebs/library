

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

let bookCounter = 0;

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
    //identifier is unique ID that doesn't change even if place in array changes
    this.ID = identifier;
    //indexNO is the same as the object's index number in the array
    this.indexNo = indexNo;
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


// newCards fucntion - when you add a new book to the library
//it removes all book cards and recreates them for every book
//in the myLibrary array.

const newCards = function(array){

    //just making sure this is running since I call it 
    //from inside the saveNewBook function
    console.log('newCards function is running')
    //clear existing cards
    removeAllChildNodes(cardcontainer);

    //loop through array
   for (let i = 0; i < array.length; i++) {
       console.log(array[i].author);
       
    //for every object in array, assign array index number
    //to object's indexNo property
    array[i].indexNo = i;

    //create bookCard div with class and ID
    const bookCard = document.createElement("div");
        bookCard.classList.add( "bookCard");
        bookCard.classList.add( `bookCard_${i}`);

        //fill bookCard with these properties of the book object
        bookCard.textContent=
            `Title: ${array[i].title}\r\n
            Author: ${array[i].author}\r\n
            Pages: ${array[i].pageCount}\r\n 
            Status: ${array[i].readStatus}\r\n 
            
        `;

        //put this book card iside the card container div
        document.getElementById("cardcontainer").appendChild(bookCard);

//create read status toggle
    // const readToggle = document.createElement('input');
    // readToggle.setAttribute('type', 'checkbox');

    // const readToggleLabel = document.createElement('label');
    // readToggleLabel.classList.add('switch');

    // const spanToggle = document.createElement('span');
    // spanToggle.classList.add('slider');
    // spanToggle.classList.add('round');
   

        //create remover button for each book card and add text and classes
    const removerButton = document.createElement('button');
        removerButton.type='button';
        removerButton.textContent = 'Remove';
        removerButton.classList.add('removerbutton');
        removerButton.classList.add('button');

        // put remover button on this book card
        bookCard.appendChild(removerButton); 

        //when remover button is clicked
        removerButton.addEventListener('click',function(){

            //remove book card by ID
            // console.log(`bookCard_${i}`)
            // document.getElementById(`bookCard_${i}`).remove();

            // remove book card with "this" instead
            bookCard.remove();

                //see that book object exists
                console.log(myLibrary[i]);

            //remove book object from myLibrary array by index number
            myLibrary.splice(i, 1);

                //see that book object has been removed from array
                console.log(myLibrary[i]);
            });

    };}
    

function saveNewBook(){
    bookCounter = bookCounter+1;
    var newBook= Object.create(bookPrototype.prototype);
        newBook.title = document.getElementById('title').value;
        newBook.author = document.getElementById('author').value;
        newBook.pageCount = document.getElementById('pageCount').value;
        newBook.identifier = `ML_${bookCounter}`;
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



//removed from card display
// ID:${array[i].identifier}  \r\n 
//             Index:  ${array[i].indexNo}\r\n 