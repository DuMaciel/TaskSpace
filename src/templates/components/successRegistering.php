<?php 
if(isset($_SESSION['successRegistering'])){
    if($_SESSION['successRegistering']){ 
        echo '<p class="warning success">Successful registration</p>';
        $_SESSION['successRegistering']=false;
    }
}
?>