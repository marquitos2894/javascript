var formulario = document.querySelector("#formulario");
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let datos = new FormData(formulario);
    console.log(datos);
    //console.log(datos.get('nombre'));  
    //console.log(datos.get('apellido'));  
    
    fetch('post.php',{
        method : 'POST',
        body :  datos
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    });

})

