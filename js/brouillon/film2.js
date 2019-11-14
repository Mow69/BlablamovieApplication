// function listFilm(page) {
//     document.getElementById('movies-area').innerHTML = '<img src="https://loading.io/spinners/reload/lg.ajax-syncing-loading-icon.gif" width="50"/>';
//     document.querySelector('.pagination').innerHTML = "";
//     callApi('GET', `http://localhost:8000/movies/${page || 1}`, function (response) {
//         let data = JSON.parse(response);
//         //console.log(data['Search']);
//
//         document.getElementById('movies-area').innerHTML = "";
//
//         /*for(let i = 0; i < data['Search'].length; i++) {
//
//             movieConstruct(data['Search'][i]);
//
//         }*/
//         data['Search'].forEach((movie, index)=>{
//             //console.log(movie, index);
//             movieConstruct(movie);
//         });
//
//
// ///////////////////////////https://openclassrooms.com/forum/sujet/creer-un-systeme-de-pagination-simple
// // if ($page != 1){
// //     $pageprece = ($_GET['id']-1);
// //
// //     if ($pageprece >= 1){
// //         echo'<a style="text-decoration:none;" href="?id=' .$pageprece. '">-' .$pageprece. '</a>';
// //     } else {}
// //
// //     $pagesuiv = ($_GET['id']+1);
// //     if ($pagesuiv <= 1){
// //         echo'<a style="text-decoration:none;" href="?id=' .$pageprece. '">-' .$pageprece. '</a>';
// //     } else {}
// // }
//
// /////////////////https://stackoverflow.com/questions/56530917/pagination-with-js
//
//         // let skip = null;
//         // if(pageCount > 10){
//         //     skip = <li><span>...</span></li>
//         // }
//         // for(let i = 1; i <= pageCount; i++) {
//         //
//         //     if((i < page + 3 && i > page - 3)){
//         //         result.push(
//         //         <li key={i}>some link</li>
//         //     );
//         //         continue;
//         //     } else if(skip){
//         //         result.push(skip);
//         //         skip = null;
//         //     }
//         // }
//
//
//
//
//
//
//
//         ///////////////////// TODO: faire la paginataion : corriger le pb de chargement des pages de films dans l'API, et ajouter dans le Front la pagination avec les pages suivantes et précédentes.
//
// // for pages of page () {
// //     if()
// // }
//
// ///////////////////////////////////
//         const nbPages = Math.ceil(parseInt(data['totalResults']) / data['elementsPerPage']);
//         const currentPage = page || 1;
//         let nbDotsMin = 3;
//         let pageDots = [];
//         if(currentPage > 1){
//             pageDots.push('prev');
//         }
//         if(currentPage < nbDotsMin){
//             for(let i = 1; i <= nbDotsMin; i++){
//                 pageDots.push(i);
//             }
//             pageDots.push(null);
//             pageDots.push(nbPages);
//         } else if(currentPage > nbPages - nbDotsMin + 1) {
//             pageDots.push(1);
//             pageDots.push(null);
//             for(let i = nbPages - nbDotsMin + 1; i <= nbPages; i++){
//                 pageDots.push(i);
//             }
//         } else {
//             pageDots.push(1);
//
//             if(currentPage !== nbDotsMin){
//                 pageDots.push(null);
//             }
//             for(let i = currentPage - Math.floor(nbDotsMin/2); i <= currentPage + Math.floor(nbDotsMin/2); i++){
//                 pageDots.push(i);
//             }
//             if(currentPage !== nbPages - nbDotsMin + 1){
//                 pageDots.push(null);
//             }
//             pageDots.push(nbPages);
//         }
//         if(currentPage < nbPages){
//             pageDots.push('next');
//         }
//         /*for(let i = 1; i <= pages; i++) {
//             paginationConstruct(page || 1, i);
//         }*/
//         pageDots.forEach((item, index)=>{
//             paginationConstruct(currentPage, item);
//         });
//
//     });
//
// }
//
// function paginationConstruct (current, i) {
//     let paginationArea = document.querySelector('.pagination');
//     if(i){
//
//         let li = document.createElement('li');
//         li.classList.add('page-item');
//
//         let a = document.createElement('a');
//         a.classList.add('page-link');
//
//         a.href = "#films";
//         if(i==='prev'){
//             a.innerHTML = '&lt;';
//             a.addEventListener('click', (e) => {
//                 listFilm(current-1);
//             });
//         } else if(i==='next'){
//             a.innerHTML = '&gt;';
//             a.addEventListener('click', (e) => {
//                 listFilm(current+1);
//             });
//         } else {
//             a.innerHTML = i;
//             if (current === i) {
//                 a.classList.add('active');
//             } else {
//                 a.addEventListener('click', (e) => {
//                     listFilm(i);
//                 });
//             }
//         }
//
//         li.appendChild(a);
//
//         paginationArea.appendChild(li);
//     } else {
//         let span = document.createElement('span');
//         span.innerHTML = "&nbsp;...&nbsp;";
//         paginationArea.appendChild(span);
//     }
// }
//
// function movieConstruct(item) {
//     let movieArea = document.getElementById('movies-area');
//     let movieItem = document.createElement("div");
//
//     movieItem.classList.add('movie_item');
//
//         ////// VIEW
//         let mView = document.createElement("div");
//         mView.classList.add('m_view');
//
//         let poster = new Image();
//         poster.src = item['Poster'];
//         poster.classList.add('poster');
//         mView.appendChild(poster);
//
//         let movieDate = document.createElement('p');
//         movieDate.innerHTML = item['Year'];
//         movieDate.classList.add('movie_year');
//         mView.appendChild(movieDate);
//
//         let mOrder = document.createElement("div");
//         mOrder.classList.add('m_order');
//         mView.appendChild(mOrder);
//
//     movieItem.appendChild(mView);
//
//         /////// INFO
//         let mInfo = document.createElement("div");
//         mInfo.classList.add('m_info');
//
//         let mVotes = document.createElement("div");
//         mVotes.classList.add('m_votes');
//         mInfo.appendChild(mVotes);
//
//         // let newContent = document.createTextNode(item['Title']);
//         let movieTitle = document.createElement('p');
//         movieTitle.innerHTML = item['Title'];
//         movieTitle.classList.add('movie_title');
//         mInfo.appendChild(movieTitle);
//
//     movieItem.appendChild(mInfo);
//
//
//     movieArea.appendChild(movieItem);
//
//
//
//
//
//     // TODO : préciser le lien pour les titres des films
//     // let movieInfos = document.createElement('a');
//     // movieInfos.setAttribute('href', '');
//     // movieInfos.classList.add('btn');
//     // movieItem.appendChild(movieInfos);
//
// }
//
