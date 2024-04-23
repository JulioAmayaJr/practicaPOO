<?php
include_once ('config/conf.php');
class Mascota{
    public $conexion;
    public function __construct($conexion){
        $this->conexion = $conexion;
    }
    public function delete($id){
        $consultadelete = "DELETE FROM tbl_mascota WHERE id_mascota=$id";
        $ejecutar_delete = $this->conexion->conexion->query($consultadelete);
        return $ejecutar_delete;
    }
}
$id=$_GET["id"];

$conexion = new ConexionBD('localhost', 'root', '', 'dbveterinaria');
$objeto = new Mascota($conexion);

$conexion->conectar();
$prueba = $objeto->delete($id);

if($prueba){
    echo json_encode(array("mensaje" => "Mascota eliminada correctamente"));
}else{
    echo json_encode(array("error" => "Error al agregar la mascota"));
}