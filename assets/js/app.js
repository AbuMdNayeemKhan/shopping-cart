let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "iav9a02",
    name: "Camera",
    price: 22,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "assets/img/item-1.jpg"
}, {
    id: "xav9a02",
    name: "Digital Camera",
    price: 17,
    desc: "Norem ipsum, amet consectetur adipisicing elit.",
    img: "assets/img/item-2.jpg"
}, {
    id: "iav9at2",
    name: "Wild Items",
    price: 67,
    desc: "Dolor sit amet consectetur adipisicing elit.",
    img: "assets/img/item-3.jpg"
}, {
    id: "iai3a02",
    name: "Old Camera",
    price: 45,
    desc: "Ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "assets/img/item-4.jpg"
}];

let generateShop = () =>{
    return (shop.innerHTML = shopItemsData.map((i)=>{
        let {id, name, price, desc, img} = i;
        return `
        <div class="item" id="product-id-${id}">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    `
    }).join(""));
}

generateShop();

// `
//         <div class="item">
//             <img width="220" src="assets/img/items-1.jpg" alt="">
//             <div class="details">
//                 <h3>DSLR Camera</h3>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//                 <div class="price-quantity">
//                     <h2>$ 45</h2>
//                     <div class="buttons">
//                         <i class="bi bi-dash"></i>
//                         <div class="quantity">0</div>
//                         <i class="bi bi-plus"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `