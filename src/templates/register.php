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
    <link rel="stylesheet" href="./public/styles/register.css">
    <title>Registration ToDoList</title>
</head>

<body>
    <header>
        <a href="./home">TaskSpace</a>
    </header>

    <main class="register">
        <form action="./register" method="post" id="registerForm">
            <p class="title">Hello!</p>
            <p class="caption">Welcome To TaskSpace<br>sign up to get started.</p>
            <?php
            include realpath(__DIR__ .'./components/emailRegistred.php');
            include realpath(__DIR__ .'./components/errorRegistering.php');
            include realpath(__DIR__ .'./components/successRegistering.php');
            ?>
            <label class="hidden" for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required autofocus>
            <label class="hidden" for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <label class="hidden" for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
            <label class="hidden" for="conf-password">Confirm password</label>
            <input type="password" id="confPassword" placeholder="Confirm your password" required>
            <input class="button" type="submit" value="SIGN UP" id="SingUp">
            <p class="reminder">Already have an account? <a class="link" href="./login">Log In</a></p>
        </form>
    </main>

    <footer>
        <p>TaskSpace®</p>
    </footer>
</body>

<script src="./public/scripts/register.js"></script>

</html>
