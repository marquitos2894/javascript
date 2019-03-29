<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include 'modulo/css/estilos.php' ?>
  

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>PASAR VALORES POST Y OBTENER DATOS / FETCH </h1>
    
    <form id="formulario">
        <div class="form-row"  name="formulario" >
            <div class="col">
                <input type="text" name="nombre" class="form-control" placeholder="First name">
            </div>
            <div class="col">
                <input type="text" name="apellido" class="form-control" placeholder="Last name">
            </div>
        </div>
        <button class="btn btn-primary btn-lg btn-block"  type="submit" >CLICK</button>
    </form>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="main/form.js"></script>
    <?php include 'modulo/js/javascript.php' ?>

</body>
</html>