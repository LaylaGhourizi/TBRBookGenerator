// Define arrays for random book generation
const genres = ['Fantasy', 'Romance', 'Thriller'];
const authors = ['Sarah J Maas', 'Jay Kristoff', 'Fredrick Backman', 'Katerine Center', 'Krista Ritchi', 'Freya North', 'Kristen Ciccarelli', 'Alli Earnest'];

// Function to generate a random book
function generateRandomBook() {
  const randomGenre = genres[Math.floor(Math.random() * genres.length)];
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomTitle = `${randomGenre} Book by ${randomAuthor}`;
  const owned = Math.random() < 0.5; // Randomly assign ownership

  return { title: randomTitle, author: randomAuthor, owned };
}

// Function to generate and display books
function generateAndDisplayBooks() {
  const bookListElement = document.getElementById('bookList');
  bookListElement.innerHTML = ''; // Clear existing content

  // Generate 5 random books
  for (let i = 0; i < 5; i++) {
    const randomBook = generateRandomBook();
    const bookItem = document.createElement('div');
    bookItem.textContent = `${randomBook.title} (${randomBook.author}) - ${randomBook.owned ? 'Owned' : 'Desired'}`;
    bookListElement.appendChild(bookItem);
  }
}

// Call the generateAndDisplayBooks function when the page loads
window.onload = generateAndDisplayBooks;
