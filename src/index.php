
<?php
session_start();
if (!isset($_SESSION['Logged'])) {
    $_SESSION['Logged'] = false;
}

$method = $_SERVER['REQUEST_METHOD'];
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch ($method) {
    case 'GET':
        switch ($url) {
            case '/':
            case '/home':
                include realpath(__DIR__ . '/templates/home.php');
                break;
            case '/login':
                include realpath(__DIR__ . '/templates/login.php');
                break;
            case '/register':
                include realpath(__DIR__ . '/templates/register.php');
                break;
            case '/dashboard':
                include realpath(__DIR__ . '/templates/dashboard.php');
                break;
            default:
                http_response_code(404);
                include realpath(__DIR__ . '/templates/error.php');
        }
        break;

    case 'POST':
        switch ($url) {
            case '/login':
                include realpath(__DIR__ . '/modules/login.php');
                break;
            case '/register':
                include realpath(__DIR__ . '/modules/register.php');
                break;
            case '/dashboard':
                include realpath(__DIR__ . '/modules/dashboard.php');
                break;
            default:
                http_response_code(404);
                include realpath(__DIR__ . '/templates/error.php');
        }
        break;

    default:
        http_response_code(404);
        include realpath(__DIR__ . '/templates/error.php');
}

?>
