let total=0;
function addToCart(element){
let input=element.previousElementSibling;
let singleItem=element.closest('.single-item');
let ime=singleItem.querySelector('h3').innerText;
console.log(ime);
let cijena=singleItem.querySelector('p').innerText;
let cijenaP=parseInt(cijena.substr(1));
let totalDiv=document.querySelector('.total');

let cartItems=document.querySelector('.cart-items');
let div=document.createElement('div');
let p=document.createElement('p');
let iznos=cijenaP*input.value;

total+=iznos;
console.log(iznos,total);
p.innerHTML=`${ime} ${cijena.substr(0)}x${input.value}=<span class="iznos">${iznos}<span/>$`
let gumb=document.createElement('button');
gumb.innerText="Ukloni";
cartItems.appendChild(div);
div.appendChild(p);
p.appendChild(gumb);

element.disabled=true;
element.innerText="Dodato";

gumb.addEventListener("click",()=>{
	div.remove();
	element.disabled=false;
	element.innerText="Dodaj";
	input.value=0;
	total-=iznos;
	totalDiv.innerHTML=`Total:${total}$`;

})


totalDiv.innerHTML=`Total:${total}$`;






}
