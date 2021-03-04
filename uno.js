/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos
*/
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let categoria;
	let fabricante;
	let acumAlcohol = 0;
	let acumIac = 0;
	let acumQuat = 0;
	let contAlcohol = 0;
	let contIac = 0;
	let contQuat = 0;
	let promedioA;
	let promedioI;
	let promedioQ;
	let maxCategoria;
	let acumDes = 0;
	let acumBac = 0;
	let acumDet = 0;
	let contDes = 0;
	let contBac = 0;
	let contDet = 0;
	let detMComprado;
	let flagD = 0;
	let fabricanteMax;
	let categoriaMax;

	for (let i = 0; i < 5; i++) {
		tipo = prompt("ingrese tipo: ALCOHOL/IAC/QUAT").toLowerCase;
		while(isNaN(tipo) && tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT"){
			tipo = prompt("error al ingresar tipo, ingrese tipo: ALCOHOL/IAC/QUAT");
		}	

		precio = parseInt(prompt("ingrese precio (100 - 300)"));
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("error al ingresar precio, ingrese precio (100 - 300)"));

		}

		cantidad = parseInt(prompt("ingrese cantidad, maximo 1000U"));
		while(cantidad <= 0 && cantidad > 1000 && isNaN(cantidad)){
			cantidad = parseInt(prompt("error al ingresar cantidad, maximo 1000U"));
			
		}
		categoria = prompt("ingrese categoria: desinfectante/bactericida/detergente");
		while(isNaN(categoria) && categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente"){
			categoria = prompt("error al ingresar categoria, ingrese categoria: desinfectante/bactericida/detergente");
		}	

		fabricante = prompt("ingrese fabricante");

		switch(tipo){
			case "ALCOHOL":
				acumAlcohol += cantidad;
				contAlcohol++;
				promedioA = acumAlcohol / contAlcohol;

				break;
			case "IAC":
				acumIac += cantidad;
				contIac++;
				promedioI = acumIac / contAlcohol;
			
				break;
			case "QUAT":
				acumQuat += cantidad;
				contQuat++;
				promedioQ = acumQuat / contQuat;
				break;
		}
	}
	
	switch(categoria){
	
 
		case "desinfectante":  
		acumDes += categoria;
	    contDes++;
		   break; 
		case"bactericida":

	    acumBac += categoria;
		contBac++;
		   break;
         case "detergente":
	     acumDet += categoria;
		 contDet++;
		   break;
    }

	if(acumDes > acumBac && acumDes > acumDet){

		maxCategoria = "desinfectante";

	}else if(  acumBac > acumDes && acumBac > acumDet){
		
		maxCategoria = "bactericida";
		
	}else{

		maxCategoria = "detergente";
	}


	if( flagD == 0 || acumDet <= 200){

		detMComprado = acumDet;
		flagD = 1;
	}

	if(acumAlcohol > acumIac && acumAlcohol > acumQuat){

		categoriaMax = categoria;
		fabricanteMax = fabricante;

	}else if(  acumIac > acumAlcohol && acumIac > acumQuat){
		
		categoriaMax = categoria;
		fabricanteMax = fabricante;
		
	}else{

		categoriaMax = categoria;
		fabricanteMax = fabricante
	}

console.log("el promedio de cantidad por tipo de producto es: " + promedioA + ", " + promedioI + "," + promedioQ);

console.log("la categoria con mas cantidad de unidades es: " + maxCategoria);

console.log("las unidades de detergente son: " + detMComprado);

console.log("el fabricante y la categoria del producto mas caro son: " + fabricanteMax + ", " + categoriaMax);





}
