let buttons=Array.from(document.getElementsByClassName("addtocart"))
buttons.forEach(b => b.addEventListener("click", addHandler));
let myCart = document.getElementById('cart');
let cartItems=[]
function addHandler(e){
    let parent=e.target.parentNode;
    let id = parent.getAttribute('id');
    if(!cartItems.includes(id)){
        cartItems.push(id);
        img = document.createElement("img");
        img.setAttribute('src', '/static/images/myCircle.jfif');
        img.setAttribute("id", "myCircle"+id);
        img.setAttribute("class", "myCircle");
        parent.appendChild(img)
        myCart.innerText = cartItems.length;
    }else{
        cartItems = cartItems.filter(e => id!=e);
        img = document.getElementById("myCircle"+id);
        parent.removeChild(img)
        myCart.innerText = cartItems.length;
    }
    console.log(cartItems)
}