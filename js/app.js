// mostrar carrito  

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
     cart.classList.toggle('show-cart')
    })
})();

// Agregar items al cartito 


(function(){
    const carBtn = document.querySelectorAll('.store-item-icon')

    carBtn.forEach(function(btn){
     btn.addEventListener('click',function(event){
        //console.log(event.target)

     if(event.target.parentElement.classList.contains('store-item-icon')) {
        let fullPath = 
        event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf('img') + 3;
        let partPath = fullPath.slice(pos);

     const item = {};
     item.img = `img-cart${partPath}`;
    let name = 
    
    event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
    item.name = name;
    
    let price = 
    event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
    let finalPrice = price.slice(1).trim();

    item.price = finalPrice;

const carItem = document.createElement('div');
    carItem.classList.add(
        'cart-item', 
        'd-flex',
        'justify-content-between', 
        'text-capitalize', 
        'my-3');

    carItem.innerHTML = `
       <img src="${
        item.img
       }" class="img-fluid rounded-circle" id="item-img" alt="">
        <div class="item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">${
                item.name
            }</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${
                item.price
            }</span>
        </div>
        <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
        </a>
    
    `;
// carrito

const cart = document.getElementById('cart');
const total = document.querySelector('.cart-total-container');

cart.insertBefore(carItem, total);
alert('Haz agregado un item al carrito');
showTotals();
     }
     });
    });// Final Carrito

// Mostrando el Total
function showTotals(){
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
const totalMoney = total.reduce(function(total, item){
    total += item;
    return total;
}, 0)
document.getElementById('cart-total').textContent = totalMoney;
document.querySelector(".item-total").textContent = totalMoney;
document.getElementById('item-count').textContent = total.length;

// Boton Borrar Item
(function(){
    
    const delBtn = document.getElementById('cart-item-remove');
    if (delBtn != null){
    delBtn.addEventListener('click', function(){    
            const node = delBtn.parentElement;
            node.innerHTML = "" ; 
            showTotals();
    })
    }
})();
// Termino Borrar Item
    // Borrar Todo
    (function(){
        const delAll = document.getElementById('clear-cart');
        delAll.addEventListener('click', function(){
            const items = document.querySelectorAll(".cart-item");
            items.forEach(function(item){
                item.innerHTML = "";
            })
            showTotals();
           })
    })();
    // termino borrar todo
}

})();