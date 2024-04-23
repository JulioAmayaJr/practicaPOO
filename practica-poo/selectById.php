<?php
include_once ('config/conf.php');


class Mascota{
    private $conexion;

    
    public function __construct($conexion) {
        $this->conexion = $conexion;
    }
    public function selectById($id){
        $consultaSelect = "SELECT * FROM tbl_mascota where id_mascota=$id";
        $ejecutar_consulta = $this->conexion->conexion->query($consultaSelect);
        $respuesta = $ejecutar_consulta->fetch_all(MYSQLI_ASSOC);
        return json_encode($respuesta);
    }


}
$idMascota=$_GET["id"];
$conexion = new ConexionBD('localhost', 'root', '', 'dbveterinaria');
$conexion->conectar();
$objeto = new Mascota($conexion);
echo $objeto->selectById($idMascota);