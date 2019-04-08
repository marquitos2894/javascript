(function(){
    //funcion reutilizable para seleccionar elementos del dom
    function $(selector){
        return document.querySelector(selector);
    }

    function Carrito() {
        this.catalogo = [{id:'P01',nombre:'Lapiz',precio:5,imagen:'lapiz.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P02',nombre:'Colores',precio:50,imagen:'colores.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P03',nombre:'Libreta',precio:30,imagen:'libreta.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P04',nombre:'Mochila',precio:500,imagen:'mochila.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P06',nombre:'Pluma',precio:7.50,imagen:'pluma.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P07',nombre:'Plumon',precio:20,imagen:'plumon.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P08',nombre:'Regla',precio:10,imagen:'regla.png',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}];
    
        this.constructor = function(){
            if(!localStorage.getItem("carrito")){
                localStorage.setItem('carrito','[]');
            }
        }

        this.getCarrito = JSON.parse(localStorage.getItem("carrito"));

        this.agregarItem = function(item){
            for(i of this.catalogo){
                if(i.id == item){
                   var registro = i;
                }
            }
                if(!registro){
                    return;
                }

                for(i of this.getCarrito){
                    if(i.id == item){
                        i.cantidad++;
                        localStorage.setItem("carrito", JSON.stringify(this.getCarrito));
                        return;
                    }
                }

                registro.cantidad = 1;
                this.getCarrito.push(registro);
                localStorage.setItem("carrito", JSON.stringify(this.getCarrito));
            }
            //console.log(registro);
        this.getTotal = function(){
            var Total=0;
            for(i of this.getCarrito){
                Total += parseFloat(i.cantidad) * parseFloat(i.precio); 
            }
            return Total;
        }

        this.eliminarItem = function(item){

            for(i in this.getCarrito){
                if(this.getCarrito[i].id == item){
                    this.getCarrito.splice(i,1);
                    console.log("eliminado")
                }
            }
            localStorage.setItem("carrito", JSON.stringify(this.getCarrito));
        }

    }
    
    // esta funcion me simula una clase
    function Carrito_View(){
        //simula un metod o es u metodo
        this.renderCatalogo = function(){
            let template = ``;
            for(let i in carrito.catalogo){
               template += `
                <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                    <img src="./img/${carrito.catalogo[i].imagen}" alt="Placeholder">
                    </div>
                    <div class="card-content">
                        <h2 class="title is-3">${carrito.catalogo[i].nombre}</h2>
                        <p>${carrito.catalogo[i].descripcion}</p>
                        <br>
                        <h3 class="subtitle is-4">Precio: <strong>S/.${carrito.catalogo[i].precio}</strong></h3>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-footer-item" id="addItem" data-producto="${carrito.catalogo[i].id}">Agregar al Carrito</a>
                    </div>
                    </div>
                </div>
                `;
            }
            $('#catalogo').innerHTML = template;
        }

        this.showModal = function(){
            $("#modal").classList.toggle('is-active');
            this.renderCarrito();
            
        }

        this.hideModal = function(ev){
            if(ev.target.classList.contains("toggle")){
                //$("#modal").classList.toggle('is-active');
                this.showModal();
            }
        }

        this.renderCarrito = function(){

            if(carrito.getCarrito.length <= 0){
                var template = `<div class="is-12"><p class="title is-1 has-text-centered">El carrito esta vacio</p></div><br>`;
                $("#productosCarrito").innerHTML = template;
            }else{
                $("#productosCarrito").innerHTML = "";   
                let template = ``;
                for(i of carrito.getCarrito){
                    template += `
                    <div class="columns">
                        <div class="column is-3">
                            <figure>
                                <img src="img/${i.imagen}" alt="">
                            </figure>
                        </div>
                        <div class="column is-3">${i.nombre}</div>
                        <div class="column is-2 has-text-centered">S/.${i.precio}</div>
                        <div class="column is-1 has-text-centered">${i.cantidad}</div>
                        <div class="column is-2 has-text-centered"><strong><i>S/.${i.cantidad * i.precio}</i></strong></div>
                        <div class="column is-1"><p class="field"><a href="#" class="button is-danger"><span class="icon"><i class="fa fa-trash-o" id="deleteProducto" data-producto="${i.id}"></i></span></a></p></div>
                    </div>
                    `;
                //console.log(i);
                }
                $('#productosCarrito').innerHTML=template;
            }
            $('#totalCarrito').innerHTML="S/."+carrito.getTotal();
        }
        this.TotalProductos = function(){
            var total = carrito.getCarrito.length;
            $('#totalProductos > strong').innerHTML = total;
        }
    }

    //instaciamos la funcion Carrito
    let carrito = new Carrito();
    let carrito_view = new Carrito_View();

    document.addEventListener('DOMContentLoaded',function(){
        carrito_view.renderCatalogo();
        carrito_view.TotalProductos();
        carrito.constructor();
        console.log(carrito.getCarrito);
        carrito.getTotal();
    });
    
    $('#btn_carrito').addEventListener("click",function(){
        carrito_view.showModal();
        //carrito_view.renderCarrito();
        
    })

    $("#modal").addEventListener("click",function(ev){
        carrito_view.hideModal(ev)      
    })


    $("#catalogo").addEventListener("click",function(ev){
        ev.preventDefault();
        if(ev.target.id=="addItem"){
           carrito.agregarItem(ev.target.dataset.producto);
           //carrito_view.renderCarrito();
           carrito_view.showModal();
           alert("Se agrego al carrito de compras");
           carrito_view.TotalProductos();
        }
    });

    $("#productosCarrito").addEventListener("click",function(ev){
        ev.preventDefault();
        if(ev.target.id == "deleteProducto"){
            carrito.eliminarItem(ev.target.dataset.producto);
            carrito_view.renderCarrito();
            carrito_view.TotalProductos();
        }

    })
})();