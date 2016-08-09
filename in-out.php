<?php
//include('config.php');
//A partir de un No-Ip o DyDNS obtengo la dirección de IP.
    $ipdelhost = gethostbyname($_GET['host']);
//A partir del nombre de IP obtengo el nombre del proveedor de Internet.    
    $nombre_full_host = gethostbyaddr($remote_addr_wan);

//Ahora comparo el número de IP obtenido mediante el HOSTNAME con el IP WAN del la red Wi-Fi.
    if($ipdelhost == $remote_addr_wan){
       // echo $json = ('{"operacion": "'.$_GET['operacion'].'", "resultado":0, "fecha": "'.$_GET['fecha'].'", "horas": "'.$_GET['horas'].'","lat": "'.$_GET['lat'].'","lon": "'.$_GET['lon'].'","deviceuuid": "'.$_GET['deviceuuid'].'", "host": "'.$_GET['host'].'","code": "'.$_GET['code'].'", //"mensaje": "Exito", "serverdatos": "'.$remote_addr_wan.'", "nombre_full_host":"'.$nombre_full_host.'" }');
        $arrayRespuesta = array(
                                "operacion"=>$_GET['operacion'],
                                "resultado"=>0,
                                "fecha"=>$_GET['fecha'],
                                "horas"=>$_GET['horas'],
                                "lat"=>$_GET['lat'],
                                "lon"=>$_GET['lon'],
                                "deviceuuid"=>$_GET['deviceuuid'],
                                "host"=>$_GET['host'],
                                "code"=>$_GET['code'],
                                "mensaje"=>"Exito",
                                "serverdatos"=>$remote_addr_wan,
                                "nombre_full_host"=>$nombre_full_host
                                );
        echo $json = json_encode($arrayRespuesta);
        escribirLog($json);
        }else{
        echo '{"operacion": "'.$_GET['operacion'].'", "resultado":1, "mensaje": "Identificación no permitida. Tenés que estar dentro de la misma red Wi-Fi laboral."}';      
    }
?>