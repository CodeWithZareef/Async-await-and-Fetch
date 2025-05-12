
// 1. Fetch API (Modern Browsers)
// The Fetch API is built into modern browsers and provides a clean, promise-based interface.

// Basic GET request
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST request with options
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({key: 'value'}),
})
.then(response => response.json())
.then(data => console.log(data));


// 2. Async/Await with Fetch
// For cleaner syntax, especially with multiple sequential requests:

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();


// 3. Axios (Third-party Library)
// Axios is a popular HTTP client with some advantages over fetch:

// First install axios: npm install axios

import axios from 'axios';

// GET request
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

// POST request
axios.post('https://api.example.com/data', { key: 'value' })
    .then(response => console.log(response.data));


// 4. XMLHttpRequest (Legacy Approach)
// Older approach, mostly replaced by Fetch API:

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = function() {
    if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
    } else {
    console.error('Error:', xhr.statusText);
    }
};
xhr.onerror = function() {
    console.error('Request failed');
};
xhr.send();


// For modern browsers: Use Fetch API with async/await (most projects)

// For complex needs: Use Axios (automatic JSON transformation, request/response interceptors)

// For Node.js: Fetch is now available in recent Node versions, or use Axios
