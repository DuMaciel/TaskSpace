<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./public/styles/login.css">
    <title>Login ToDoList</title>
</head>
<body>
    <form action="./login" method="post">
        <fieldset>
            <legend>Login</legend>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required autofocus>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            <input type="submit" value="Submit" id="submit">
        </fieldset>
        <a href="./register">Create new user!</a>
    </form>
    
</body>
</html>


<!-- Modal de senha incorreta ou usuario inexistente -->
<!-- Redirecionar para pagina correta quando logar (header('Location:home.php')) -->
<!-- Fazer form de cadastro e redirecionar para ele -->