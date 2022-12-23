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
    <title>To Do List | Organize seu dia!</title>
</head>
<body>
    <header>
        <a href="/home">TaskSpace</a>
    </header>


    <div id='boardsMenu'>
        <ul id="navBoards">
            <li class="active">
            <input class="titleBoard" type="text" placeholder="New Board" maxlength="20" >
            </li>

        </ul>
        <button id="createBoard">+</button>
    </div>
    <div id="boards">
        <div class="board active">
            <div class="columns">
                <div class="column">
                    <input class="titleColumn" type="text" placeholder="New Column" maxlength="30">
                    <ul class="listTask">
                        <li id="1"class="task" draggable="true">
                            <p class="identificationTask">boardName#id</p>
                            <p class="titleTask">Task aqui</p>
                            <div class="tagsTask">
                                <span>tag1</span>
                                <span>tag2</span>
                                <span>tag3</span>
                            </div>
                        </li>
                    </ul>
                    <button class="createTask">+ Add Task</button>
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