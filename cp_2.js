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
