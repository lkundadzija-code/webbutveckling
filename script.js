const student = {
  name: "Alice",
  age: 20,
  course: "Web Development"
  
};
function U1(){
    document.getElementById("u1p").innerHTML = student["name"];
    student["examinerad"] = "true"
}


const car = {
  brand: "Toyota",
  year: 2018,
  color: "red"
};

function U2(){
    car["color"] = "red";
    car["year"] = car["year"] +1;
    document.getElementById("u2p").innerHTML = `Brand: ${car["brand"]}, Year: ${car["year"]}, Color: ${car["color"]}`;
}

const users = [
  { id: 1, name: "Anna", isActive: true },
  { id: 2, name: "John", isActive: false },
  { id: 3, name: "Sara", isActive: true }
];

function U3(){
    users.forEach(user => {
        if(user["id"]== 2){
            user["isActive"] = true;
        }
    });
    document.getElementById("u3p").innerHTML = JSON.stringify(users);
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];


function U4(){

    
    console.log(products[1].name);

    
    products[2].price = 350;

    
    products.push({ name: "Keyboard", price: 100 });

    
    let text = "";
    products.forEach(product => {
        text += `Produkten ${product.name} kostar ${product.price} €<br>`;
    });

    document.getElementById("u4p").innerHTML = text;
}
const order = {
  id: 101,
  customer: {
    name: "Bob",
    address: {
      city: "Stockholm",
      zip: "12345"
    }
  }
};
function U5(){
    order["customer"]["address"]["zip"] = "11836"
    order["customer"]["address"]["country"] = "Sweden";
    document.getElementById("u5p").innerHTML = "<pre>" + JSON.stringify(order, null, 2) + "</pre>";
}