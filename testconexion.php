<?php
header("Content-Security-Policy: default-src 'self'");

header("Access-Control-Allow-Origin: *");
date_default_timezone_set("America/Argentina/Buenos_Aires");
$ItsGetDate = date("Y/m/d H:i:s");

function GrabarArchivo($name, $content){
							$fp = fopen($name.".log", "a");
							fwrite($fp, $content. PHP_EOL);
							fclose($fp);	
						}

			error_reporting(E_ERROR);
			$myport = $_GET["puerto"];
			GrabarArchivo($myport,'puertosingresados');
			
			if($myport == ""){
				$myport = '80';
			}else{
				$myport;
			}
			$Maquines="iserver.itris.com.ar";
			$errno = '';
			$errstr = '';
			$fs=fsockopen($Maquines,$myport,$errno,$errstr,5);
/*
$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);

echo json_encode($arr);
*/
					if (!$fs) 
							{
								echo json_encode(array("Resultado"=>1,"Mensaje"=>"El servidor no se encuentra on line","Server"=>$Maquines,"Puerto"=>$myport, "Msg"=>$errstr, "MsgNo"=> $errno ));
							}else{
								echo json_encode(array("Resultado"=>0,"Mensaje"=>"El servidor se encuentra on line","Server"=>$Maquines,"Puerto"=>$myport, "Msg"=>$errstr, "MsgNo"=> $errno ));						
							}	

?>