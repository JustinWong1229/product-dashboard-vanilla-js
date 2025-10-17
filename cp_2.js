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
