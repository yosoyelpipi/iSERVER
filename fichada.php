<?php
    header('content-type: application/json; charset=utf-8');
    header("access-control-allow-origin: *");

    function escribirLog($text){
        $file = fopen("fichadas.json", "a");
        fwrite($file, $text . PHP_EOL);
        fclose($file);
    };
    //Ejecutar el login
    function ejecutarAccionLogin($operacion,$itsuser,$itspass){
        if($operacion == "login"){
            include('login.php');
        }
    };
    //Realizar lógica de fichada.
    function ejecutarAccion($operacion,$itsuser,$itspass,$fecha,$horas,$lat,$lon,$deviceuuid,$host,$code,$remote_addr_wan){
        if($operacion == "true" || $operacion == "false" ){
            include('in-out.php');
        }
    };

    //Trabajo con los datos de red.
    if($_SERVER["HTTP_X_FORWARDED_FOR"]){ 
        $remote_addr_proxy = $_SERVER['REMOTE_ADDR']; 
        $forwarded_real = $_SERVER['HTTP_X_FORWARDED_FOR']; 
    }else{ 
        $remote_addr_wan = $_SERVER['REMOTE_ADDR'];
    }     

    //Obtengo el valor de las variables.
    $operacion = $_GET['operacion'];
    $itsuser = $_GET['itsuser'];
    $itspass = $_GET['itspass'];
    $fecha = $_GET['fecha'];
    $horas = $_GET['horas'];
    $lat = $_GET['lon'];
    $lon = $_GET['lon'];
    $deviceuuid = $_GET['deviceuuid'];
    $host = $_GET['host'];
    $code = $_GET['code'];

    switch ($operacion) {
        case "true":
            ejecutarAccion("true",$itsuser,$itspass,$fecha,$horas,$lat,$lon,$deviceuuid,$host,$code,$remote_addr_wan);
            break;
        case "false":
            ejecutarAccion("false",$itsuser,$itspass,$fecha,$horas,$lat,$lon,$deviceuuid,$host,$code,$remote_addr_wan);
            break;
        case "login":
            ejecutarAccionLogin("login",$itsuser,$itspass);
            break;
        default:
        echo '{"operacion":"default", "mensaje": "Operación no autorizada."}';
    }
?>