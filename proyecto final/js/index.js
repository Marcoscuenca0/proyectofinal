const informacionCompra = document.getElementById("informacionCompra");
const contenedorCompra = document.getElementById("contenedorCompra");
const productosCompra = document.getElementById("productosCompra");
const carritoIcono = document.querySelector("#carritoIcono");
const numero = document.getElementById("numero");
const section = document.getElementById("section");
const inputSearch = document.getElementById("buscador");
const total = document.getElementById("total");
const body = document.querySelector("body");


function visualizarProductos(resultados = celulares) {
  section.innerHTML = "";
  for (let i = 0; i < resultados.length; i++) {
    const producto = resultados[i];
    if (producto.stock > 0) {
      section.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${producto.imagen}" width="50px" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <h5 class="card-title">${producto.precio}</h5>
              <p class="card-text">   Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a sed, consequuntur neque non saepe sequi, nesciunt modi, perspiciatis iste odio sit in delectus facilis aperiam illum ut architecto omnis!      </p>
              <button type="button" class="btn btn-primary btn-lg" onclick="comprar(${producto.id})">Comprar</button>
              <p class="stock">Stock: ${producto.stock}</p>
            </div>
          </div>
        </div>`;
    } else {
      section.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${producto.imagen}" width="50px" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <h5 class="card-title">${producto.precio}</h5>
              <p class="card-text">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a sed, consequuntur neque non saepe sequi, nesciunt modi, perspiciatis iste odio sit in delectus facilis aperiam illum ut architecto omnis! </p>
              <button class="soldOut" disabled>Sold Out</button>
              <p class="stock">Stock: ${producto.stock}</p>
            </div>
          </div>
        </div>`;
    }
  }
}

let searchTimeout = null;

function filtrarProductos() {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    const searchTerm = inputSearch.value.trim().toLowerCase();
    const resultados = celulares.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm)
    );

    visualizarProductos(resultados);
  }, 300);
}

inputSearch.addEventListener("keyup", filtrarProductos);

window.addEventListener("load", () => {
  visualizarProductos();
  contenedorCompra.classList.add("none");
});

function comprar(indice) {
  const producto = celulares.find((item) => item.id === indice);
  if (producto && producto.stock > 0) {
    lista.push({ nombre: producto.nombre, precio: producto.precio });
    producto.stock -= 1;
    guardarAlmacenamientoLocal("productos", celulares);
    numero.innerHTML = lista.length;
    numero.classList.add("diseñoNumero");
    mostrarElemtrosLista();
    visualizarProductos();
  }
}

carritoIcono.addEventListener("click", function(){
  body.style.overflow = "hidden";
  contenedorCompra.classList.remove('none');
  contenedorCompra.classList.add('contenedorCompra');
  informacionCompra.classList.add('informacionCompra');
  mostrarElemtrosLista();
});

function mostrarElemtrosLista() {
  productosCompra.innerHTML = "";
  valortotal = 0;
  for (let i = 0; i < lista.length; i++){
    productosCompra.innerHTML += `<div><div class="img"><button onclick=eliminar(${i}) class="botonTrash"><img src="./images/trash.png"></button><p>${lista[i].nombre}</p></div><p> $${lista[i].precio}</p></div>`;
    valortotal += parseInt(lista[i].precio);
  }
  total.innerHTML = `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`;
}

function eliminar(indice){
  let van = true;
  let i = 0;
  while (van == true) {
    if (celulares[i].nombre == lista[indice].nombre) {
      celulares[i].stock += 1;
      lista.splice(indice, 1);
      van = false;
    }
    i += 1;
  }
  guardarAlmacenamientoLocal("productos", celulares);

  numero.innerHTML = lista.length;
  if (lista.length == 0){
    numero.classList.remove("diseñoNumero");
  }
  visualizarProductos();
  mostrarElemtrosLista();
}

x.addEventListener("click", function(){
  body.style.overflow = "auto";
  contenedorCompra.classList.add('none');
  contenedorCompra.classList.remove('contenedorCompra');
  informacionCompra.classList.remove('informacionCompra');
});