
export function createBook(book) {
    const { title, author, description } = book;

    const div = document.createElement("div");
    div.classList.add("book");

    const heading = document.createElement("h3");
    heading.textContent = title;

    const authorParagraph = document.createElement("p");
    authorParagraph.textContent = `Author: ${author}`;

    const descriptionParagraph = document.createElement("p")
    descriptionParagraph.textContent = description;

    div.append(heading);
    div.append(authorParagraph);
    div.append(descriptionParagraph);

    return div;
}