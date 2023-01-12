<?php
if (!isset($_POST['email']) || !isset($_POST['password']) || !isset($_POST['name'])) {
    http_response_code(400);
    return;
}
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

include realpath(__DIR__ . '/../database/User.php');
$User = new User();

if ($User::userExist($email)) {
    $_SESSION['emailRegistred'] = true;
    header('Location:/register');
    return;
}
if ($User::userInsert($name, $email, $password)) {
    $_SESSION['successRegistering'] = true;
    header('Location:/login');
    return;
}
$_SESSION['errorRegistering'] = true;
header('Location:/register');
