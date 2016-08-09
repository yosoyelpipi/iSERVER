<?php
    $link=mysqli_connect("localhost", "maxiroa_admin", "itris4583","maxiroa_reloj");

    if($link){
        $MsgMySql = 'Conectado al servidor MySql.';
    }else{
        $MsgMySql = mysqli_connect_error();
    }
?>