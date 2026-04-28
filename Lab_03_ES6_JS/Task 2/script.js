function addToCart(...items) {
    return items;
}

let cart = addToCart(
    "Laptop",
    "Mobile Phone",
    "Headphones",
    "Keyboard",
    "Mouse"
);

let clonedCart = [...cart];

let [firstProduct, ...remainingProducts] = clonedCart;

document.getElementById("cartOutput").innerHTML = `
    <div class="cart-card">
        <p><strong>Total Items:</strong> ${clonedCart.length}</p>
        <p><strong>First Product:</strong> ${firstProduct}</p>
        <p><strong>Remaining Products:</strong> ${remainingProducts.join(", ")}</p>
        <p><strong>Updated Cart:</strong> ${clonedCart.join(", ")}</p>
    </div>
`;