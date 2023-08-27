"use scrict";

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

let cardId = Number(window.location.search.replace("?", ""))
let card = product.find(item => item.id === cardId)

let newCard = document.querySelector(".card-section");
newCard.innerHTML = `
<li class="card">
<div class="card-img">
    <a href="cart.html"><img src="${item.imgUrl}" alt="${item.id}"></a>
</div>
<div class="card-about">
    <h2 class="card-name">${item.title}</h2>
    <p class="card-price">${item.price}</p>
</div>
<button class="add-cart">Add to Cart</button>
</li>`;