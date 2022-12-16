<?php 
if(isset($_SESSION['userExist'])){
    if($_SESSION['userExist']){ 
        echo '<p class="userExist">The email is already registered</p>';
        $_SESSION['userExist']=false;
    }
}
?>