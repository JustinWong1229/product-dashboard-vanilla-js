function fetchProductsThen(){
    return fetch('https://www.course-api.com/javascript-store-products')
    .then((res)=>res.json())
    .then((data)=>{data.forEach(product =>{
        console.log(product.name);
    });
return data;
})
.catch((err)=>{console.error("fetch failed", err);

})
}

async function fetchProductsAsync() {
    try{
        const res= await fetch('https://www.course-api.com/javascript-store-products')
        const data= await res.json()
        return data
    }catch (err){
        handleError(err)
        return null
    }
}

function displayProducts(products) {
    container.innerhtml= "";
    product.slice(0,5).forEach((p)=>{const{name, price}=p.field; 
const imageUrl = getImageUrl(p.field);
const card = document.createElement("div")
card.classname = "Product-card";
card.innerHTML=`
<img class="product-image" src="${imageUrl}" alt="${escapeHTML(name)}">
<div class="product-name">${escapeHTML(name)}</div>
<div class="product-price">$${(price/100).toFixed(2)}</div>
`;
container.appendChild(card);
});
statusEl.textContent = "Here are the Products"
}