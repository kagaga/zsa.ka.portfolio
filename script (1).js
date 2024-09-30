document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0]; // Extract user data from the response
            const userName = `${user.name.first} ${user.name.last}`; // Create the full name

            // Set the user picture or fallback if it doesn't exist
            const userPicture = user.picture.medium || 'fallback.jpg'; // Ensure 'fallback.jpg' is the correct path

            // Update the HTML elements with user data
            document.getElementById('user-name').textContent = userName;
            document.getElementById('user-picture').src = userPicture; // Set the image source
        })
        .catch(error => {
            console.error('Error fetching random user data:', error);
            // If there's an error, set the image source to the fallback image
            document.getElementById('user-picture').src = 'fallback.jpg'; // Ensure this path is correct
        });
});

