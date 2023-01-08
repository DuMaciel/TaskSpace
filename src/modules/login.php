<?php
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        
        include realpath(__DIR__ . '/../database/Mysql.php');
        $db = new Mysql();

        if($db::userPassTest($email, $password)){
            $_SESSION['user'] = $email;
            $_SESSION['Logged'] = true;
            header('Location:/dashboard');
        }else{
            $_SESSION['Logged'] = false;
            $_SESSION['errorLogin']=true;
            header('Location:/login');
        }
    }
?>
