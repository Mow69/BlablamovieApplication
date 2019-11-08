function listFilm() {
    callApi('GET', 'http://localhost:8000/movies', function (response) {
        console.log(response);
        console.log(response['Search']);

        for(let i = 0; i <  response['Search'].length; i++) {
            let movieArea = document.getElementById('movies-area');

            movieConstruct(response['Search'][i]);
        }
    });

}

function movieConstruct(item) {
    let movieItem = document.createElement("div");
    movieItem.classList.add('movie_item');
    movieArea.append(movieItem);

    let poster = new Image();
    poster.src = item['Poster'];
    poster.classList.add('poster');
    movieItem.appendChild(poster);

    // let newContent = document.createTextNode(item['Title']);
    let movieTitle = document.createElement('p');
    movieTitle.innerHTML = item['Title'];
    movieItem.appendChild(movieTitle);

    // TODO : préciser le lien pour les titres des films
    let movieInfos = document.createElement('a');
    movieInfos.setAttribute('href', '');
    movieInfos.classList.add('btn');
    movieItem.appendChild(movieInfos);

}

