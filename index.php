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
    <h1>JSON EXTERNO Y FETCH API </h1>
    <button class="btn btn-primary btn-lg btn-block" id="ver">JSON</button>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody id="contenido">
          
        </tbody>
      </table>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <?php include 'modulo/js/javascript.php' ?>
    <script src="main/fecth.js" ></script>
</body>
</html>