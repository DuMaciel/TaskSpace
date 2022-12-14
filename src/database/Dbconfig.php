<?php
class Dbconfig{
    static protected string $serverName = 'localhost';
    static protected string $userName = 'root';
    static protected string $passWord = '';
    static protected string $dataBase = 'todolist';
    static public mysqli $connection;

    static function getConnection(){
        if(empty(self::$connection)){
            self::$connection = new mysqli(self::$serverName, self::$userName, self::$passWord, self::$dataBase);
        }
        return self::$connection;
    }
}
?>