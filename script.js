const products = [
    { id: '001', name: 'Product 1', price: 10.00 },
    { id: '002', name: 'Product 2', price: 15.00 },
    { id: '003', name: 'Product 3', price: 20.00 },

];

const cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

document.getElementById('barcode-input').addEventListener('change', function () {
    const barcodeValue = this.value;
    addToCart(barcodeValue);
    this.value = '';
});

function simulateBarcodeScan(barcodeValue) {
    const barcodeInput = document.getElementById('barcode-input');
    barcodeInput.value = barcodeValue;
    barcodeInput.dispatchEvent(new Event('change'));
}

const productList = document.getElementById('product-list');
products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
    productList.appendChild(li);
});
