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

    static function boardExist($email, $id_board){
        $resultado = self::$mysql->query("SELECT `email` FROM `boards` WHERE `email` = '$email' AND `id_board` = '$id_board'");
        return ($resultado->num_rows > 0);
    }

    static function boardSelect($email, $id_board){
        $resultado = self::$mysql->query("SELECT `board` FROM `boards` WHERE `email` = '$email'")->fetch_assoc()['board'];
        return $resultado;
    }

    static function boardSelectAll($email){
        $result = self::$mysql->query("SELECT `board` FROM `boards` WHERE `email` = '$email'");
        $resultado = [];
        while ($row = $result->fetch_assoc()) {
            array_push($resultado , $row['board']);
        };
        return $resultado;
    }

    static function boardInsert($email, $id_board, $board){
        if(self::boardExist($email, $id_board)){
            $resultado = self::$mysql->query("UPDATE `boards` SET `board` = '$board' WHERE `email` = '$email' AND `id_board` = '$id_board'");
            return $resultado;
        }
        $resultado = self::$mysql->query("INSERT INTO `boards`(`email`,`id_board`,`board`) VALUES ('$email', '$id_board', '$board')");
        return $resultado;
    }
}
?>