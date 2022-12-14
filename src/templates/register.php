<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./public/styles/register.css">
    <title>Registration ToDoList</title>
</head>
<body>
    <form  action="./register" method="post" id='registerForm'>
        <fieldset>
            <legend>Registration</legend>
            <label for="name">Name</label>
            <input type="name" id="name" name="name" required autofocus>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <label for="conf-password">Confirm password</label>
            <input type="password" id="confPassword" required>
            <input type="submit" value="Submit" id="submit">
        </fieldset>
        <a href="./login">I'm already a user</a>
    </form>
    
</body>

<script src="./public/scripts/register.js"></script>
</html>