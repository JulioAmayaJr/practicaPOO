<?php
class ConexionBD{

  //variables o caracteristicas
  //-- servidor, suario, contraseña, base de datos, conexion
  private $server;
  private $usuario;
  private $contraseña;
  private $db;
  public $conexion;
  //constructor
  public function __construct($server, $usuario, $contraseña, $db){
    $this->server = $server;
    $this->usuario = $usuario;
    $this->contraseña = $contraseña;
    $this->db = $db;
    //variable de conexion, tiene que ir nula porque se llena con palabras reservadas con el objeto.
    $this->conexion = null;
  }

  //metodos

  public function conectar(){
    $this->conexion = new mysqli($this->server, $this->usuario, $this->contraseña, $this->db);
    if($this->conexion->connect_error){
      die("conexion a la base de datos es mala".$this->conexion->connect_error);
    }else{
     // echo "conexion a base de datos es un exito";
    }
  }

  public function desconectar(){
    if($this->conexion === null){

    }else{
      $this->conexion->closed();
      // echo "se cerro la conexion";
    }

  }
}
//objetos
$conexion = new ConexionBD('localhost','root','','dbveterinaria');


?>