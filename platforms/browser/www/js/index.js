function testNow(){
    myApp.alert('El servidor iSERVER está caído.');
    //$("#estado").show();
    var port = $("#puerto").val();
    $("#log").html('<div align="center" class="col-25">Conectando...<br><span style="width:42px; height:42px" class="preloader"></span></div>');		
    $.getJSON("http://leocondori.com.ar/app/iserver/testconexion.php", {puerto: port}, ItsTestResul, "json");
}

function ItsTestResul(Response){
    $("#log").html('');
    if (Response.Resultado == 0){
        myApp.alert(Response.Mensaje + ' con el puerto ' + Response.Puerto);
        $("#log").append(Response.Mensaje + ' con el puerto '+ Response.Puerto + ' <br>');
    }else{
        myApp.alert(Response.Msg + ' número de error ' + Response.MsgNo);
        $("#log").append(Response.Mensaje + ' con el puerto '+ Response.Puerto + ' <br>');
    }
}