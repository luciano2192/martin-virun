
function mostrar()
{   
	let nombre ;
	let edad;
	let sexo;
	let puesto;
	// aca el sueldo lo inicializaria en 0, revise y hace que el navegador reconozca la variable como number, sin el 0 la toma como string
	// aparte no funciona bien el calculo del promedio, mas abajo lo explico
	let sueldo;
	let seguir ;
	// cuando la variable tiene mas de una palabra, se usa como "regla" camel case
	// osea que te quedaria acumsueldoprom = acumSueldoProm por ejemplo
	// se lee mejor, igual le pondria acumSueldoProg
	let acumsueldoprom =0;
	let contsueldoprom = 0;
	let acumsueldoanalista =0;
	let contsueldoanalista=0;
	let acumsueldoqa =0;
	let contsueldoqa=0;
	// en javascript podes usar true o false (booleanos)
	// supongo que pusieron 1 o 0 porque despues en C usan eso
	let flagmayorsueldo =1;
	let sexomayorsueldo;
	let mayorsueldo;
	let flagmayorsueldof =1;
	let nombremayorsueldof;
	let mayorsueldof;
	let contadornbmargen=0;
	let promprog =0;
	
	let promanalista=0;
	let promqa =0;
	
	
	do {
		nombre = prompt("ingrese nombre");

		edad =parseInt(prompt("ingrese edad"));
		// aca falta validar en la edad que, si va a trabajar, debe ser tener entre 18 y 100 si queres
		// osea que el while se leeria:
		// mientras la edad no sea un numero O la edad sea menor a 18 O la edad sea mayor a 100, sigo pidiendo que ingrese la edad
		while( isNaN(edad) ){ 
			edad =parseInt(prompt("error ,ingrese edad"));
		}

		// aca falta validar que el sexo que te ingresen, sea "f", "m" o "nb"
		// lo mismo, con while, si el sexo es !== de "f" Y de "m" Y de "nb" pedis que ingrese de nuevo
		// (cuando pedis que ingrese de nuevo, aclara que es un error y que tiene que volver a ingresar)
		sexo = prompt("ingrese sexo como . f /m/nb").toLowerCase();
		
		// aca falta validar lo que te ingresen como puesto
		// si el puesto !== de "programador" Y de "analista" Y "qa" pedis que ingresen de nuevo
		puesto= prompt("ingrese puesto como :programador - analista - qa ").toLowerCase();
	
		sueldo=prompt("ingrese sueldo entre 15000 a 70000");
		// en la validacion usaste sueldo < 17000 y el minimo es 15000
		// aparte te deja ingresar cualquier numero y te lo toma
		// yo lo haria asi el while: while ( isNaN(sueldo) || sueldo > 70000 || sueldo < 15000 )
		while ( isNaN(sueldo|| sueldo > 70000 || sueldo < 17000) ) {
			sueldo=prompt(" error, ingrese sueldo entre 15000 a 70000");
		}
		
		// aca tambien podes validar que te ingresen "si" o "no" solamente
		seguir =prompt("desea ingresar otro trabajador ? si/no");
	 	
		// puede que rompan los huevos si no esta bien indentado o "acomodado" el codigo
		// cosas que por ahi suman, ayuda a leer bien el codigo
		Number.parseInt(sueldo);
			if ( puesto=="programador"){
				// aca deberias "parsear" la variable sueldo y en el resto del codigo tambien, con la funcion:
				// Number.parseFloat(sueldo) con decimal
				// Number.parseInt(sueldo) sin decimal
				// osea convertirla de string o texto a numero
				acumsueldoprom += sueldo;
				contsueldoprom++;
			}else if  ( puesto=="analista"){
				acumsueldoanalista += sueldo;
				contsueldoanalista++;}
				else {
					acumsueldoqa += sueldo;
				contsueldoqa++;
				}
				
		// quedaria asi ----->
		/*
		if ( puesto === "programador" ) {
			acumsueldoprom += sueldo;
			contsueldoprom++;
		} else if ( puesto=="analista" ) {
			acumsueldoanalista += sueldo;
			contsueldoanalista++;
		} else {
			acumsueldoqa += sueldo;
			contsueldoqa++;
		}
		*/
	
	
		if (flagmayorsueldo || mayorsueldo < sueldo){
			mayorsueldo = sueldo;
			sexomayorsueldo = sexo;
			// aca le pifiaste al nombre de la variable y te falto el ; al final
			flagmayotsueldo =0
		}if (sexo =="f"){
		if (flagmayorsueldof|| mayorsueldo < sueldo){
			mayorsueldof = sueldo;
			nombremayorsueldof= nombre;
			flagmayorsueldof =0}}
		
	
		// aca usuaria los 3 iguales === y sueldo >= 20000 && sueldo <= 55000
		if ( puesto =="programador" && sexo =="nb" && sueldo > 20000 && sueldo< 55000){
		contadornbmargen++}
		
		
	// te conviene siempre usar los tres iguales (===) porque tambien valida el tipo de dato
	// "2" === 2 --> esto devuelve false
	// "2" == 2 --> esto devuelve true
	} while( seguir == "si" );
	
	
	if(contsueldoprom!=0){
	promprog = acumsueldoprom / contsueldoprom ;}
	if(contsueldoqa !=0){
	promqa = acumsueldoqa / contsueldoqa; }
	if (contsueldoanalista !=0){
	promanalista = acumsueldoanalista / contsueldoanalista ;}
	
	// aca falta avisar si se puede calcular el promedio o no de algun puesto
	// yo lo haria asi:
	/*
	if( contsueldoprom === 0 ) {
		// podes poner el texto que quieras obvio
		console.log( "Para el puesto de programador no se puede calcular el promedio ya que se ingresaron: " + contsueldoprom );
	} else {
		console.log( "Promedio puesto programador: " + promprog );
	}
	*/

	console.log("promedios por puesto : programador "+ promprog + " analista " + promanalista + " qa " + promqa );
	console.log ("el sexo del mejor sueldo : " + sexomayorsueldo);
	if (flagmayorsueldof){
	console.log("no se registro empleado femenino ");
	}else {console.log("el empleado femenino con mayor sueldo es " + nombremayorsueldof)}
	if (contadornbmargen !=0 ){
		console.log("la cantidad de no binarios programadores es de "+ contadornbmargen);} 

}