function listFilm(page) {
    callApi('GET', `http://localhost:8000/movies/${page || 0}`, function (response) {
        let data = JSON.parse(response);

        document.getElementById('movies-area').innerHTML = ""

        for(let i = 0; i < data['Search'].length; i++) {

            movieConstruct(data['Search'][i]);

        }

///////////////////////////https://openclassrooms.com/forum/sujet/creer-un-systeme-de-pagination-simple
// if ($page != 1){
//     $pageprece = ($_GET['id']-1);
//
//     if ($pageprece >= 1){
//         echo'<a style="text-decoration:none;" href="?id=' .$pageprece. '">-' .$pageprece. '</a>';
//     } else {}
//
//     $pagesuiv = ($_GET['id']+1);
//     if ($pagesuiv <= 1){
//         echo'<a style="text-decoration:none;" href="?id=' .$pageprece. '">-' .$pageprece. '</a>';
//     } else {}
// }

/////////////////https://stackoverflow.com/questions/56530917/pagination-with-js

        // let skip = null;
        // if(pageCount > 10){
        //     skip = <li><span>...</span></li>
        // }
        // for(let i = 1; i <= pageCount; i++) {
        //
        //     if((i < page + 3 && i > page - 3)){
        //         result.push(
        //         <li key={i}>some link</li>
        //     );
        //         continue;
        //     } else if(skip){
        //         result.push(skip);
        //         skip = null;
        //     }
        // }







        ///////////////////// TODO: faire la paginataion : corriger le pb de chargement des pages de films dans l'API, et ajouter dans le Front la pagination avec les pages suivantes et précédentes.

// for pages of page () {
//     if()
// }

///////////////////////////////////
        const pages = Math.ceil(data['totalResults'] / 10)
        for(let i = 0; i < pages; i++) {

            paginationConstruct(page, i)
        }
    });

}

function paginationConstruct (current, i) {
    let paginationArea = document.querySelector('.pagination')

    let li = document.createElement('li')
    li.classList.add('page-item')

    let a = document.createElement('a')
    a.classList.add('page-link')

    a.href = `#${i}`
    a.innerHTML = i

    if (current === i) {
        a.classList.add('active')
    } else {
        a.addEventListener('click', (e) => {
            listFilm(i)
        })
    }


    li.appendChild(a)

    paginationArea.appendChild(li)
}

function movieConstruct(item) {
    let movieArea = document.getElementById('movies-area');
    let movieItem = document.createElement("div");

    movieItem.classList.add('movie_item');
    movieArea.appendChild(movieItem);

    ////// VIEW

    let mView = document.createElement("div");
    mView.classList.add('m_view');
    movieItem.appendChild(mView);

    let poster = new Image();
    poster.src = item['Poster'];
    poster.classList.add('poster');
    mView.appendChild(poster);

    let movieDate = document.createElement('p');
    movieDate.innerHTML = item['Year'];
    movieDate.classList.add('movie_year');
    mView.appendChild(movieDate);

    let mOrder = document.createElement("div");
    mOrder.classList.add('m_order');
    mView.appendChild(mOrder);

    /////// INFO
    let mInfo = document.createElement("div");
    mInfo.classList.add('m_info');
    movieItem.appendChild(mInfo);

    let mVotes = document.createElement("div");
    mVotes.classList.add('m_votes');
    mInfo.appendChild(mVotes);

    // let newContent = document.createTextNode(item['Title']);
    let movieTitle = document.createElement('p');
    movieTitle.innerHTML = item['Title'];
    movieTitle.classList.add('movie_title');
    mInfo.appendChild(movieTitle);





    // TODO : préciser le lien pour les titres des films
    // let movieInfos = document.createElement('a');
    // movieInfos.setAttribute('href', '');
    // movieInfos.classList.add('btn');
    // movieItem.appendChild(movieInfos);

}

