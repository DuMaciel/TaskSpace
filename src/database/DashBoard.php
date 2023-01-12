<?php
include 'Dbconfig.php';

class DashBoard
{
    static public mysqli $connection;

    function __construct()
    {
        self::$connection = Dbconfig::getConnection();
    }

    static function boardExist($email, $id_board)
    {
        $resultado = self::$connection->query("SELECT `email` FROM `boards` WHERE `email` = '$email' AND `id_board` = '$id_board'");
        return ($resultado->num_rows > 0);
    }

    static function boardSelect($email, $id_board)
    {
        $resultado = self::$connection->query("SELECT `board` FROM `boards` WHERE `email` = '$email' AND `id_board` = '$id_board'")->fetch_assoc()['board'];
        return $resultado;
    }

    static function boardSelectAll($email)
    {
        $result = self::$connection->query("SELECT `board` FROM `boards` WHERE `email` = '$email'");
        $resultado = [];
        while ($row = $result->fetch_assoc()) {
            array_push($resultado, json_decode($row['board']));
        };
        return $resultado;
    }

    static function boardCreate($userId)
    {
        if (self::$connection->query("INSERT INTO `boards`(`user`) VALUES ('$userId')")) {
            return self::$connection->insert_id;
        }
        return false;
    }

    static function boardUpdate($email, $title)
    {
        if (self::boardExist($email, $title)) {
            $resultado = self::$connection->query("UPDATE `boards` SET `board` = '$board' WHERE `email` = '$email' AND `id_board` = '$id_board'");
            return $resultado;
        }
        $resultado = self::$connection->query("INSERT INTO `boards`(`email`,`id_board`,`board`) VALUES ('$email', '$id_board', '$board')");
        return $resultado;
    }
}
