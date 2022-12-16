<?php 
if(isset($_SESSION['Incorrect'])){
    if($_SESSION['Incorrect']){ 
        echo '<p class="incorrect">Incorrect username or password</p>';
        $_SESSION['Incorrect']=false;
    }
}
?>