			<?php
			error_reporting(E_ERROR);
			$myport = $_GET["puerto"];
			
			if($myport == ""){
				$myport = '80';
			}else{
				$myport;
			}
			$Maquines="181.170.255.95";
			$errno = '';
			$errstr = '';
			$fs=fsockopen($Maquines,$myport,$errno,$errstr,5);
/*
$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);

echo json_encode($arr);
*/
					if (!$fs) 
							{
								echo json_encode(array("Resultado"=>1,"Mensaje"=>"El servido no se encuentra on line","Server"=>$Maquines,"Puerto"=>$myport, "Msg"=>$errstr, "MsgNo"=> $errno ));
							}else{
								echo json_encode(array("Resultado"=>0,"Mensaje"=>"El servido se encuentra on line","Server"=>$Maquines,"Puerto"=>$myport, "Msg"=>$errstr, "MsgNo"=> $errno ));						
							}	

			?>