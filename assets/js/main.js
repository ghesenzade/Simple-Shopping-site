const product = [
    {
        id: 1,
        cardName: 'Nike',
        cardPrice: '55 Azn',
        imgUrl: 'assets/images/1-women-shoes-free-png-image.png'
    },
    {
        id: 2,
        cardName: 'Nike',
        cardPrice: '45 Azn',
        imgUrl: 'assets/images/2-women-Shoes-PNG.png'
    },
    {
        id: 3,
        cardName: 'Nike',
        cardPrice: '30 Azn',
        imgUrl: 'assets/images/3-women-shoes.png'
    },
    {
        id: 4,
        cardName: 'Nike',
        cardPrice: '60 Azn',
        imgUrl: 'assets/images/4-women-shoes.png'
    }
];

const categories = product;

document.querySelector(".cards").innerHTML = categories
    .map(item => {
        let { imgUrl, cardName, cardPrice } = item;
        return (
            `<li class="card">
                <div class="card-img">
                    <img src="${imgUrl}" alt="${cardName}">
                </div>
                <div class="card-about">
                    <h2 class="card-name">${cardName}</h2>
                    <p class="card-price">${cardPrice}</p>
                </div>
                <button class="add-cart" onclick="addToCart(${item.id})">Add to Cart</button>
            </li>`
        );
    })
    .join("");

let cart = [];

function addToCart(itemId) {
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const selectedItem = product.find(item => item.id === itemId);
        cart.push({ ...selectedItem, quantity: 1 });
    }
    displayCart();
}

function displayCart() {
    let total = 0;
    const cartList = document.querySelector(".cart-list");
    if (cart.length === 0) {
        cartList.innerHTML = '<p class="empty">Cart is Empty</p>';
    } else {
        cartList.innerHTML = cart
            .map((item, index) => {
                total += parseFloat(item.cardPrice) * item.quantity;
                return (
                    `<li class="cart-item">
                    <div class="card-img">
                        <img src="${item.imgUrl}" alt="${item.id}">
                    </div>
                    <div class="card-about">
                        <h2 class="card-name">${item.cardName}</h2>
                        <div class="card-pr-qu">
                            <p class="card-price">${item.cardPrice}</p>
                            <p class="card-quantity">${item.quantity}</p>
                        </div>
                    </div>
                    <div class="delete-btn" onclick="delElement(${index})">
                        <span>X</span>
                    </div>
                </li>`
                );
            })
            .join("");
    }
    document.querySelector(".quantity").textContent = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector(".sum").textContent = total;
}
displayCart();

function delElement(itemIndex) {
    cart.splice(itemIndex, 1);
    displayCart();
}

function myFunction(){
    let element= document.querySelector('.clicking-box');
    // let cardBoxActive = document.querySelector('.card-box');
    element.classList.toggle('active');
    // cardBoxActive.classList.add('card-box-active');
    document.querySelector('.clicking-box').innerHTML+=`
    <div class="card-footer">
    <div class="cart-btn" onclick="cartFooter()">
        <a href="#" class="buy">Buy All</a>
    </div>
    <p>Total: <span class="sum">0</span> AZN</p>
</div>
    `
displayCart();
}
function cartFooter() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before buying.");
    } else {
        const totalPrice = cart.reduce((total, item) => total + parseFloat(item.cardPrice), 0);
        alert(`Thank you for your purchase! Total: ${totalPrice} AZN`);
        cart = [];
        displayCart(); 
        myFunction(); 
    }
}






