window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    const cart = document.querySelector(".cartpage");
    header.classList.toggle("sticky", window.scrollY >50);
    cart.classList.toggle("topcart", window.scrollY >50);
});

const cartShow = ()=> {
    const cartlink = document.getElementById("#crt");
    const cartbox = document.querySelector(".cartpage");

    cartlink.addEventListener('click', ()=>{
        cartbox.classList.toggle('blank');
    });
}

const currentLocation = location.href;
        const menuItem = document.querySelectorAll('header > div > nav >ul >li > a');
        const menuholder = document.querySelectorAll('header > div > nav >ul >li');
        const menuLength = menuItem.length;
        console.log(menuLength);
        for(let i=0; i< menuLength; i++){
            if(menuItem[i].href === currentLocation){
                menuholder[i].className ="selected"
                menuItem[i].className ="selected a"
            }
        }