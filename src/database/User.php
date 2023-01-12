<?php
include 'Dbconfig.php';

class User
{
    static public mysqli $connection;

    function __construct()
    {
        self::$connection = Dbconfig::getConnection();
    }

    static function userExist($email)
    {
        $resultado = self::$connection->query("SELECT `email` FROM `users`  WHERE `email` = '$email'");
        return ($resultado->num_rows > 0);
    }

    static function userInsert($name, $email, $pass)
    {
        $name = self::$connection->real_escape_string($name);
        $email = self::$connection->real_escape_string($email);
        $pass = password_hash($pass, PASSWORD_DEFAULT);
        if (self::userExist($email)) {
            return false;
        }
        $resultado = self::$connection->query("INSERT INTO `users`  (`email`, `name`, `password`) VALUES ('$email','$name','$pass');");
        return $resultado;
    }

    static function userPassTest($email, $pass)
    {
        if (self::userExist($email)) {
            $passHash = self::$connection->query("SELECT `password` FROM `users` WHERE `email` = '$email'")->fetch_assoc()['password'];
            return password_verify($pass, $passHash);
        }
        return false;
    }

    static function userId($email)
    {
        return self::$connection->query("SELECT `id` FROM `users` WHERE `email` = '$email'")->fetch_assoc()['id'];
    }
}
