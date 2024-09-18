const products = [
    { id: 1, name: '4K Ultra HD TV', price: 599.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Smart LED TV', price: 499.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Soundbar', price: 199.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/150' },
];

const productList = document.getElementById('productList');

function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} has been added to your cart.`);
}

displayProducts();
