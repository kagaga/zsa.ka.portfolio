document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userName = `${user.name.first} ${user.name.last}`;
            const userPicture = user.picture.medium || 'default-image.jpg'; // Replace with your fallback image path

            document.getElementById('user-name').textContent = userName;
            document.getElementById('user-picture').src = userPicture;
        })
        .catch(error => {
            console.error('Error fetching random user data:', error);
            // Optionally set a default image if there's an error fetching user data
            document.getElementById('user-picture').src = 'default-image.jpg'; // Replace with your fallback image path
        });
});
