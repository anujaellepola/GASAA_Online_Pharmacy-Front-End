document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchBox = document.getElementById("search-box");
    const itemContainer = document.getElementById("item-container");
    const items = document.querySelectorAll(".box");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const searchTerm = searchBox.value.toLowerCase();

        items.forEach(function (item) {
            const itemName = item.querySelector("h3").innerText.toLowerCase();

            if (itemName.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});



