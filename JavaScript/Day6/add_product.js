function registerProduct(){
    console.log("Function Triggered....");
    document.getElementById("displayContainer").style.display = 'block';
    document.getElementById('pnameDd').textContent = document.getElementById('lblproductName').value;
    document.getElementById('priceDd').textContent = document.getElementById('lblprice').value;
    document.getElementById('shipDd').textContent = document.getElementById('lstCities').value;

    availablity = document.getElementById('switchCheckDefault');
    available = '';
    if(availablity.checked){
        available = 'Product Available';
    }else{
        available = 'Out of Stock';
    }

    document.getElementById('availableDd').textContent = available;
    document.getElementById('btnContainer').style.display = 'none';
}
function editProduct(){
    console.log("Function editProduct Triggered....");
    // document.getElementById("modal-header").style.display = 'block';
    document.getElementById('modal-header').textContent = 'Edit Product';
    document.getElementById('registerBtn').textContent = 'Save';
}