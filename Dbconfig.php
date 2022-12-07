<?php
class Dbconfig{
    protected string $serverName;
    protected string $userName;
    protected string $passWord;
    protected string $dataBase;
    public mysqli $connection;

    function __construct(){
        $this->serverName = 'localhost';
        $this->userName = 'root';
        $this->passWord = '';
        $this->dataBase = 'todolist'; 
    }

    function getConnection(){
        $this->connection = new mysqli($this->serverName, $this->userName, $this->passWord, $this->dataBase);
        return $this->connection;
    }
}
?>