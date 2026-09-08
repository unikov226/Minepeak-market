function searchProducts() {
    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        const text = product.innerText.toLowerCase();

        if (!input || text.includes(input)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });

    document
        .getElementById("market")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function sortListings() {

    const grid = document.getElementById("productGrid");

    const products = Array.from(
        grid.querySelectorAll(".product-card")
    );

    const sort = document.getElementById("sortSelect").value;

    if (sort === "low") {

        products.sort(
            (a, b) =>
                Number(a.dataset.price) -
                Number(b.dataset.price)
        );

    } else if (sort === "high") {

        products.sort(
            (a, b) =>
                Number(b.dataset.price) -
                Number(a.dataset.price)
        );
    }

    products.forEach(product => {
        grid.appendChild(product);
    });
}


document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });
