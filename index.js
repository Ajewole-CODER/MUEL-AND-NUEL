 // Handle "Apply Today!" button click
 document.getElementById('applyBtn').addEventListener('click', function() {
    alert('Redirecting to the application page...');
});

// Handle search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert('Please enter a search term.');
    }
});
