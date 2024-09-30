
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            console.log('Random User Data:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
