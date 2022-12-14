<?php
include 'Dbconfig.php';

class Mysql{
    static public mysqli $mysql;

    function __construct(){
        self::$mysql = Dbconfig::getConnection();
    }
    
    static function insertUser($name, $email, $pass){
        $name = self::$mysql->real_escape_string($name);
        $email = self::$mysql->real_escape_string($email);
        $pass = password_hash($pass, PASSWORD_DEFAULT);

        if(!self::userExist($email)){
            $resultado = self::$mysql->query("INSERT INTO users (_name, _email, _pass) VALUES ('$name','$email','$pass');");
            return $resultado;
        }
        return false;
    }

    static function testPass($email, $pass){
        if(self::userExist($email)){
            $passHash = self::$mysql->query("SELECT _pass FROM users WHERE _email = '$email'")->fetch_assoc()['_pass'];
            $resultado = password_verify($pass, $passHash);
            return $resultado;
        }
        return false;
    }

    static function userExist($email){
        $resultado = self::$mysql->query("SELECT _email FROM users WHERE _email = '$email'");
        return ($resultado->num_rows > 0);
    }

}
?>