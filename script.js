document.getElementById('submit').addEventListener('click', addBook);

function addBook(e) {
    e.preventDefault();

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simulate a small delay
    setTimeout(() => {
        // Create a new row
        const row = document.createElement('tr');

        // Add cells to the row
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="btn btn-danger btn-sm delete">Clear</button></td>
        `;

        // Add the row to the table
        document.getElementById('book-list').appendChild(row);

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }, 100); // 100ms delay to simulate asynchronous operation
}

// Event delegation to handle delete buttons
document.getElementById('book-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});
