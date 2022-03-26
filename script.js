// LIBRARY MODULE
const libraryModule = (() => {

    let myLibrary = [];

    // Method to add book object to myLibrary array
    // const addBookToLibrary = function(book){
    //     myLibrary.push(book);
    // }

    return {
        myLibrary,
        // addBookToLibrary,
    }  

})();
// END LIBRARY MODULE


// CLASS
class Book {
    // constructor of prototype for books
    constructor (title,author,pageCount,readStatus){
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.readStatus = readStatus;
    }
        // This is an instance method, right?
        setIndexNo(indexNo) {
            this.indexNo = indexNo;
        }

        // This is an instance method, right?
        setIdentifier(identifier) {
            this.identifier = identifier;
        }

        setReadStatus(readStatus) {
            this.readStatus = readStatus;
        }   
}
// END BOOK CLASS






let bookCounter = 0;

//Book card divs are placed inside this container
const cardcontainer = document.querySelector('#cardcontainer');

//Button that launches a form to fill in details for new book
const newbookbutton = document.querySelector('#newbookbutton');

//Button that submits user input details about a book to add
const newbooksubmit = document.querySelector('#newbooksubmit');







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


// newCards fucntion - when you add a new book to the library
//it removes all book cards and recreates them for every book
//in the myLibrary array.

const newCards = function(array){

    console.log('newCards function is running')
    //clear existing cards
    removeAllChildNodes(cardcontainer);

    //loop through array
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].author);
        array[i].setIndexNo(i);

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
        }else if (array[i].readStatus === 'unread'){
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
        console.log(libraryModule.myLibrary[i]);
        //remove book object from myLibrary array by index number
        libraryModule.myLibrary.splice(i, 1);
        //see that book object has been removed from array
        console.log(libraryModule.myLibrary[i]);
    });

};}

    

function saveNewBook(){
    bookCounter = bookCounter+1;
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pageCount = document.getElementById('pageCount').value;

    let readStatus = '';

    if (readValue.checked){
        readStatus='read';
    }else{
        readStatus='unread';
    }

    const book = new Book(title, author, pageCount);
    book.setReadStatus(readStatus);
    book.setIdentifier(`ML_${bookCounter}`);

    libraryModule.myLibrary.push(book);
    console.log(book);
    console.log([libraryModule.myLibrary]); 
    newCards(libraryModule.myLibrary);
    console.log(readStatus.value);
    document.getElementById("newBookForm").reset();
    hideElement("newBookFormContainer");
}



// EVENT LISTENERS

//New Book button is pushed
newbookbutton.addEventListener('click',function(){
    displayElement("newBookFormContainer");
    });

//trying a new way to write it using .bind, not sure what to put as the scope parameter
// newbookbutton.addEventListener('click', displayElement.bind(null, 'newBookFormContainer'));
 
//Submit button on New Book form is pushed   
newbooksubmit.addEventListener('click',function(){
    saveNewBook();
    });