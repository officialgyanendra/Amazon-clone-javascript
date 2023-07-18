let productHtml = ''
products.forEach((product)=>{
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
        <select data-attr="dropdown" id="input">
            <option value="1" id="1">1</option>
            <option value="2" id="2">2</option>
            <option value="1" id="1">3</option>
            <option value="2" id="2">4</option>
            <option value="1" id="1">5</option>
            <option value="2" id="2">6</option>
            <option value="1" id="1">7</option>
            <option value="2" id="2">8</option>
            <option value="1" id="1">9</option>
            <option value="2" id="2">10</option>
        </select>
    </div>
    <p class="sucessesfully-added js-added-succesfully"><span class="cheqmark">✓</span><span>Add successfully</span></p>
    <button class="add-cart-btn js-add-btn" data-product-name="${product.id}">Add to cart</button>
</div>
    `
})
document.querySelector('.body-wrap').innerHTML = productHtml;

function sucessesfullyAdded(){
}
document.querySelectorAll('.js-add-btn').forEach ((button, index) => {
    button.addEventListener('click', ()=>{ 
        const productId = button.dataset.id;
        let matchingItem;
        cart.forEach((item) => {
            if(productId == item.productId){
                matchingItem = item;
            }
        })
        if(matchingItem) {
            matchingItem.quantity += 1;
        } else {
        cart.push({productId: productId, quantity: 1})
        }
        let cartQuantity = 0;
        cart.forEach( (item) => {
            cartQuantity += item.quantity;
        })
        document.querySelector('.js-cart-count').innerHTML = cartQuantity;
    })
})