
document.querySelector('#ver').addEventListener('click',traer);
let contenido = document.querySelector('#contenido');

function traer(){
    fetch('http://mindicador.cl/api/dolar')
    .then(data => data.json())
    .then(data=> {
        table(data);
    });
}

function table(datos){
    contenido.innerHTML = ``; 
    for(let i of datos.serie){
        contenido.innerHTML += `
        <tr>
            <td>${i.fecha}</td>
            <td>${i.valor}</td>
        </tr>
        `; 
        console.log(i.fecha);
    }
}