const cartItems = [];
let isTotalHidden = true;
const boats = {
 name: "Boats",
 price: 1000
};
const sheep = {
 name: "Sheep",
 price: 1250
};
const cat = {
 name: "Cat",
 price: 1300
};
const cows = {
 name: "Cows",
 price: 1000
};
const house = {
 name: "House",
 price: 1200
};
const road = {
 name: "Road",
 price: 1500
};



function addToCart(item) {
 cartItems.push(item);
 document.getElementById("itemCounter").innerHTML = cartItems.length;
 showTotal();
}

function clickCart() {
 isTotalHidden = !isTotalHidden;
 showTotal();
}

function showTotal() {
 const orderTotal = document.getElementById("orderTotal");
 orderTotal.innerHTML = "";
 
 if (isTotalHidden === false) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
   total += cartItems[i].price;
  }
  orderTotal.innerHTML += "Total: NZD " + total;
 }
}

function calculateTotal(total) {
 let shipping;
 if (total >= 700) {
  shipping = 30;
 } else {
  shipping = 50;
 }
 return shipping;
}