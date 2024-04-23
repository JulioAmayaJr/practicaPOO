<?php
include_once ('config/conf.php');
class Mascota{
    public $conexion;
    public function __construct($conexion){
        $this->conexion = $conexion;
    }
    public function update($id, $datos){
        $set = [];
        foreach ($datos as $campo => $valor){
            $set[] = "$campo = '$valor'";
        }
        $set = implode(',', $set);
        $consulta_actualizar = "UPDATE tbl_mascota SET $set WHERE id_mascota = $id";
        $resultado = $this->conexion->conexion->query($consulta_actualizar);
        if($resultado){
            return true;
        }else{
            return $this->conexion->conexion->error;
        }
    }
    
}


$nombre=$_POST["nombre"];
$raza=$_POST["raza"];
$edad=$_POST["edad"];
$id=$_POST["id"];

$conexion = new ConexionBD('localhost', 'root', '', 'dbveterinaria');
$objeto = new Mascota($conexion);

$datos = array('nombre' => $nombre, 'edad' => $edad, 'raza' => $raza);
$conexion->conectar();
$prueba = $objeto->update($id,$datos);

if($prueba){
    echo json_encode(array("mensaje" => "Mascota editada correctamente"));
}else{
    echo json_encode(array("error" => "Error al agregar la mascota"));
}