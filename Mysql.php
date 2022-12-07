<?php
include 'Dbconfig.php';

class Mysql{
    public mysqli $mysql;

    function __construct(){
        $dbconfig = new Dbconfig();
        $this->mysql = $dbconfig->getConnection();
    }
    
    function insertUsers($values){
         $resultado = $this->mysql->query("INSERT INTO usuarios (nome, email, senha) VALUES ('$values->nome','$values->email','$values->senha');");
         return $resultado;
    }

    function selectUsers(){
        $resultado = $this->mysql->query("SELECT nome, email FROM usuarios");
         return $resultado;
    }
}
?>