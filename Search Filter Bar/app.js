function search() {
    let searchBox = document.getElementById('search-item').value.toUpperCase();
    let fruitList = document.querySelectorAll('.fruit');
    let fruitName;

    for (let i = 0; i < fruitList.length; i++) {
        fruitName = fruitList[i].querySelector('.f-details h2').innerText.toUpperCase();

        if (fruitName.indexOf(searchBox) > -1) {
            fruitList[i].style.display = "";
        } else {
            fruitList[i].style.display = "none";
        }
    }
}
