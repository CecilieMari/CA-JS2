import { createBook } from "./createbook.js";

export function createBooks(books) {

    const container = document.querySelector("#book-container");

    books.forEach(function (book){
        //console.log(book);

        const bookHtml = createBook(book);
        console.log(bookHtml);
        container.append(bookHtml)

       /* const { title, author, description } = book;

        container.innerHTML += `<div class="book">
                                 <h3>${title}</h3>
                                 <p>Author: ${author}</p>
                                 <p>${description}</p>
                                </div> 
                                  
        `;*/
    });
    console.log(books);
}



