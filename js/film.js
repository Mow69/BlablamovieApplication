function listFilm() {
    callApi('GET', 'http://localhost:8000/movies', function (response) {
        let data = JSON.parse(response);

        for(let i = 0; i < data['Search'].length; i++) {

            movieConstruct(data['Search'][i]);

        }
    });

}

function movieConstruct(item) {
    let movieArea = document.getElementById('movies-area');
    let movieItem = document.createElement("div");
    movieItem.classList.add('movie_item');
    movieArea.appendChild(movieItem);

    let poster = new Image();
    poster.src = item['Poster'];
    poster.classList.add('poster');
    movieItem.appendChild(poster);

    // let newContent = document.createTextNode(item['Title']);
    let movieTitle = document.createElement('p');
    movieTitle.innerHTML = item['Title'];
    movieItem.appendChild(movieTitle);

    let movieDate = document.createElement('p');
    movieDate.innerHTML = item['Year'];
    movieItem.appendChild(movieDate);

    // TODO : préciser le lien pour les titres des films
    let movieInfos = document.createElement('a');
    movieInfos.setAttribute('href', '');
    movieInfos.classList.add('btn');
    movieItem.appendChild(movieInfos);

}

