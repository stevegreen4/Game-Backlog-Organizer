// Create a search bar that pulls games from RAWG API 
// Allow users to add games to backlog list 
// have checkbox for completed. Move completed game to section below showcasing all completed games. 
// Create a random button to randomly pick a game in their list. 

const API_KEY = 'YOUR_API_KEY_HERE';

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
        const listRow = document.createElement('tr');
        listRow.className = 'result-item';

        // picture collumn
        const picCollumn = document.createElement('td');
        picCollumn.className = 'picture-collumn';
        let picture = document.createElement('img');
        picture.src = game.background_image;
        picCollumn.appendChild(picture);

        // title collumn
        const titleCollumn = document.createElement('td');
        titleCollumn.className = 'title-collumn';
        titleCollumn.textContent = game.name;

        //append collumns to table
        listRow.appendChild(picCollumn);
        listRow.appendChild(titleCollumn);
        resultsContainer.appendChild(listRow);
    });
}

