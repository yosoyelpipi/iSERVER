<?php
//Incluyo la librería NUSOAP para poder usar las llamas al WS.
require_once('lib/nusoap.php');

$client = new nusoap_client("http://itris.no-ip.com:3000/ItsWs/ItsCliSvrWS.asmx?WSDL",true);
        //Me guardo en una variable el resultado de la conexión.
        $sError = $client->getError();
    //Ahora controlo el resultado de respuesta. Pregunto si el valor es igual a 1 (uno).
	if($sError){
        echo '{"operacion":"login", "resultado":1, mensaje":"'.$sError.'"}';
	}else{//Si entro acá es porque la conexión no presentó problemas.
        //Inicio sesión en el WebService llamando al método ItsLogin
		$login = $client->call('ItsLogin', array('DBName' => 'ITRIS', 'UserName' => $itsuser, 'UserPwd' => $itspass, 'LicType'=>'WS') );
    	//Me guardo el resultado de la llamada al método.
        $ItsLoginResult = $login['ItsLoginResult'];
        //Guardo el string que devuelve el método, lo voy a usar para todas las llamadas.
		$session = $login['UserSession'];

        //Pregunto si el resultado del llamado al método ItsLogin es distinto de (0) cero.  
		if($ItsLoginResult <> 0){
			$ItsGetLastError = $client->call('ItsGetLastError', array('UserSession' => $session ) );
			//echo '<span class="label label-danger">'.utf8_encode($ItsGetLastError['Error']).'</span>';
            echo '{"operacion":"login", "resultado":1, "mensaje":"'.utf8_encode($ItsGetLastError['Error']).'"}';			
		}else{
	        $ItsLogout = $client->call('ItsLogout', array('UserSession' => $session ) );
            echo '{"operacion":"login", "resultado":0, "host":"itris.no-ip.com", "mensaje":"'.$session.'"}';
		}//Fin de preguntar por el login exitoso.
    }//Fin de preguntar por la conexión al WS.
?>