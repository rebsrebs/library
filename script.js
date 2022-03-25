

// VARIABLES

//The array where book objects are stored - empty version

// LIBRARY MODULE
const libraryModule = (() => {

    let myLibrary = [];

    // Method to add book object to myLibrary array
    const addBookToLibrary = function(book){
        myLibrary.push(book);
    }

    return {
        myLibrary,
        addBookToLibrary,
    }  

})();
// END LIBRARY MODULE

class Book {

    //constructor of prototype for books
    constructor (title,author,pageCount,readStatus){
        this.setTitle(title);
        this.setAuthor(author);
        this.setPageCount(pageCount);
        this.setReadStatus(readStatus);
        this.setID(ID);
        this.setIndexNo(indexNo); }
}

function savingNewBook(){

    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pageCount = document.getElementById('pageCount').value;
    identifier = `ML_${bookCounter}`;
    // I don't know
    const book = new Book(title,author,pageCount,readStatus);
}

function saveNewBook(){
    bookCounter = bookCounter+1;
    var newBook= new BookPrototype(bookPrototype.prototype);
        newBook.title = document.getElementById('title').value;
        newBook.author = document.getElementById('author').value;
        newBook.pageCount = document.getElementById('pageCount').value;
        newBook.identifier = `ML_${bookCounter}`;
    setReadStatus(); 
    newBook.readStatus = readStatus;
    library.myLibrary.push(newBook);
    console.log(newBook);
    console.log([library.myLibrary]);
    newCards(myLibrary);
    console.log(readStatus.value);
    document.getElementById("newBookForm").reset();
    hideElement("newBookFormContainer");
}


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



// FUNCTIONS



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





// UI MODULE
const uiModule = (() => {

    let bookCounter = 0;

    const getBookInfo = function(){
        title = document.getElementById('title').value;
        author = document.getElementById('author').value;
        pageCount = document.getElementById('pageCount').value;
        identifier = `ML_${bookCounter}`;
    }

    return {
        getBookInfo,
        title,
        author,
        pageCount,
        identifier
    }

})();
// END UI MODULE



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
        //put this book card iside the card container div
        document.getElementById("cardcontainer").appendChild(bookCard);
        //experiment to create separate components to fill out book card
        const bcTitle = document.createElement("div");
        bcTitle.classList.add( "bcTitle", "bcBold");
        bcTitle.textContent = 'Title:';

        const bcTitleFill = document.createElement("div");
        bcTitleFill.classList.add( "bcTitleFill", "bcFill");
        bcTitleFill.textContent = `${array[i].title}`;

        const bcAuthor = document.createElement("div");
        bcAuthor.classList.add( "bcAuthor", "bcBold");
        bcAuthor.textContent = 'Author:';

        const bcAuthorFill = document.createElement("div");
        bcAuthorFill.classList.add( "bcAuthorFill", "bcFill");
        bcAuthorFill.textContent = `${array[i].author}`;

        const bcPageCount = document.createElement("div");
        bcPageCount.classList.add( "bcPageCount", "bcBold");
        bcPageCount.textContent = 'Pages:';

        const bcPageCountFill = document.createElement("div");
        bcPageCountFill.classList.add( "bcPageCountFill", "bcFill");
        bcPageCountFill.textContent = `${array[i].pageCount}`;

        //add divs to bookcard
        bookCard.appendChild(bcTitle); 
        bookCard.appendChild(bcTitleFill); 
        bookCard.appendChild(bcAuthor); 
        bookCard.appendChild(bcAuthorFill); 
        bookCard.appendChild(bcPageCount); 
        bookCard.appendChild(bcPageCountFill); 

        //READ STATUS BUTTON CHANGES WHEN YOU CLICK IT
        const readStatusButton = document.createElement('button');
        readStatusButton.type='button';
        readStatusButton.classList.add('button','bookcardbutton','readstatusbutton');

        if (array[i].readStatus === 'read'){
            readStatusButton.textContent = 'READ';
            readStatusButton.classList.add('read');
        } else if (array[i].readStatus === 'unread'){
            readStatusButton.textContent = 'UNREAD';
            readStatusButton.classList.add('unread');
        };
        // put read status button on this book card
        bookCard.appendChild(readStatusButton); 
        //when you click read Status button
        readStatusButton.addEventListener('click',function(){

            if (array[i].readStatus === 'read'){
                array[i].readStatus = 'unread';
                console.log(array[i].readStatus);
                readStatusButton.textContent = 'UNREAD';
                readStatusButton.classList.remove('read');
                readStatusButton.classList.add('unread');
            } else {
                array[i].readStatus = 'read';
                readStatusButton.textContent = 'READ';
                console.log(array[i].readStatus);
                readStatusButton.classList.remove('unread');
                readStatusButton.classList.add('read');
            };
        });

    //Create switch icon
    const switchIcon = document.createElement("img");
    switchIcon.classList.add("switchicon");
    switchIcon.src = "images/switch-horizontal.svg";

    //add switch icon to book card
    bookCard.appendChild(switchIcon);

    //create remover button for each book card and add text and classes
    const removerButton = document.createElement('button');
    removerButton.type='button';
    removerButton.textContent = 'Delete';
    removerButton.classList.add('removerbutton','button','bookcardbutton');

    // put remover button on this book card
    bookCard.appendChild(removerButton); 

    //when remover button is clicked
    removerButton.addEventListener('click',function(){

    // remove book card with "this" instead
    bookCard.remove();

    //see that book object exists
    console.log(library.myLibrary[i]);

    //remove book object from myLibrary array by index number
    library.myLibrary.splice(i, 1);

    //see that book object has been removed from array
    console.log(library.myLibrary[i]);
    });
    };}
    // End FUNCTION newCards


// END UI MODULE








// END function saveNewBook

// function to set a book's read value based on checkbox input
const setReadStatus = function(){
    if (readValue.checked){
        readStatus='read';
    }else{
        readStatus='unread';
    }
}

// EVENT LISTENERS

//trying a new way to write it using .bind, not sure what to put as the scope parameter
newbookbutton.addEventListener('click', displayElement.bind(null, 'newBookFormContainer'));

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







  //create read status toggle - this was in inside newCards function

    // const readToggleLabel = document.createElement('label');
    // readToggleLabel.classList.add('switch');
    // readToggleLabel.setAttribute('htmlFor', 'readToggleID');

    // const readToggleInput = document.createElement('input');
    // readToggleInput.setAttribute('type', 'checkbox');
    // readToggleInput.setAttribute('ID', 'readToggleID');

    // const readToggleSpan = document.createElement('span');
    // readToggleSpan.classList.add('slider');
    // readToggleSpan.classList.add('round');

    // bookCard.appendChild(readToggleLabel); 
    // bookCard.appendChild(readToggleInput); 
    // bookCard.appendChild(readToggleSpan); 
 