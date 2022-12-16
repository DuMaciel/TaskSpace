<?php 
if(isset($_SESSION['errorLogin'])){
    if($_SESSION['errorLogin']){ 
        echo '<p class="warning">Incorrect username or password</p>';
        $_SESSION['errorLogin']=false;
    }
}
?>