
<?php

$method = $_SERVER['REQUEST_METHOD'];
$url = $_SERVER['REQUEST_URI'];

switch ($method){
    case 'GET':
        switch ($url) {
            case '/login':
                include realpath(__DIR__ . '/templates/login.php');
                break;
            case '/register':
                include realpath(__DIR__ . '/templates/register.php');
                break;
            default:
                http_response_code(404);
                echo '<h1>Error</h1>';
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
            default:
                http_response_code(404);
                echo '<h1>Error</h1>';
        }
        break;
}

?>