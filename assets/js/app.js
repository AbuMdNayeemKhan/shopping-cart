let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "wfd",
    name: "Camera",
    price: 22,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "assets/img/item-1.jpg"
}, {
    id: "sggr",
    name: "Digital Camera",
    price: 17,
    desc: "Norem ipsum, amet consectetur adipisicing elit.",
    img: "assets/img/item-2.jpg"
}, {
    id: "xbvrf",
    name: "Wild Items",
    price: 67,
    desc: "Dolor sit amet consectetur adipisicing elit.",
    img: "assets/img/item-3.jpg"
}, {
    id: "chfh",
    name: "Old Camera",
    price: 45,
    desc: "Ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "assets/img/item-4.jpg"
}];

let basket = [];

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
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick="increment(${id})" class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    `
    }).join(""));
}

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item +=1;
    }
    update(selectedItem.id);
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find( (x) => x.id === selectedItem.id );

    if(search.item === 0){
        alert ("No item selected!");
    } else {
        search.item -= 1;
    }
    update(selectedItem.id);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y) => x+y, 0);
}