fetch("https://fakestoreapi.com/products").then((response) => {
  return response.json();
})
.then((data)=>{
    let data1="";
    data.map((value)=>{
        data1+=`
        <div class="item">
              <img src="${value.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">${value.price}</div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row">Rating: ${value.rating.rate} STAR</div>
              </div>
              <button id="addBtn">Add to Cart</button>
            </div>
        `
    })
    document.getElementById("item").innerHTML = data1;
})

