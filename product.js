const detailsDiv = document.getElementById("detailsDiv")

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function getItemDetails() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const json = await response.json()
    const product = new ItemShop(json.id, json.title, json.price, json.description, 
        json.category, json.image)

    detailsDiv.innerHTML = product.htmlDetail()
}

getItemDetails();