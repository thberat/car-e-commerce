const product = [
  {
    id: 10000,
    name: "MercedesBenz",
    model: "E-Class 2024",
    price: 95000,
    color: "Blue",
    image: "./img/mercedes1.jpg"
  },
  {
    "id": 10001,
      name: "Audi",
      model: "A6 2024 S-Line",
      color: "Gray",
      price: 59195,
      image: "./img/audi1.jpg"
  },
  {
    "id": 10002,
    "name": "BMW ",
    "model": "5-Series 2025",
    "color": "Gray",
    "price": 59000,
    "image": "./img/bmw1.jpg"
  },
  {
    "id": 10003,
    "name": "Ford ",
    "model": "Explorer 2025",
    "color": "Black",
    "price": 41220,
    "image": "./img/ford1.jpg"
  },
  {
    "id": 10004,
        "name": "Volkswagen",
        "model": "Tiguan 2024",
        "color": "Red",
        "price": 25000,
        "image": "./img/vw-tiguan.jpg"
},
{
  "id": 10005,
        "name": "Ferrari",
        "model": "SF90 2024",
        "color": "White",
        "price": 289900,
        "image": "./img/ferrari-sf90.jpg"
},
{
  "id": 10006,
        "name": "Audi",
        "model": "Q8 2020",
        "color": "White",
        "price": 69195,
        "image": "./img/audiq8.jpg"
},
{
  "id": 10007,
  "name": "BMW",
  "model": "X5 M 2023",
  "color": "Orange",
  "price": 109895,
  "image": "./img/bmwx5.jpg"
},
{
  "id": 10008,
  "name": "Ford",
  "model": "Mustang 2024",
  "color": "Blue",
  "price": 32515,
  "image": "./img/fordmustang.jpg"
},
{
  "id": 10009,
        "name": "Volkswagen",
        "model": "Golf GTI 2025",
        "color": "Red",
        "price": 340000,
        "image": "./img/golfgti.jpg"
},
{
  "id": 10010,
  "name": "Ferrari",
  "model": "812 GTS 2025",
  "color": "Red",
  "price": 433765,
  "image": "./img/ferrari812gts.jpeg"
},
{
  "id": 10011,
        "name": "MercedesBenz",
        "model": "G-Class 2025",
        "color": "Black",
        "price": 150000,
        "image": "./img/gclass.jpg"
}
];
let categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
displayData();

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, name, model, price, color} = items;
          total=total+parseInt(price);
          document.getElementById("total").innerHTML = "$ "+total+".00";
          return(
              `<div class='cart-items'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${name}</p>
              <h2 style='font-size: 15px;'>$ ${price}</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  } 
   
}

function uploadCar() {
  var name = document.getElementById('name').value;
  var model = document.getElementById('model').value;
  var color = document.getElementById('color').value;
  var price = document.getElementById('price').value;
  var image = document.getElementById('file').value;
  if (name.length <2 || model.length <2 || color.length  <2 || price.length <2 || image.length <2) {
    alert("Ju lutem mbushini te dhenat sakt");
    return;
  }
var car =   {
  "id": 10001,
  name,
  model,
    color,
   price,
    image,
};
product.push(car);
categories = [...new Set(product.map((item)=>
  {return item}))]
  i=0;
displayData();
}

function displayData( ) {

  document.getElementById('root').innerHTML =   categories.map((item)=>
    {
      var {image, name, model, price, color} = item;
      return(
          `<div class='box'>
              <div class='img-box'>
                  <img class='images' src=${image}></img>
              </div>
          <div class='wrapper'>
          <p>${name}</p>
          <p>${model}</p>
          <p>${color}</p>
          <h2>$ ${price}</h2>`+
          "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
          `</div>
          </div>`
      )
    }).join('')
}

function search() {
  var search = document.getElementById('search').value;
  categories = [...new Set(product.filter((item)=> {
    return item.name.includes(search)  || item.color.includes(search) || item.model.includes(search) ;
  }))];
  i=0;
  displayData();
}