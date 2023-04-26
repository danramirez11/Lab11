class ItemShop {
    constructor(id, title, price, description, category, image){
        this.id = id;
        this.title = title;
        this.price = price,
        this.description = description;
        this.category = category;
        this.image = image;
    }

    html(pos){return `
        <div class="product">
            <img src="${this.image}">
            <p>${this.title}</p>
            <p class="text-bold">$${this.price}</p>
        <div class="buttonDiv">
            <button onclick="selected(${pos})">Comprar</button>
        </div>
    </div>`};

    htmlDetail(){return `
        <div id="details" class="details">
        <img src="${this.image}" alt="">
        <div>
            <h3>${this.title}</h3>
            <p class="text-blue">(120)</p>
            <h2>$${this.price}</h2>
            <p>${this.description}</p>
            <h5 class="cMen">${this.category}</h5>
            <button class="buy">Comprar ahora</button>
            <button class="car">Agregar al carrito</button>
        </div>
    </div>`
    };

}
