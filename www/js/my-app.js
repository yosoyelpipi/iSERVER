// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    window.addEventListener("batterystatus", onBatteryStatus, false);
    document.addEventListener("online", onLine, false);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
    document.addEventListener("backbutton", onBackKeyDown, false);

    //myApp.alert("Device is ready!", 'Tester');
    var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
    'Device Cordova: '  + device.cordova  + '<br />' +
    'Device Platform: ' + device.platform + '<br />' +
    'Device UUID: '     + device.uuid     + '<br />' +
    'Device Version: '  + device.version  + '<br />';
     var controlTime;
     var controlTimeLogin;



addEstado(1);
leeDatos();
});



// Play audio
//
function playAudio(url) {
    var url;
    src = '/android_asset/www/sound/' + url;
//playAudio('/android_asset/www/sound/salir.wav');
    // Play the audio file at url
    var my_media = new Media(url,
        
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err.code);
        }
    );
    // Play audio
    my_media.play();
}

     
  // Do something here when page loaded and initialized
var monthNames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]; 
var dayNames= ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year   
$$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	$$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
setInterval( function() {
	// Create a newDate() object and extract the minutes of the current time on the visitor's
	var minutes = new Date().getMinutes();
	// Add a leading zero to the minutes value
	$$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
	
setInterval( function() {
	// Create a newDate() object and extract the hours of the current time on the visitor's
	var hours = new Date().getHours();
	// Add a leading zero to the hours value
	$$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);  








function onLine(){
    myApp.Alert('Ahora si tenés conexión');
}

function leeDatos(){
    /*myApp.addNotification({
        title: 'Framework7',
        message: 'This is a simple notification message with title and message'
    });*/


function PlaySound(option){ 
    var option;
    if(option==1){
        $$('#audiotemp').html('<audio id="demo" src="sound/procesandohuella.wav"></audio>');
        document.getElementById('demo').play();
    }
    if(option==2){
        $$('#audiotemp').html('<audio id="demo" src="sound/identyexito.wav"></audio>');
        document.getElementById('demo').play();
    }
    if(option==3){
        $$('#audiotemp').html('<audio id="demo" src="sound/disposinconexion.wav"></audio>');
        document.getElementById('demo').play();
    }
    if(option==4){
        $$('#audiotemp').html('<audio id="demo" src="sound/salir.wav"></audio>');
        document.getElementById('demo').play();
    }
    if(option==5){
        $$('#audiotemp').html('<audio id="demo" src="sound/abortandoOperacion.wav"></audio>');
        document.getElementById('demo').play();
    }
    if(option==6){
        $$('#audiotemp').html('<audio id="demo" src="sound/intentedenuevo.wav"></audio>');
        document.getElementById('demo').play();
    }
    if(option==7){
        $$('#audiotemp').html('<audio id="demo" src="sound/error.wav"></audio>');
        document.getElementById('demo').play();
    }
    if(option==8){
        $$('#audiotemp').html('<audio id="demo" src="sound/enlazandoconitris.wav"></audio>');
        document.getElementById('demo').play();
    }               
    if(option==9){
        $$('#audiotemp').html('<audio id="demo" src="ound/conectado.wav"></audio>');
        document.getElementById('demo').play();
    }
};





























var lat = window.localStorage.getItem('lat');
var lon = window.localStorage.getItem('lon');
var itsrecuerda = window.localStorage.getItem('itsrecuerda');
//alert(itsrecuerda);

    var name = window.localStorage.getItem('nombre');
    var password = window.localStorage.getItem('password');
    var base = window.localStorage.getItem('base');
    var ws = window.localStorage.getItem('ws');
    var host = window.localStorage.getItem('host');
    var code = window.localStorage.getItem('code');
    var itsuser = window.localStorage.getItem('itsuser');
    var itspass = window.localStorage.getItem('itspass');    

if(itsuser == null || itspass == null){
            myApp.addNotification({
                    title: 'Notificación',
                    subtitle: 'Modo incógnico',
                    message: 'Aún no te logueas a itris o no permitiste que el reloj inteligente recuerde tus datos.',
                    media: '<i class="icon icon-form-comment"></i>'
                });
}

    if(name != ''){
        $$('#nombre').val(name);
    }
    if(password != ''){
        $$('#password').val(password);
    }
    if(base != ''){
        $$('#base').val(base);
    }
    if(ws != ''){
        $$('#ws').val(ws);
    }    
    if(host != ''){
        $$('#host').val(host);
    }
    if(code != ''){
        $$('#code').val(code);
    }
    if(itsuser != ''){
        $$('#itsuser').val(itsuser);
    }
    if(itspass != ''){
        $$('#itspass').val(itspass);
    }
    if(itsrecuerda != ''){
        $$('#itsrecuerda').val(itsrecuerda);
    }              
    geoLocaliza();       
}


var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //hoy es 0!
var yyyy = hoy.getFullYear();

var hora = hoy.getHours();
var minuto = hoy.getMinutes();
var segundo = hoy.getSeconds(); 



// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
//myApp.onPageInit('.statusbar-overlay', function (page) {
    // Do something here for "about" page
    $$('#testNow').on('click', function () {
        var port = $$("#puerto").val();
        //myApp.alert(port,'Tester');
        $("#log").html('<div align="center" class="col-25">Conectando...<br><span style="width:42px; height:42px" class="preloader"></span></div>');		
        $$.getJSON("http://leocondori.com.ar/app/iserver/testconexion.php", {puerto: port}, ItsTestResul, "json");

        function ItsTestResul(Response){
            $("#log").html('');
            if (Response.Resultado == 0){
                myApp.alert(Response.Mensaje + ' con el puerto ' + Response.Puerto,'Tester');
                $("#log").append(Response.Mensaje + ' con el puerto '+ Response.Puerto + ' <br>');
            }else{
                myApp.alert(Response.Msg + ' número de error ' + Response.MsgNo, 'Tester');
                $("#log").append(Response.Mensaje + ' con el puerto '+ Response.Puerto + ' <br>');
            }
        }
        
    });



//ITRIS LOGIN
    $$('#itslogin').on('click', function () {
                        $('#loginAct').html('<div class="col-25"> ' +
                          'Enlazando reloj con itris.<br>' +
                          '<span style="width:42px; height:42px" class="preloader"></span>' +
                          '</div>');        

var segu = 0;

controlTimeLogin = setInterval(function(){ myTimerLogin() }, 1000);

function myTimerLogin() {
segu++
	if (segu == 10){
            //PlaySound(8);
            playAudio('enlazandoconitris.wav');
        }else if(segu == 15){
            //Se ha excedido el tiempo de espera, abortando operación.
                        $('#loginAct').html('<div class="col-25"> ' +
                          'Se ha excedido el tiempo de espera, abortando operación.<br>' +
                          '<span style="width:42px; height:42px" class="preloader"></span>' +
                          '</div>'); 

            //PlaySound(5);
            playAudio('abortandoOperacion.wav');
        }else if(segu == 20){
            $('#loginAct').html('');
            clearInterval(controlTimeLogin);
            //Intente de nuevo
            //PlaySound(6);
            playAudio('intentedenuevo.wav');
        }
};

        var itsuser = window.localStorage.getItem('itsuser');
        var itspass = window.localStorage.getItem('itspass');
        
        if(itsuser == null || itspass == null){
                myApp.alert('Revisa los ajustes de usuario y contraseña. No se puede continuar', ['Chronos dice: ']);
                //PlaySound(7);
                playAudio('error.wav');
            }else{
                //myApp.alert('Me voy a loguear con estos datos. Usuario: '+ itsuser + ' y con esta pass ' + itspass + '', ['Chronos dice: ']);
                //PlaySound(8);
                playAudio('enlazandoconitris.wav');
                $$.getJSON("http://chronos.itris.com.ar/fichada.php", {operacion: "login", itsuser: itsuser, itspass: itspass}, RelojResultLogin, "json");
        }

    });        


function RelojResultLogin(Response){
    clearInterval(controlTimeLogin);
    $$('#loginAct').html('');
    if(Response.resultado == 0){
        //PlaySound(9);
        playAudio('conectado.wav');
        myApp.alert(Response.mensaje, ['Chronos dice: ']);
        $$('#host').val('');
        window.localStorage.setItem('host',Response.host);
        window.localStorage.setItem('enlazado',1);
    }else{
        //PlaySound(7);
        playAudio('error.wav');
        myApp.alert(Response.mensaje, ['Chronos dice: ']);
    }
}

$$('#temporal').on('click', function () {
    
    playAudio('/android_asset/www/sound/salir.wav');
    
    //NO ANDA playAudio('www/sound/error.wav');
    playAudio('http://chronos.itris.com.ar/error.wav');
});

    $$('#entrada').on('click', function () {
        playAudio('error.wav');
        var itsuser = window.localStorage.getItem('itsuser');
        var itspass = window.localStorage.getItem('itspass');
        var enlazado = window.localStorage.getItem('enlazado');
       
        if(itsuser == null || itspass == null || enlazado == null){
            //PlaySound(7);
            playAudio('error.wav');
            myApp.alert('Existió un error. El usuario o password de itris no tienen valor o aún no has enlazado chronos con itris. Debés iniciar sesión al menos una vez.',['Chronos dice: ']); 
        }else{  
        $$('#huella').hide();
        //PlaySound(1);
        playAudio('procesandohuella.wav');
        $$('#ingreso').html('<div class="col-25"> ' +
                           'Procesando huella...<br>' +
                           '<span style="width:42px; height:42px" class="preloader"></span>' +
                           '</div>');
        var seg = 0;
        controlTime = setInterval(function(){ myTimer() }, 1000);
        function myTimer() {
        seg++
            if (seg == 3){
                 playAudio('www/sound/procesandohuella.wav');
                    //PlaySound(1);
                    playAudio('procesandohuella.wav');
                }else if(seg == 5){
                                $$('#ingreso').html('<div class="col-25"> ' +
                                'Se ha excedido el tiempo de espera, abortando operación.<br>' +
                                '<span style="width:42px; height:42px" class="preloader"></span>' +
                                '</div>');
                    //PlaySound(5);
                    playAudio('abortandoOperacion.wav');
                }else if(seg == 10){
                    $$('#ingreso').html('');
                    //PlaySound(6);
                    playAudio('intentedenuevo.wav');
                    $$('#huella').show(); 
                }
        };

        var fecha = dd+'/'+mm+'/'+yyyy;
        var horas = hora+':'+minuto+':'+segundo;
        //myApp.alert('Vas a fichar con la siguiente información. Fecha de entrada: ' + fecha + ' y con la siguiente hora de entrada: ' + horas + '', ['Reloj inteligente']);
        //$('#huella').html('<a href="#" id="entrada"><img src="img/huellalector3.gif" width="50%"></a>');
        window.localStorage.setItem('estado', true);
        // alert(fecha);
        var accion = addEstado(2);
        var lat = window.localStorage.getItem('lat');
        var lon = window.localStorage.getItem('lon');
        var host = window.localStorage.getItem('host');
        var code = window.localStorage.getItem('code');

        //accion: accion, fecha: fecha, horas: horas, lat: lat, lon: lon, deviceuuid: device.uuid
        $$.getJSON("http://chronos.itris.com.ar/fichada.php", {operacion: accion, fecha: fecha, horas: horas, lat: lat, lon: lon, deviceuuid: device.uuid, host:host, code: code }, RelojResult, "json");           
        //ANDA$$.getJSON("http://leocondori.com.ar/app/iserver/fichada.php", {operacion: accion, fecha: fecha}, RelojResult, "json");             
        }   
 });


    //Resultado del reloj
    function RelojResult(Response){
        clearInterval(controlTime);
        $('#huella').show();
        addEstado();
        $('#ingreso').html('');
        if(Response.resultado == 0){
            playAudio('identyexito.wav');
            //PlaySound(2);
            //myApp.alert(Response.nombre_full_host);
        }else{
            //PlaySound(7);
            playAudio('error.wav');
            myApp.alert(Response.mensaje, ['Chronos dice: ']);
        }
              
        //myApp.alert(Response.serverdatos, ['Chronos dice: ']);
        /* alert(Response.fecha);
        alert(Response.horas);
        alert(Response.lat);
        alert(Response.lon);
        alert(Response.deviceuuid);
        alert(Response.host);
        alert(Response.code);
        */
             
    }


//Función que actualiza el formulario.
  function onChangeNddame(x,name){
      var x;
      var name;
      //Controlo si tiene valor el campo al cambiar.
      if(x != ""){
          window.localStorage.setItem(name,x);
          $('#'+name).val(x);
      }else{
          localStorage.removeItem(name);
      }
  }

$$("input[type='text']").on('change', function (e) { 
  //console.log('input value changed'); 
  //myApp.alert('valor ingresado '+ $$( this ).val() );
  //myApp.alert('De este ID '+ this.id);
  if($$( this ).val() != ""){
        window.localStorage.setItem(this.id,$$( this ).val());
        $('#'+this.id).val($$( this ).val());
  }else{
        localStorage.removeItem(this.id);
  }

});

$$("input[type='password']").on('change', function (e) { 
  if($$( this ).val() != ""){
        window.localStorage.setItem(this.id,$$( this ).val());
        $('#'+this.id).val($$( this ).val());
  }else{
        localStorage.removeItem(this.id);
  }
});

//})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
    

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.alert('Here comes About page');
        //myApp.alert('about');
    }

    if (page.name === 'index') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.alert('Here comes About page');
        //myApp.alert('index');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
    leeDatos();
})

function onBatteryStatus(info) {
    // Handle the online event
    console.log("Level: " + info.level + " isPlugged: " + info.isPlugged); 
}

function onMenuKeyDown() {
    // Handle the back button
    //myApp.alert('Hola',['Reloj dice: ']);
    alert('Menu button');
}

function onOffline() {
    // Handle the offline event
    myApp.addNotification({
        title: 'Error de redes',
        subtitle: 'Estado de conexión',
        message: '¡Tu dispositivo se quedo sin conexión!',
        media: '<i class="icon icon-form-comment"></i>'
    });
    //PlaySound(3);
    playAudio('disposinconexion.wav');
    
}

function onConfirm(buttonIndex) {
    if(buttonIndex==1){
        navigator.app.exitApp();
    }
}


function onBackKeyDown() {
    // Handle the back button
     //myApp.alert('Estás seguro que querés salir de la APP?', ['Salir']);
    //PlaySound(4);
    playAudio('salir.wav');
    navigator.notification.confirm(
    'Saliendo del reloj. ¿Confirma?', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Reloj inteligente',           // title
    ['Salir','Cancelar']     // buttonLabels
);



}

var onSuccess = function(position) {
	
	//return position.coords.latitude+ ','+position.coords.longitude;
	window.localStorage.setItem("lat",position.coords.latitude);
	window.localStorage.setItem("lon",position.coords.longitude);
    console.log('Latitude: '          + position.coords.latitude          + '\n' +
                'Longitude: '         + position.coords.longitude         + '\n' );
		  
          //'Altitude: '          + position.coords.altitude          + '\n' +
          //'Accuracy: '          + position.coords.accuracy          + '\n' +
          //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          //'Heading: '           + position.coords.heading           + '\n' +
          //'Speed: '             + position.coords.speed             + '\n' +

    //Google Maps
    
   /* var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var mapOptions = {zoom: 4,center: myLatlng}
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({position: myLatlng,map: map});
    */
    
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            center: latLong,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
              position: latLong,
              map: map,
              title: 'my location'
          });



};
function onError(error) {
    myApp.alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');

   console.log('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');       

}

function geoLocaliza(){
  navigator.geolocation.getCurrentPosition(onSuccess, onError,{ timeout: 30000 });
  //navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
}

function addEstado(analizar){
    var analizar;
    var estado = window.localStorage.getItem('reloj');
    if(analizar == 1){
        if(estado == 'true'){
            window.localStorage.setItem('reloj','true');
            $('#iconos').html('(IN)');
        }else if(estado=='false'){
            window.localStorage.setItem('reloj','flase');
            $('#iconos').html('(OUT)');
        }else{
            window.localStorage.setItem('reloj','true');
            $('#iconos').html('(IN)');
        }
    }else if(analizar==2){
        if(estado == 'true'){
            return true;
        }else if(estado == 'false'){
            return false;
        }else{
            return true;
        }

    }else{
            if(estado == 'true'){
                window.localStorage.setItem('reloj','false');
                $('#iconos').html('(OUT)');
            }else if(estado=='false'){
                window.localStorage.setItem('reloj','true');
                $('#iconos').html('(IN)');
            }else{
                window.localStorage.setItem('reloj','true');
                $('#iconos').html('(IN)');
            }
        }
}