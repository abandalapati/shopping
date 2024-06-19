document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        if (cartItems) {
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach(item => {
                const div = document.createElement('div');
                div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                cartItems.appendChild(div);
                total += item.price;
            });
            cartTotal.textContent = total.toFixed(2);
        }
    }

    function addToCart(id, name, price) {
        cart.push({ id, name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} has been added to your cart.`);
        renderCart();
    }

    function checkout() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
