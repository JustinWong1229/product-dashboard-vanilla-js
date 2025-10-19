function fetchProductsThen(){
    return fetch('https://www.course-api.com/javascript-store-products')
    .then((res)=>res.json())
    .then((data)=>{data.forEach(p =>{
        console.log(p.fields.name);
    });
return data;
})
.catch((err)=>{console.error("fetch failed", err);

})
}
function getImageUrl (fields) {
    const img = fields.image[0];
    return img.thumbnails.small.url || img.url || '';
}
async function fetchProductsAsync() {
    try{
        const res= await fetch('https://www.course-api.com/javascript-store-products')
        const data= await res.json()
        displayProducts(data)
        return data
    }catch (err){
        handleError(err)
        return null
    }
}


function displayProducts(products) {
    const container = document.querySelector('#product-container');
    const statusEl = document.querySelector('#status') 
    container.innerHTML= "";
    products.slice(0,5).forEach((p)=>{const{name, price}=p.fields; 
const imageUrl = getImageUrl(p.fields);
const card = document.createElement("div")
card.className = "product-card";
card.innerHTML=`
<img class="product-image" src="${imageUrl}" alt="${name}">
<div class="product-name">${name}</div>
<div class="product-price">$${(price/100).toFixed(2)}</div>
`;
container.appendChild(card);
});
statusEl.textContent = "Here is five our our wonderful products!"
}

function handleError(err) {
    console.error('Error:', err);
}

fetchProductsThen();
fetchProductsAsync();