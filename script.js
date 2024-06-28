// Create a search bar that pulls games from RAWG API 
// Allow users to add games to backlog list 
// have checkbox for completed. Move completed game to section below showcasing all completed games. 
// Create a random button to randomly pick a game in their list. 

const API_KEY = YOUR_API_KEY_HERE;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-bar')
    .addEventListener('input', function() {
        let input = String(this.value);
        if(input.length > 2) {
            fetch('https://api.rawg.io/api/games?key=' + API_KEY + `&search=${input}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                displaySearchResults(data.results);
            })
        }
    })
});

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-list');
    resultsContainer.innerHTML = '';

    results.forEach(game => {
        const listItem = document.createElement('li');
        listItem.className = 'result-item';
        listItem.textContent = game.name;
        resultsContainer.appendChild(listItem);
    });
}

