/*Setear la fecha para la cuenta
regresiva.*/

var fechaCuentaReg = new Date("Aug 1, 2019 00:00:00").getTime();
/*Actualizar la cuenta regresiva cada
segundo.*/

var x = setInterval(function()
	{
	 /*Capturar la fecha y hora de hoy*/
     
     var ahora = new Date().getTime();
     /*Encontrar la distancia entre ahora y
     la fecha limite de nuestra cuenta regresiva.*/
     
     var distancia  = fechaCuentaReg - ahora;
     /*Calculo de tiempo para dias, horas, minutos 
     y segundos.*/
     
     var dias = Math.floor(distancia / (1000*60*60*24));
     
     var horas = Math.floor((distancia % (1000*60*60*24)) / (1000*60*60));

     var minutos = Math.floor((distancia % (1000*60*60)) / (1000*60));

     var segundos = Math.floor((distancia % (1000*60)) / (1000);

     /*Mostrar el resultado en un elemento con la
     Id="demo".*/

     document.getElementsById("demo").InnerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

     /*Si la cuenta regresiva termino escribimos 
     algun texto.*/

     if (distancia < 0)
     {
      clearInterval (x);

      document.getElementById("demo").InnerHTML = "Expirado";
     },1000); }   

	}