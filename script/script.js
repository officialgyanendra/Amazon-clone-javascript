let productHtml = ''
products.forEach((product) => {
    productHtml += `

    <div class="card-wrap">
    <div class="product-img"><img src="${product.image}"></div>
    <p class="product-discription">${product.name}</p>
    <div class="rating">
        <span class="rating-stars"><img src="images/ratings/rating-${product.rating.stars * 10}.png"></span>
        <span class="rating-count"> ${product.rating.count} </span>
    </div>
    <div class="amount">
        $${(product.priceCents / 100).toFixed(2)}
    </div>
    <div class="product-count">
        <select data-attr="dropdown" id="input" class="js-quantity-selector-${product.id}">
            <option value="1" id="1">1</option>
            <option value="2" id="2">2</option>
            <option value="3" id="3">3</option>
            <option value="4" id="4">4</option>
            <option value="5" id="5">5</option>
            <option value="6" id="6">6</option>
            <option value="7" id="7">7</option>
            <option value="8" id="8">8</option>
            <option value="9" id="9">9</option>
            <option value="10" id="10">10</option>
        </select>
    </div>
    <div class="sucessesfully-added js-added-succesfully-${product.id}"><div class="align-checkmark"><img src="images/icons/checkmark.png">Added sucessesfully</div></div>
    <button class="add-cart-btn js-add-btn" data-product-name="${product.id}">Add to cart</button>
</div>
    `
})
document.querySelector('.body-wrap').innerHTML = productHtml;

function sucessesfullyAdded() {
}
document.querySelectorAll('.js-add-btn').forEach((button, index) => {
    button.addEventListener('click', (e) => {

        const productId = button.dataset.productName;
        
        // Added sucessefully msg

        const added = document.querySelector(`.js-added-succesfully-${productId}`);
        added.classList.add('active');
        setTimeout(()=>{
            added.classList.remove('active');
        },1000);
        let matchingItem;
        cart.forEach((item) => {
            if (productId == item.productId) {
                matchingItem = item;
            }
        })
        const quantitySelector = document.querySelector(
            `.js-quantity-selector-${productId}`
        );
        // quantitySelector.value
        const quantity = Number(quantitySelector.value);
        if (matchingItem) {
            matchingItem.quantity += quantity;
        } else {
            cart.push({ productId: productId, quantity: quantity })
        }
        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })
        document.querySelector('.js-cart-count').innerHTML = cartQuantity;
    })
})