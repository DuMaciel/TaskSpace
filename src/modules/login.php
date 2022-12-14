<?php
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        include realpath(__DIR__ . '/../database/Mysql.php');
        $db = new Mysql();

        if($db::testPass($email, $password)){
            echo 'Usuario logado';
        }else{
            echo 'Senha incorreta';
        }
    }
?>
