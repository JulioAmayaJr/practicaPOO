<?php
include_once ('config/conf.php');
class Mascota{
    public $conexion;
    public function __construct($conexion){
        $this->conexion = $conexion;
    }
    public function insert($datos){
        $campos = implode(',', array_keys($datos));
        $valores = "'".implode("','", array_values($datos))."'";
        $consulta_insertar = "INSERT INTO tbl_mascota ($campos) VALUES ($valores)";
        
        $resultado = $this->conexion->conexion->query($consulta_insertar);
        
        if ($resultado){
            return true;
        } else {
            
            return $this->conexion->conexion->error;
        }
    }
    
}

$nombre=$_POST["nombre"];
$raza=$_POST["raza"];
$edad=$_POST["edad"];

$conexion = new ConexionBD('localhost', 'root', '', 'dbveterinaria');
$objeto = new Mascota($conexion);

$datosInsert = array('nombre' => $nombre, 'edad' => $edad, 'raza' => $raza);
$conexion->conectar();
$prueba = $objeto->insert($datosInsert);

if($prueba){
    echo json_encode(array("mensaje" => "Mascota agregada correctamente"));
}else{
    echo json_encode(array("error" => "Error al agregar la mascota"));}