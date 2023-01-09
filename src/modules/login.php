<?php
if (!isset($_POST['email']) || !isset($_POST['password'])) {
    http_response_code(400);
    return;
}
$email = $_POST['email'];
$password = $_POST['password'];

include realpath(__DIR__ . '/../database/Mysql.php');
$db = new Mysql();

if ($db::userPassTest($email, $password)) {
    $_SESSION['user'] = $email;
    $_SESSION['Logged'] = true;
    header('Location:/dashboard');
    return;
}
$_SESSION['errorLogin'] = true;
header('Location:/login');
