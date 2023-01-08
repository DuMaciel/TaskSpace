<?php
include 'Dbconfig.php';

class Mysql{
    static public mysqli $mysql;

    function __construct(){
        self::$mysql = Dbconfig::getConnection();
    }
    
    static function userExist($email){
        $resultado = self::$mysql->query("SELECT `email` FROM `users`  WHERE `email` = '$email'");
        return ($resultado->num_rows > 0);
    }

    static function userInsert($name, $email, $pass){
        $name = self::$mysql->real_escape_string($name);
        $email = self::$mysql->real_escape_string($email);
        $pass = password_hash($pass, PASSWORD_DEFAULT);
        if(self::userExist($email)){
            return false; 
        }
            $resultado = self::$mysql->query("INSERT INTO `users`  (`email`, `name`, `password`) VALUES ('$email','$name','$pass');");
            return $resultado;
        }

    static function userPassTest($email, $pass){
        if(self::userExist($email)){
            $passHash = self::$mysql->query("SELECT `password` FROM `users` WHERE `email` = '$email'")->fetch_assoc()['password'];
            $resultado = password_verify($pass, $passHash);
            return $resultado;
        }
        return false;
    }


    
    
    

}
?>