
//////// PAGE

/**
 *
 * @param pageNum
 */
function showPage(pageNum) {

    let pageList = document.getElementsByClassName(`page`);
    let pageToDisplay = document.getElementById(`page-${pageNum}`);
    // let home = document.getElementById(`home`);

    for (let page of pageList) {
        page.style.display = 'none'
    }

    if(pageToDisplay)
    {
        pageToDisplay.style.display = "flex";
    }

}


