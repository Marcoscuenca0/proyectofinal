const lista = []
let valortotal = 0
const celulares = [
  { id: 1, imagen: "../images/p60.jpg", nombre: "p60", precio: 100000, stock: 10},
  { id: 2, imagen: "./images/s10.jpg", nombre: "samsung s10", precio: 90000,  stock: 5 },
  { id: 3, imagen: "./images/iphone14pro.jpg", nombre: "iphone 14 pro", precio: 400000, stock: 8 },
  { id: 4, imagen: "/images/s10e.jpg", nombre: "samsung s10e", precio: 60000, stock: 9},
  { id: 5, imagen: "/images/samsung20plus.jpg", nombre: "samsung s20 plus", precio: 150000, stock: 6 },
  { id: 6, imagen: "/images/samsungs23.jpg", nombre: "samsung s23 plus", precio: 280000 , stock: 4},
  { id: 7, imagen: "/images/iphone-13-pro-max.jpg", nombre: "iphone 13 pro max", precio: 160000, stock: 9 },
  { id: 8, imagen: "./images/OnePlus-10-pro.jpg", nombre: "one plus 10 pro", precio: 200000 ,stock: 4},
  { id: 9, imagen: "./images/s23.jpg", nombre: "samsung s23", precio: 150000, stock: 8 },
];


function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
  localStorage.setItem(llave, JSON.stringify(valor_a_guardar));
}

function obtenerAlmacenamiento(llave) {
  const datos = JSON.parse(localStorage.getItem(llave));
  return datos;
}

let productos = obtenerAlmacenamiento('productos') || [];
