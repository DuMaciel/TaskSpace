<?php

    if(isset($_POST['email'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        include realpath(__DIR__ . '/../database/Mysql.php');
        $db = new Mysql();

        if(!$db::userExist($email)){
            if($db::insertUser($name, $email, $password)){
                $_SESSION['successRegistering']=true;
                header('Location:/login');
            }else{
                $_SESSION['errorRegistering']=true;
                header('Location:/register');
            }
        }else{
            $_SESSION['emailRegistred']=true;
            header('Location:/register');
        }
        
    }
   
?>

