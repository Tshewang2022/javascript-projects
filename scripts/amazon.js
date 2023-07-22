
//this method is calle the generating the hmtl
let productHMTL = '';

products.forEach((product)=> {
    productHMTL +=  `       
<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.counts}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCent / 100).toFixed(2 )}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-card" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`;
})

document.querySelector('.js-products-grid').innerHTML = productHMTL;


document.querySelectorAll('.js-add-to-card').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    //we will store the matching item data in it
    let matchingItem;

    // we will loop through each item to find the matching item
    card.forEach((item) => {
      if(productId===item.productId){
        matchingItem = item;
      }
    });
    if(matchingItem){
      matchingItem.quantity +=1;
    }else{
      card.push ({
        productId: productId,
        quantity: 1,
      });
    }
    //variables to store the card quantity
    let cardQuantity = 0;
    card.forEach((item)=>{
      cardQuantity += item.quantity;
    });

    // we will use the DOM to make the card button interactive
    document.querySelector('.js-cart-quantity').innerHTML = cardQuantity;
  });
});
