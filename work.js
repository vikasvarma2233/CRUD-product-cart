let createBtn = document.querySelector("#createbtn");
let   productForm = document.querySelector("#dform");
let productContainer = document.querySelector("#procontainer");
let form = document.querySelector("form");
let   upBtn = document.querySelector("#btn1");



let ProductData = JSON.parse(localStorage.getItem("products"))  || [];

let upData = null;

let closeForm = document.querySelector("#cut");



const addProduct = ()=>{

    productContainer.innerHTML=""

    ProductData.forEach((ele,index)=>{
        
     productContainer.innerHTML += `<div class="product-cart">
                <div class="imgg"> 
                    <img src=${ele.proUrl}>
                </div>
                <div class="text">
                     <h4>${ele.proName}</h4>
                     <h5>${ele.proPrice}</h5>
                     <p>${ele.proDes}</p>
                </div>
                <div class="btns">
                      <button id="btn1" onClick='upFunction(${index})'>Update</button>
                      <button id="btn2" onClick="onDelete(${index})">Delete</button>
                </div>
            </div>`
    })

}

// addProduct();


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    
   let proName = e.target[0].value;
   let proDes = e.target[1].value;
   let proPrice =e.target[2].value;
   let proUrl  = e.target[3].value;

     if(proName ==="" || proDes==="" || proPrice==="" ||proUrl===""){
         productForm.style.display = "none";
        return
     }

    
   let obj = {

    proName,
    proDes,
    proPrice,
    proUrl
   }


    if(upData !== null){
        ProductData[upData] = obj;
        upData = null;
          localStorage.setItem("products",JSON.stringify(ProductData));
     }else{
    ProductData.push(obj);
          localStorage.setItem("products",JSON.stringify(ProductData));
     }
   
   console.log(ProductData)
   addProduct();
    productForm.style.display = "none";
    fdata.reset()


})


let upFunction = (proName)=>{

      productForm.style.display = "flex";

      form[0].value = ProductData[proName].proName;
      form[1].value = ProductData[proName].proDes;
      form[2].value = ProductData[proName].proPrice;
      form[3].value = ProductData[proName].proUrl;

   upData = proName;
    // productForm.style.display = "none";
}



let onDelete = (idx)=>{
     
    ProductData.splice(idx,1);
    localStorage.setItem("products", JSON.stringify(ProductData));
    addProduct();
}



createBtn.addEventListener("click",()=>{
    productForm.style.display = "flex";
})

closeForm.addEventListener("click",()=>{
    productForm.style.display = "none";

})

