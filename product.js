const detailsDiv = document.getElementById("detailsDiv")
const starsDiv = document.getElementById("stars")

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function getItemDetails() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const json = await response.json()
    const product = new ItemShop(json.id, json.title, json.price, json.description, 
        json.category, json.image, json.rating.rate, json.rating.count)

    detailsDiv.innerHTML = product.htmlDetail()

    for(let i = 0; i < json.rating.rate.length; i++) {
        starsDiv.innerHTML += `<img src="https://www.citypng.com/public/uploads/small/11659043933b3xr97hpbsw3djb73n6no5lrqoql8kb2zs0axu1q3k9j1zu2fcj2qlvyrlstylmi0ti4x8op5qlml1gaj3luj2qt1qravtvgqalj.png" alt="">`
    }
}

getItemDetails();