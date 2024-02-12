function fetchBooks() {
  // Sends a fetch request to the provided URL
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Parses the response as JSON
    .then(json => renderBooks(json)); // Passes the JSON object to renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Assuming 'name' is the correct property; adjust if necessary
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
