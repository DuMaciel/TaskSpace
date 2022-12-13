<?php
include 'Dbconfig.php';

class Mysql{
    public mysqli $mysql;

    function __construct(){
        $dbconfig = new Dbconfig();
        $this->mysql = $dbconfig->getConnection();
    }
    
    function insertUser($name, $email, $pass){
        $name = $this->mysql->real_escape_string($name);
        $email = $this->mysql->real_escape_string($email);
        $pass = password_hash($pass, PASSWORD_DEFAULT);

        if(!$this->userExist($email)){
            $resultado = $this->mysql->query("INSERT INTO users (_name, _email, _pass) VALUES ('$name','$email','$pass');");
            return $resultado;
        }
        return false;
    }

    function testPass($email, $pass){
        if($this->userExist($email)){
            $passHash = $this->mysql->query("SELECT _pass FROM users WHERE _email = '$email'")->fetch_assoc()['_pass'];
            $resultado = password_verify($pass, $passHash);
            return $resultado;
        }
        return false;
    }

    function userExist($email){
        $resultado = $this->mysql->query("SELECT _email FROM users WHERE _email = '$email'");
        return ($resultado->num_rows > 0);
    }

}
?>