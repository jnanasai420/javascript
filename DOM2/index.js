let card1 = document.getElementById("card1container");
card1.style.border = "2px solid black";
card1.style.backgroundColor = "yellow";
card1.style.width = "500px";
card1.innerHTML = `<h1 id="h1tag">Devara</h1>
 <img src="https://static.toiimg.com/photo/113587323.jpeg"
                                    width="500px" height="300px" />
                                    <h2> Nandhamuri Tharaka Ramarao</h2>
                                    <h2> Koratala Shiva</h2>
                                    <h2> Janvi Kapoor</h2>
                                    <h2> Shaif Ali Khan</h2>
                                   <button id="bookticket" onclick="clicker()">Book Ticket</button> `;
let title = document.getElementById("h1tag");
title.style.textAlign = "center";
let booking = document.getElementById("bookticket");
booking.style.padding = "10px 30px";
booking.style.backgroundColor = "orange";
booking.style.border = "2px solid black";
booking.style.marginLeft = "180px";
booking.style.borderRadius = "40px";
booking.style.fontWeight = "bolder";
function clicker() {
  booking.style.backgroundColor = "black";
  booking.style.color = "orange";
  booking.style.border = "2px solid orange";
}

// Add to cart
let divver = document.createElement("div");
document.body.appendChild(divver);
divver.innerHTML = `<h1 id="h1tag">Shoes</h1>
<img id="image" src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2aecf220-1477-4a70-9070-56216a01264b/NIKE+DUNK+LOW+RETRO.png'/>
<h3 id="price">$400</h3>
<p>Nike shoes known for it's brand value</p>
<button id="addtocart">Add To Cart</button>`;
divver.style.width = "300px";
divver.style.backgroundColor = "skyblue";
let h1tag = document.getElementById("h1tag");
h1tag.style.textAlign = "center";
let image = document.getElementById("image");
image.style.width = "300px";
image.style.height = "400px";
let price = document.getElementById("price");
price.style.color = "red";
let addtocart = document.getElementById("addtocart");
addtocart.style.color = "black";
addtocart.style.backgroundColor = "green";
addtocart.style.textAlign = "center";
addtocart.style.borer = "2px solid black";
addtocart.style.marginLeft = "60px";
addtocart.style.padding = "10px 40px";
addtocart.style.borderRadius = "40px";

//from data
movies = [
  {
    name: "Devara",
    img: "https://staticimg.amarujala.com/assets/images/2022/05/20/ntr30_1653019034.jpeg?w=1200",
    hero: "NTR",
    heroine: "Janvi",
    director: "shiva",
    budget: "300cr",
  },
  {
    name: "Janatha gariage",
    img: "https://pbs.twimg.com/media/EgwTJerU0AEa0qP.jpg:large",
    hero: "NTR",
    heroine: "samantha",
    director: "shiva",
    budget: "100cr",
  },
];
let card = document.createElement("div");
card.style.display = "flex";
card.style.flexWrap = "wrap";
document.body.append(card);
for (let i = 0; i < movies.length; i++) {
  let card2 = document.createElement("div");
  card2.innerHTML = `<h1>${movies[i].name}</h1>
                    <img id="image" src=${movies[i].img} width="300px" height="200" />
                    <h1>${movies[i].hero}</h1>
                    <h1>${movies[i].heroine}</h1>
                    <h1>${movies[i].director}</h1>
                    <h1>${movies[i].budget}</h1> <br> <br> <br>`;
  card2.style.border = "2px solid black";
  card2.style.backgroundColor = "skyblue";
  card2.style.width = "300px";
  card2.style.height = "550px";
  card2.style.display = "inline-block";
  card2.style.marginLeft = "50px";
  card2.style.justifyContent = "";
  document.body.appendChild(card2);
}
