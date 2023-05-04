function deleteProduct(event) {
    const card = event.target.parentElement;
    card.remove();
  }
   

function changeFavorite(event){
    const bookmarkIcon = event.target;
    if (bookmarkIcon.src === "https://cdn-icons-png.flaticon.com/512/346/346472.png"){
      bookmarkIcon.src = "https://cdn-icons-png.flaticon.com/512/929/929491.png"
    } else {
      bookmarkIcon.src = "https://cdn-icons-png.flaticon.com/512/346/346472.png"
    }
  }
  

const productElements = document.querySelectorAll('.product');
const carritoProducts = document.querySelector('.carritoProducts');
const totalPriceP = document.getElementById("totalPrice")

let cartTotalPrice = 0;

function buyItem(event){
    const iconsDiv = event.target.parentElement;
    const productDiv = iconsDiv.parentElement

    const productName = productDiv.querySelector('.productName').textContent;
    const productPrice = Number(productDiv.querySelector('.productPrice').textContent.replace(/\D/g, ''));

    const carritoItemDiv = document.createElement('div');
    carritoProducts.appendChild(carritoItemDiv)

    const carritoName = document.createElement('p');
    carritoName.textContent = `${productName}`;
    carritoItemDiv.appendChild(carritoName);

    const carritoPrice = document.createElement('p');
    carritoPrice.textContent = `$${productPrice}`;
    carritoPrice.classList.add("text-bold");
    carritoItemDiv.appendChild(carritoPrice);

    cartTotalPrice += productPrice;
    totalPriceP.textContent = `$${cartTotalPrice}`;
}
