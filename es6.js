class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  // Add Book to List Prototype
  addBookToList(book) {
    const list = document.getElementById('book-list');

    // Create tr element
    const row = document.createElement('tr');

    // Append HTML to tr Element
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
  }

  // Show Alert Prototypes
  showAlert(message, className) {
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
    setTimeout(function () {
      document.querySelector('.alert').remove()
    }, 3000);
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }
}


// Event Listeneners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get Form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI()

  // Validate
  if (title === '' || author === '' || isbn === '') {
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
});


// Event Listenener for Delete
document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI()

  // Delete Book
  ui.deleteBook(e.target)

  // Show Message
  ui.showAlert('Book Removed', 'success')

  e.preventDefault()
})