const cartShow = ()=> {
    const cartlink = document.querySelector("#crt");
    const cartbox = document.querySelector(".cartpage");

    cartlink.addEventListener('click', ()=>{
        cartbox.classList.toggle('blank');
    });
}