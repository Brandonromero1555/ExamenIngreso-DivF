function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let temperatura;
	let obraSocial;
	let precio;
	let respuesta;
	let flag;
	let nombreMPmasJoven;
	let tempMPmasJoven;
	let contPasajeros;
	let valorViaje;
	let contMay;
	let valorViajeDesc;
	precio = 600;
	contOSDEMay=0;
	contPAMIMay = 0;
	contMay=0;
	flag=1;
	flagDesc=0;
	contPasajeros = 0;

	do {
		nombre = prompt("Nombre:");
		edad = parseInt(prompt("Edad:"));
		while(isNaN(edad)||edad<17){
			edad = parseInt(prompt("Error. Ingrese una edad válida:"));
		}
		temperatura = parseFloat(prompt("Temperatura:"));
		while(isNaN(temperatura)||temperatura<34||temperatura>40){
			temperatura=parseFloat(prompt("Error. Ingrese una temperatura válida:"));
		}	
		sexo = prompt("ingrese sexo: f/m")
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("error. ingrese sexo: f/m");
		}
		obraSocial = prompt("ingrese obra social: PAMI/OSDE/otras");
		while(obraSocial != "PAMI" || obraSocial != "OSDE" || obraSocial != "otras"){
			obraSocial = prompt("error. ingrese obra social: PAMI/OSDE/otras").toLowerCase();
		}
		

		if(edad > 60){
			if(obraSocial == "OSDE"){
				contOSDEMay++;
			}
			contMay++;
		}

		if(sexo == "f" && obraSocial == "PAMI"){

			nombreMPmasJoven = nombre;
			tempMPmasJoven = temperatura

		}

		if(edad > 60){
			if(obraSocial == "PAMI"){
				contPAMIMay++;
			}
			contMay++;
		}

		contPasajeros++;

         respuesta = prompt("otro pasajero?");
	}while (respuesta == "si");

	valorViaje = contPasajeros * precio;

	if(((contPAMIMay * 100) / contPasajeros) > 50){
		valorViajeDesc = parseFloat(valorViaje * 0.25);
		flagDesc = 1;
	}
	
	if(contViudoMay>0){
		console.log("a) La cantidad de mayores con OSDE: "+ contOSDEMay);
	}
		
	}
	if(!flag){
		console.log("b) El nombre de la mujer con PAMI mas joven es " + nombreMPmasJoven + " y su temperatura es " + tempMPmasJoven);
	 }
	console.log("c) El viaje en total sale: $" + valorViaje);

	if(flagDesc){
		console.log("d)El viaje en total con descuento sale: $" + valorViajeDesc.toFixed(2));

}
//b cambiar el nombre y temperatura de la mujer que tenga pami mas joven