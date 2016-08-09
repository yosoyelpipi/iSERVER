<?php
    $hostname = gethostname();
    echo 'Hostname: '.$hostname.'<br>';
    $ip = gethostbyname($hostname);
    echo 'Hostbyname: '.$ip;

    echo 'Ahora me puedo llegar a morir<br>';
    echo 'Ahora voy a pedir la ip de itris.no-ip.com:-> '.gethostbyname('itris.no-ip.com');
    echo '<br>';
    $nombre_host = gethostbyaddr($_SERVER['REMOTE_ADDR']);
    echo 'gethostbyaddr: '.$nombre_host;

    echo '<br>';
    $result = dns_get_record("itris.no-ip.com");
    print_r($result);
    echo '<br><br>.........';
    $salida = shell_exec('sudo iwlist Telecentro-c850 scan');
    echo "<pre>$salida</pre>";
    echo '<br><br>.........';
    $re = exec('sudo iwlist Telecentro-c850 scan');
    echo "<pre>$re</pre>";
?>