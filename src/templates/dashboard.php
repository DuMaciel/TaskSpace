<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="/public/styles/normalize.css">
    <link rel="stylesheet" href="/public/styles/dashboard.css">
    <title>Your TaskSpace</title>

</head>
<body>
    <header>
        <a href="/home">TaskSpace</a>
    </header>


    <div id='boardsMenu'>
        <ul id="navBoards">
            
        </ul>
        <button id="createBoard">+</button>
    </div>
    <div id="boards">
       
    </div>

    <div id="taskModal">
        <input type="text" class="title" placeholder="Enter to task title here">
        <textarea class="description" placeholder="Enter task description here..."></textarea>
        <div class="actions">
            <button class="cancel">Cancel</button>
            <button class="confirm">Confirm</button>
        </div>
    </div>
</body>


<script src="/public/scripts/dashboard.js"></script>
</html>