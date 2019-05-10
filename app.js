// Book Constructor - Will Handle creating the actual book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// UI Constructor - Will be a set of prototype methods that will add and delete the Book object to the list

function UI() {

}

// Add Book to List Function
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');

  // Append HTML to tr Element
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a herf = "#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}


// Clear Fields Prototype
UI.prototype.clearfields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// Event Listeneners
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get Form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiate Book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI()

    // Add book to list
    ui.addBookToList(book);


    // Clear Fields
    ui.clearfields()

    console.log(book)


  e.preventDefault()
})