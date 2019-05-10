// Book Constructor - Will Handle creating the actual book object
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// UI Constructor - Will be a set of prototype methods that will add and delete the Book object to the list

function UI() {

}

// Add Book to List Prototype
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

// Show Alert Prototype
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');

  // Add Classes
  div.className = `alert ${className}`;

  // Add Text
  div.appendChild(document.createTextNode(message));

  // Get Parent Element
  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form');

  // Insert Alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function() {
    document.querySelector('.alert').remove()
  }, 3000);

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

    // Validate
    if(title === '' || author === '' || isbn === '') {
      // Error Alert
      ui.showAlert('Please fill in all fields', 'error')
    } else {
    // Add book to list
    ui.addBookToList(book);

    // Show Success
    ui.showAlert('Book Added', 'success')

    // Clear Fields
    ui.clearfields()

    }

  e.preventDefault()
})