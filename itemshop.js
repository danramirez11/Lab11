class ItemShop {
    constructor(id, title, price, description, category, image, stars, count){
        this.id = id;
        this.title = title;
        this.price = price,
        this.description = description;
        this.category = category;
        this.image = image;
        this.stars = stars;
        this.count = count;
    }

    html(pos){ return `
        <div class="product">
        <img onclick="deleteProduct(event)" class="trashcan" src="https://freesvg.org/img/trash.png">
            <img class="product-img" src="${this.image}">
            <p class="productName">${this.title}</p>
            <p class="text-bold productPrice">$${this.price}</p>
            <div class="iconsDiv">
            <img onclick="changeFavorite(event)" src="https://cdn-icons-png.flaticon.com/512/346/346472.png">
            <img onclick="buyItem(event)" src="https://cdn-icons-png.flaticon.com/512/107/107831.png">
            </div>
        <div class="buttonDiv">
            <button onclick="selected(${pos})">Comprar</button>
        </div>
    </div>`};

    htmlDetail(){ return `
        <div id="details" class="details">
        <img src="${this.image}" alt="">
        <div>
            <h3>${this.title}</h3>
            <p class="text-blue">${this.stars} stars (${this.count})</p>
            <h2>$${this.price}</h2>
            <p>${this.description}</p>
            <h5 class="cMen">${this.category}</h5>
            <button class="buy">Comprar ahora</button>
            <button class="car">Agregar al carrito</button>
        </div>
    </div>`
    };

}
