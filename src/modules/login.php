<?php
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        include realpath(__DIR__ . '/../database/Mysql.php');
        $db = new Mysql();

        if($db::testPass($email, $password)){
            $_SESSION['user'] = $email;
            $_SESSION['Logged'] = true;
        }else{
            $_SESSION['Logged'] = false;
        }
    }
?>
