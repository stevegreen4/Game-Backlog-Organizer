
// Allow users to add games to backlog list 
// have checkbox for completed. Move completed game to section below showcasing all completed games. 
// Create a random button to randomly pick a game in their list. 

const API_KEY = '';

// Search Bar

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
                // only show 5 results on the page
                let cutResults = data.results.slice(0, 5);
                displaySearchResults(cutResults);
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

        // add button
        const addButton = document.createElement('button');
        addButton.className = 'icon-btn add-btn';

        const addDiv = document.createElement('div');
        addDiv.className = 'add-icon';

        const buttonText = document.createElement('div');
        buttonText.className = 'btn-txt';
        buttonText.textContent = "Add Game";

        addButton.appendChild(addDiv);
        addButton.appendChild(buttonText);
        
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
        listRow.appendChild(addButton);
        listRow.appendChild(picCollumn);
        listRow.appendChild(titleCollumn);
        resultsContainer.appendChild(listRow);
    });
}

