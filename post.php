<?php 

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];


if($nombre === ''){
    echo json_encode('Completa el campo nombre');
}
else{
    echo json_encode("correcto nombre {$nombre} correcto !");

}
?>