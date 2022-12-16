<?php 
if(isset($_SESSION['errorRegistering'])){
    if($_SESSION['errorRegistering']){ 
        echo '<p class="warning">A registration error occurred, please try again</p>';
        $_SESSION['errorRegistering']=false;
    }
}
?>