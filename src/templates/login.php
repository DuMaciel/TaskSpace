<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="./public/styles/normalize.css">
    <link rel="stylesheet" href="./public/styles/login.css">
    <title>Login ToDoList</title>
</head>
<body>
    <header>
        <a href="">TaskSpace</a>
    </header>
    <section class="login">
    <form action="./login" method="post">
            <p class="title">Hello Again!</p>
            <p class="caption">Welcome To Your<br>TaskSpace</p>
            <label class="hidden" for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required autofocus>
            <label class="hidden" for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
            <input class="button" type="submit" value="LOG IN" id="logIn">
            <span class="reminder">Not a member? <a class="link" href="./register">Register Now</a></span>
            
    </form>
    </section>

    <footer>
        <p>TaskSpace®</p>
    </footer>
</body>
</html>

<?php ?>