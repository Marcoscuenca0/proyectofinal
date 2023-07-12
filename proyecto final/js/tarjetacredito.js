
const tarjeta = document.querySelector('#tarjeta'),
btnAbrirformulario = document.querySelector ('#btn-abrir-formulario'),
formulario = document.querySelector ('#formulario-tarjeta'),
numeroTarjeta = document.querySelector ('#tarjeta .numero'),
nombreTarjeta = document.querySelector ('#tarjeta .nombre'),
logoMarca = document.querySelector('#logo-marca'),
firma = document.querySelector (' #tarjeta .firma p')
mesExpiracion = document.querySelector('#tarjeta .mes')
yearExpiracion = document.querySelector('#tarjeta .year')
ccv = document.querySelector('#tarjeta .ccv')
enviar = document.querySelector('#enviar .btn-enviar ')
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active')

    }
}

tarjeta.addEventListener ('click', ()=> {
    tarjeta.classList.toggle('active')
})


btnAbrirformulario.addEventListener('click', ()=> {
    btnAbrirformulario.classList.toggle('active')

formulario.classList.toggle('active')

})




for(let i = 1; i <= 12; i++) {
let opcion = document.createElement('option');
opcion.value = i 
opcion.innerText = i 
formulario.selectMes.appendChild(opcion);
}





const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i 
    opcion.innerText = i 
    formulario.selectYear.appendChild(opcion);
}



formulario.inputNumero.addEventListener('keyup', (e)=> {
    let valorInput = e.target.value;
    formulario.inputNumero.value = valorInput.replace(/\s/g, '') .replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ')
    .trim();

    numeroTarjeta.textContent = valorInput
    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####'
        logoMarca.innerHTML = ''
    }
    if(valorInput[0] == 4){
        logoMarca.innerHTML = ''
        const imagen = document.createElement('img') 
        imagen.src = './images/visa.png';
        logoMarca.appendChild(imagen)
    }else if( valorInput[0] ==  5) { 
        const imagen = document.createElement('img') 
        imagen.src = './images/mastercard.png';
        logoMarca.appendChild(imagen)

    }
    mostrarFrente()
})
formulario.inputNombre.addEventListener('keyup', (event) => {
    let valorInput = event.target.value;
    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput
    firma.textContent = valorInput
    mostrarFrente()
});



formulario.selectMes.addEventListener('change',(event) => {
    mesExpiracion.textContent = event.target.value
    mostrarFrente()
}) 




formulario.selectYear.addEventListener('change',(event) => {
    yearExpiracion.textContent = event.target.value.slice(2)
    mostrarFrente()
}) 




formulario.inputCCV.addEventListener('keyup', () =>  {
    if(!tarjeta.classList.contains('active')){
tarjeta.classList.toggle('active')
    }
    formulario.inputCCV.value = formulario.inputCCV.value.replace(/\s/g, '').replace(/\D/g, '')
ccv.textContent = formulario.inputCCV.value
})





$(document).ready(function() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compra realizada',
        showConfirmButton: false,
        timer: 1500
      })
    });
    
