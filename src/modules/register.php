<?php

    if(isset($_POST['email'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        include realpath(__DIR__ . '/../database/Mysql.php');
        $db = new Mysql();

        if(!$db::userExist($email)){
            if($db::insertUser($name, $email, $password)){
                echo 'Usuario Cadastrado';
            }else{
                echo 'Erro ao cadastrar';
            }
        }else{
            $_SESSION['userExist']=true;
            header('Location:/register');
        }
        
    }
   
?>

