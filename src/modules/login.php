<?php
if (!isset($_POST['email']) || !isset($_POST['password'])) {
    http_response_code(400);
    return;
}
$email = $_POST['email'];
$password = $_POST['password'];

include realpath(__DIR__ . '/../database/User.php');
$User = new User();

if ($User::userPassTest($email, $password)) {
    $_SESSION['email'] = $email;
    $_SESSION['user'] = $User::userId($email);
    $_SESSION['Logged'] = true;
    header('Location:/dashboard');
    return;
}
$_SESSION['errorLogin'] = true;
header('Location:/login');
