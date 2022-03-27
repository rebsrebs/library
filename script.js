// LIBRARY MODULE
const libraryModule = (() => {

    let myLibrary = [];

    return {
        myLibrary
    }  
})();
// END LIBRARY MODULE


// BOOK CLASS
class Book {

    constructor (title,author,pageCount,readStatus){
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.readStatus = readStatus;
    }

        setIndexNo(indexNo) {
            this.indexNo = indexNo;
        }

        setIdentifier(identifier) {
            this.identifier = identifier;
        }

        setReadStatus(readStatus) {
            this.readStatus = readStatus;
        }   
}
// END BOOK CLASS


// UI MODULE
const uiModule = (() => {

    let bookCounter = 0;

    // DOM ELEMENTS
    // Book card divs are placed inside this container
    const cardcontainer = document.querySelector('#cardcontainer');
    // Button that launches a form to fill in details for new book
    const newbookbutton = document.querySelector('#newbookbutton');
    // Button that submits user input details about a book to add
    const newbooksubmit = document.querySelector('#newbooksubmit');

    // UTILITY FUNCTIONS
    // Function to display one element
    function displayElement(ID){
        document.getElementById(ID).style.display ='block';
    }

    // Function to hide one element
    function hideElement(ID){
        document.getElementById(ID).style.display ='none';
    }

    // EVENT LISTENERS
    // New Book button is pushed
    newbookbutton.addEventListener('click',function(){
        displayElement("newBookFormContainer");
    });

    // Submit button on New Book form is pushed   
    newbooksubmit.addEventListener('click',function(){
        saveNewBook();
    });
   
    // FUNCTION to create a single new card when a book is saved
    const newCard = function(array, indexNo){
        // Create bookCard div with classes
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.classList.add(`bookCard_${indexNo}`);
        // Put this book card iside the card container div
        document.getElementById("cardcontainer").appendChild(bookCard);
        // Experiment to create separate components to fill out book card
        const bcTitle = document.createElement("div");
        bcTitle.classList.add("bcTitle", "bcBold");
        bcTitle.textContent = 'Title:';

        const bcTitleFill = document.createElement("div");
        bcTitleFill.classList.add( "bcTitleFill", "bcFill");
        bcTitleFill.textContent = `${array[indexNo].title}`;

        const bcAuthor = document.createElement("div");
        bcAuthor.classList.add( "bcAuthor", "bcBold");
        bcAuthor.textContent = 'Author:';

        const bcAuthorFill = document.createElement("div");
        bcAuthorFill.classList.add( "bcAuthorFill", "bcFill");
        bcAuthorFill.textContent = `${array[indexNo].author}`;

        const bcPageCount = document.createElement("div");
        bcPageCount.classList.add( "bcPageCount", "bcBold");
        bcPageCount.textContent = 'Pages:';

        const bcPageCountFill = document.createElement("div");
        bcPageCountFill.classList.add( "bcPageCountFill", "bcFill");
        bcPageCountFill.textContent = `${array[indexNo].pageCount}`;

        // Add divs to bookcard
        bookCard.appendChild(bcTitle); 
        bookCard.appendChild(bcTitleFill); 
        bookCard.appendChild(bcAuthor); 
        bookCard.appendChild(bcAuthorFill); 
        bookCard.appendChild(bcPageCount); 
        bookCard.appendChild(bcPageCountFill); 

        // Read status button changes when you click it
        const readStatusButton = document.createElement('button');
        readStatusButton.type='button';
        readStatusButton.classList.add('button','bookcardbutton','readstatusbutton');

        if (array[indexNo].readStatus === 'read') {
            readStatusButton.textContent = 'READ';
            readStatusButton.classList.add('read');
        } else if (array[indexNo].readStatus === 'unread') {
            readStatusButton.textContent = 'UNREAD';
            readStatusButton.classList.add('unread');
        };

        // Put read status button on this book card
        bookCard.appendChild(readStatusButton);

        // When you click read Status button, change status
        readStatusButton.addEventListener('click',function() {

            if (array[indexNo].readStatus === 'read'){
                array[indexNo].readStatus = 'unread';
                console.log(array[indexNo].readStatus);
                readStatusButton.textContent = 'UNREAD';
                readStatusButton.classList.remove('read');
                readStatusButton.classList.add('unread');
            } else {
                array[indexNo].readStatus = 'read';
                readStatusButton.textContent = 'READ';
                console.log(array[indexNo].readStatus);
                readStatusButton.classList.remove('unread');
                readStatusButton.classList.add('read');
            };
        });

        // Create switch icon
        const switchIcon = document.createElement("img");
        switchIcon.classList.add("switchicon");
        switchIcon.src = "images/switch-horizontal.svg";

        // Add switch icon to book card
        bookCard.appendChild(switchIcon);

        // Create remover button for each book card and add text and classes
        const removerButton = document.createElement('button');
        removerButton.type='button';
        removerButton.textContent = 'Delete';
        removerButton.classList.add('removerbutton','button','bookcardbutton');

        // Put remover button on this book card
        bookCard.appendChild(removerButton); 

        // When remover button is clicked
        removerButton.addEventListener('click',function(){
            // Remove book card with "this" instead
            bookCard.remove();
            // See that book object exists
            console.log(libraryModule.myLibrary[indexNo]);
            // Remove book object from myLibrary array by index number
            libraryModule.myLibrary.splice(indexNo, 1);
            // See that book object has been removed from array
            console.log(libraryModule.myLibrary[indexNo]);
        });
    }       
    // END create new card function

    // FUNCTION to save new book
    function saveNewBook() {
        bookCounter = bookCounter+1;
        title = document.getElementById('title').value;
        author = document.getElementById('author').value;
        pageCount = document.getElementById('pageCount').value;

        let readStatus = '';

        if (readValue.checked) {
            readStatus='read';
        }else{
            readStatus='unread';
        }

        const book = new Book(title, author, pageCount);
        book.setReadStatus(readStatus);
        book.setIdentifier(`ML_${bookCounter}`);
        book.setIndexNo(libraryModule.myLibrary.length);
        libraryModule.myLibrary.push(book);
    
        console.log(book);
        console.log([libraryModule.myLibrary]); 
        newCard(libraryModule.myLibrary,book.indexNo);
        console.log(readStatus.value);
        document.getElementById("newBookForm").reset();
        hideElement("newBookFormContainer");
    }
})();
// END UI MODULE