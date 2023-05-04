objList = []
const container = document.getElementById('products');

async function getItemShop() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    for(let i = 0; i < data.length; i++) {
        const productObj = new ItemShop(data[i].id, data[i].title, data[i].price, data[i].description, 
          data[i].category, data[i].image, data[i].rating.rate, data[i].rating.count)
        objList.push(productObj)
    }

    console.log(objList)

    for(let i = 0; i < objList.length; i++) {
        const product = objList[i];
        container.innerHTML += product.html(i)
    }
  }
  
  getItemShop();

  function selected(pos) {
    const product = objList[pos];
    window.location.href = `./product.html?id=${product.id}`
}