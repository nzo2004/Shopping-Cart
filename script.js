const card = document.getElementsByClassName("card");
const btnAdd = document.getElementsByClassName("btn-info");
const btnCart = document.querySelector(".btn-cart");
const cartList = document.querySelector(".shopping-cart-list");

//Alışveriş class oluştururuz
class Shopping{
    //Nesne oluştururuz
    constructor(title,price,image){
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI{

    //Kart ekleme fonksiyonu
    addToCart(shopping){
        //Div element oluştururuz
        const listItem = document.createElement("div");
        //list-item eklensin
        listItem.classList = "list-item";

        //HTML öğesi olarak eklemek için kullanılır
        listItem.innerHTML = 
        `
        <div class="row align-items-center text-white-50">
            <div class="col-md-3">
            <!--
            
            -->
                <img src="${shopping.image}" alt="product" class="img-fluid">
            </div>
            <div class="col-md-5">
                <div class="title">${shopping.title}</div>
            </div>
            <div class="col-md-2">
                <div class="price">${shopping.price}</div>
            </div>
            <div class="col-md-2">
                <button class="btn btn-delete">
                    <i class="fas fa-trash-alt text-danger"></i>
                </button>
            </div>
        </div>
        `
        cartList.appendChild(listItem);
    }

    //Kart silmek için kullanılır
    removeCart(){
        let btnRemove = document.getElementsByClassName("btn-delete");
        let self = this;
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function(){
                this.parentElement.parentElement.parentElement.remove();
                self.cartCount();
            })
            
        }
    }

    //Kart sayısı fonksiyonu
    cartCount(){
        let cartListItem = cartList.getElementsByClassName("list-item");
        let itemCount = document.getElementById("item-count");
        itemCount.innerHTML = cartListItem.length;
    }

    //Sepet değiştirmek için kullanılır
    cartToggle(){
        btnCart.addEventListener("click", function(){
            cartList.classList.toggle("d-none");
        })
    }
    
}

//For döngüsü ile liste yaparız
for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener("click", function(e){
        let title = card[i].getElementsByClassName("card-title")[0].textContent;
        let price = card[i].getElementsByClassName("price")[0].textContent;
        let image = card[i].getElementsByClassName("card-img-top")[0].src;
        btnAdd[i].classList.add("disabled");
        btnAdd[i].textContent = "In Card";
        let shopping = new Shopping(title,price,image);
        let ui = new UI();

        ui.addToCart(shopping);
        ui.removeCart()
        ui.cartCount();


        e.preventDefault();
    })
}


document.addEventListener("DOMContentLoaded", ()=> {
    let ui = new UI();

    ui.cartToggle();
})