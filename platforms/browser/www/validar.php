<?php
session_start();

if ($_POST["email"] == ""){
    echo '<br> <div class="alert alert-warning" role="alert">* El email tiene que tener un valor</div>';
    exit;
}

if ($_POST["password"] == ""){
    echo '<div class="alert alert-warning" role="alert">* El password tiene que tener un valor</div>';
    exit;  
}

$user = $_POST["email"];
$pass = $_POST["password"];

//Incluyo la librería NUSOAP para poder usar las llamas al WS.
require_once('../lib/nusoap.php');

$client = new nusoap_client("http://itris.no-ip.com:3000/ItsWs/ItsCliSvrWS.asmx?WSDL",true);
//Me guardo en una variable el resultado de la conexión.
$sError = $client->getError();
//Ahora controlo el resultado de respuesta. Pregunto si el valor es igual a 1 (uno).
	if($sError){	
				echo "No se pudo realizar la operación [" . $sError . "]";
	}else{//Si entro acá es porque la conexión no presentó problemas.
        //Inicio sesión en el WebService llamando al método ItsLogin
		$login = $client->call('ItsLogin', array('DBName' => 'ITRIS', 'UserName' => $user, 'UserPwd' => $pass, 'LicType'=>'WS') );
    	//Me guardo el resultado de la llamada al método.
        $ItsLoginResult = $login['ItsLoginResult'];
        //Guardo el string que devuelve el método, lo voy a usar para todas las llamadas.
		$session = $login['UserSession'];

        //Pregunto si el resultado del llamado al método ItsLogin es distinto de (0) cero.  
		if($ItsLoginResult <> 0){
			$ItsGetLastError = $client->call('ItsGetLastError', array('UserSession' => $session ) );
			echo '<span class="label label-danger">'.utf8_encode($ItsGetLastError['Error']).'</span>';			
		}else{
             $_SESSION['IDSESSION']  = $session;
             $_SESSION['USER']  = $user;
             $_SESSION['PASS']  = $pass;
             
             echo '<script type="text/javascript">
                        window.location.replace("index.php");
                   </script>';

	//$ItsLogout = $client->call('ItsLogout', array('UserSession' => $session ) );
	//$ItsLogout['ItsLogoutResult'];
		}//Fin de preguntar por el login exitoso.
    }//Fin de preguntar por la conexión al WS
?>