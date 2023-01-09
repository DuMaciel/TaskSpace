<?php
if (!isset($_SESSION['Logged']) || !$_SESSION['Logged']) {
    http_response_code(401);
    return;
}
if (!isset($_GET['board']) || !$_GET['search']) {
    http_response_code(400);
    return;
}
$boardId = $_GET['board'];
$search = $_GET['search'];

include realpath(__DIR__ . '/../database/Mysql.php');
$db = new Mysql();

if ($search == 'true' && $boardId == 'all') {
    header('Content-Type: application/json');
    echo json_encode($db::boardSelectAll($_SESSION['user']));
    return;
}
if ($boardId == 'all' || !is_numeric($boardId)) {
    http_response_code(400);
    return;
}
if ($search == 'true') {
    header('Content-Type: application/json');
    echo $db::boardSelect($_SESSION['user'], $boardId);
    return;
}
$board = file_get_contents("php://input");
$board = json_encode(json_decode($board));

$db::boardInsert($_SESSION['user'], $boardId, $board);
