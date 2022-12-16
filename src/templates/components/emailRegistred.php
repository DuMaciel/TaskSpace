<?php 
if(isset($_SESSION['emailRegistred'])){
    if($_SESSION['emailRegistred']){ 
        echo '<p class="warning">The email is already registered</p>';
        $_SESSION['emailRegistred']=false;
    }
}
?>