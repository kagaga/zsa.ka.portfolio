document.addEventListener('DOMContentLoaded', () => {
    // Fetch random user data from the API
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            // Extract user data
            const user = data.results[0];
            const userName = `${user.name.first} ${user.name.last}`;
            const userPicture = user.picture.medium;

            // Update the HTML with the random user info
            document.getElementById('user-name').textContent = userName;
            document.getElementById('user-picture').src = userPicture;
        })
        .catch(error => {
            console.error('Error fetching random user data:', error);
        });
});
