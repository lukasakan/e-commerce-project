const hiddenfn = () => {
  const hidden = document.getElementById('hidden');
  const closeBtn = document.getElementById('close-btn');
  const productImage = document.getElementById('main-image');
  const productImageHidden = document.getElementById('main-image-hidden');
  const thumbnail1Hidden = document.getElementById('thumbnail1-hidden');
  const thumbnail2Hidden = document.getElementById('thumbnail2-hidden');
  const thumbnail3Hidden = document.getElementById('thumbnail3-hidden');
  const thumbnail4Hidden = document.getElementById('thumbnail4-hidden');
  const btnPreviousHidden = document.getElementById('btn-previous-hidden');
  const btnNextHidden = document.getElementById('btn-next-hidden');

  const listimg = ['assets/image-product-1.jpg', 'assets/image-product-2.jpg', 'assets/image-product-3.jpg', 'assets/image-product-4.jpg'];
  let currentIndex = 0;
  thumbnail1Hidden.addEventListener('click', () => {
    productImageHidden.src = 'assets/image-product-1.jpg';
  });
  thumbnail2Hidden.addEventListener('click', () => {
    productImageHidden.src = 'assets/image-product-2.jpg';
  });
  thumbnail3Hidden.addEventListener('click', () => {
    productImageHidden.src = 'assets/image-product-3.jpg';
  });
  thumbnail4Hidden.addEventListener('click', () => {
    productImageHidden.src = 'assets/image-product-4.jpg';
  });
  btnPreviousHidden.addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) currentIndex = listimg.length - 1;
    productImageHidden.src = listimg[currentIndex];

  });
  btnNextHidden.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex >= listimg.length) currentIndex = 0;
    productImageHidden.src = listimg[currentIndex];
  });



  let isHidden = false;
  const render = () => {
    hidden.style.display = isHidden && window.innerWidth >= 1080 ? 'flex' : 'none';
  };
  const togle = () => {
    isHidden = !isHidden;
    render();
   };
    closeBtn.addEventListener('click', togle);
    productImage.addEventListener('click', togle);
}
document.addEventListener('DOMContentLoaded', hiddenfn);

const thumbnailfn = () => {
  const productImage = document.getElementById('main-image-content');
  const thumbnail1 = document.getElementById('thumbnail1');
  const thumbnail2 = document.getElementById('thumbnail2');
  const thumbnail3 = document.getElementById('thumbnail3');
  const thumbnail4 = document.getElementById('thumbnail4');
  const btnPrevious = document.getElementById('btn-previous');
  const btnNext = document.getElementById('btn-next');
  const listimg = ['assets/image-product-1.jpg', 'assets/image-product-2.jpg', 'assets/image-product-3.jpg', 'assets/image-product-4.jpg'];
  let currentIndex = 0;
  thumbnail1.addEventListener('click', () => {
     productImage.src= 'assets/image-product-1.jpg';
  });
  thumbnail2.addEventListener('click', () => {
    productImage.src = 'assets/image-product-2.jpg';
  });
  thumbnail3.addEventListener('click', () => {
    productImage.src = 'assets/image-product-3.jpg';
  });
  thumbnail4.addEventListener('click', () => {
    productImage.src = 'assets/image-product-4.jpg';
  });

  btnPrevious.addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) currentIndex = listimg.length - 1;
    productImage.src = listimg[currentIndex];

  });
  btnNext.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex >= listimg.length) currentIndex = 0;
    productImage.src = listimg[currentIndex];
  });
}
document.addEventListener('DOMContentLoaded', thumbnailfn);

const cartfn = () => {
    const cartdropdown = document.getElementById('cart-dropdown');
    const cart = document.getElementById('cart');
    const cartContent = document.getElementById('cart-content');
    const emptyCartContainer = document.getElementById('empty');
    const buttonATC = document.getElementById('batc');
    const plusButton = document.getElementById('+');
    const minusButton = document.getElementById('-');
    const quantityDisplay = document.getElementById('quantity');
    const cartItemQuantityDisplay = document.getElementById('cart-item-quantity');
    const priceDisplay = document.getElementById('price');
    const badge = document.getElementById('badge');


    let isCartOpen = false;
    let cartItemQuantity = 0;
    let cartItemPrice = 125;
    let quantity = 0;
    
    // quantityDisplay.textContent = cartItemQuantity;
    priceDisplay.textContent = cartItemPrice;
    const renderCart = () => {
        cartdropdown.style.display = isCartOpen ? 'flex' : 'none';
        if (cartItemQuantity > 0) {
            cartContent.style.display = 'flex';
            emptyCartContainer.style.display = 'none';
        }
    };
    const toggleCart = () => {
        isCartOpen = !isCartOpen;
        renderCart();
    };
    minusButton.addEventListener('click', () => {
        if (quantity  > 0) {
            quantity -= 1;
            quantityDisplay.textContent = quantity;
            renderCart();
        }
    });
    plusButton.addEventListener('click', () => {
        quantity += 1;
        quantityDisplay.textContent = quantity;
         console.log('plus clicked, quantity is now:', quantity);
        renderCart();
    });

    buttonATC.addEventListener('click', () => {
        console.log('ATC clicked, quantity:', quantity, 'cartItemQuantity:', cartItemQuantity);
         if (quantity === 0) return;
        cartItemQuantity += quantity;
        badge.textContent = cartItemQuantity;
        quantityDisplay.textContent = quantity;
        cartItemQuantityDisplay.textContent = cartItemQuantity;
        quantity = 0
        cartItemPrice = 125 * cartItemQuantity;
        priceDisplay.textContent = cartItemPrice;
        renderCart();

    });
    cart.addEventListener('click', toggleCart);

}
document.addEventListener('DOMContentLoaded', cartfn);