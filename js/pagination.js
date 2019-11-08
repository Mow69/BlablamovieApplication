
//////// PAGE
try {
    /**
     *
     * @param pageNum
     */
    function showPage(pageNum) {

        document.addEventListener("click", () => {
            let pageList = document.getElementsByClassName(`page`);
            for (let page of pageList) {
                page.style.display = 'none'
            }

            let pageToDisplay = document.getElementById(`page-${pageNum}`);
            let home = document.getElementById(`home`);
            pageToDisplay.style.display = "flex";
            home.style.display = "none";
        });
    }
} catch (e) {
    throw (e)
}


/////////// PAGINATION
// let str = "";
// try {
//     for (let i=0; i<=50; i++) {
//     str = str + 1;
//     }
// } catch (e) {
//     throw (e)
// }

