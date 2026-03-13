// This script handles proxy URL submissions and displays results.

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const proxyUrl = formData.get('proxyUrl');

    // Perform the fetch request to the proxy URL
    fetch(proxyUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching the proxy URL:', error);
        });
}

// Function to display results on the page
function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = JSON.stringify(data, null, 2); // Display JSON data prettified
}

// Event listener for form submission
document.getElementById('proxyForm').addEventListener('submit', handleSubmit);
