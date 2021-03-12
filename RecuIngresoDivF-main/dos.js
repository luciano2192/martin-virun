function mostrar()
{let nombre ;
    let carrera;
    let sexo;
    let cantmat;
    let notaprom;
    let edad ;
    let i = 0; 
    let flagmejorpromediofis =1 ;
    let nombremejorpromfis;
    let mejorpromfis;
    let nombrealumnajoven;
    let flagalumnajoven=1;
    let edadalumnajoven;
    let contadorgeneral =0;
    let contadorquimica=0;
    let contadorfis =0;
    let contadorsistemas=0;
    let canmasmaterias ;
    let flagmasmaterias=1 ;
    let nombremasmaterias;
    let edadmasmaterias;
    let porquimica=0;
    let porfisica=0;
    let porsistema=0;
  
  
  
  
  
  
    // la variable "i" ya la inicializaste en 0
    // no hace falta que aca le vuelvas a asignar como valor 0
    // tambien podias hacer dentro del for, for ( var i=0 ; i<5 ; i ++ )
    for ( i=0 ; i<2 ; i ++ ){
       nombre = prompt("ingrese nombre");
  
      // falta validar carrera
       carrera = prompt("ingrese carrrera : quimica /fisica/ sistemas").toLowerCase();
  
       // falta validar sexo
       sexo = prompt("ingrese sexo : f/m/nb").toLowerCase();
  
       cantmat = parseInt(prompt("ingrese cantidad de materias entre 1 y 5"));
       // aca usuaria while(isNaN(cantmat) || cantmat <= 1 && cantmat >= 5)
       // porque queres validar un rango de numeros
       while(isNaN(cantmat) || cantmat <1 || cantmat> 5 ) {
  
        cantmat = parseInt(prompt(" error ,ingrese cantidad de materias entre 1 y 5"));}
  
        notaprom= parseInt(prompt("ingrese nota promedio entre 0 y 10 "));
        while (isNaN(notaprom) || notaprom <0 || notaprom > 10  ){
          notaprom= parseInt(prompt("error ,ingrese nota promedio entre 0 y 10 "));}
  
          edad = parseInt(prompt("ingrese edad "));
          // faltan validaciones en la edad
          while(isNaN(edad)){
            edad = parseInt(prompt("error ,ingrese edad "));}
  
            // tener en cuenta si nadie se anota en fisica, para el mensaje a mostrar mas abajo
            if ( carrera =="fisica"){
              if (flagmejorpromediofis || mejorpromfis < notaprom ){
                mejorpromfis = notaprom ;
                nombremejorpromfis = nombre;
                flagmejorpromediofis = 0 ;
              }
            }
            
            // tener en cuenta si no hay alumnas, para el mensaje a motrar mas abajo
            if (sexo == "f"){
              if (flagalumnajoven|| edadalumnajoven > edad){
                nombrealumnajoven = nombre ;
                edadalumnajoven = edad ; 
                flagalumnajoven =0; 
              }
            }
            contadorgeneral ++ ;
  
  // si no validas la carrera e ingresas cualquier cosa, siempre te lleva al contador de sistemas
  // podes ingresar cualquier letra o numero y parece que se anotaron en sistemas
  if (carrera == "quimica"){
    contadorquimica ++ ;
  } else if (carrera =="fisica"){
    contadorfis ++;
  
  }else {contadorsistemas ++ }
  
  
  
  if (carrera != "quimica"){
    if(flagmasmaterias|| canmasmaterias< cantmat ){
      canmasmaterias = cantmat;
      nombremasmaterias = nombre ;
      edadmasmaterias = edad ;
      flagmasmaterias =0;
    }
  }
  
  
   }//fin for 
  
  
   if (contadorsistemas !=0){
     porsistema =(contadorsistemas / contadorgeneral )*100 ;
   }if (contadorquimica !=0){
    porquimica =(contadorquimica / contadorgeneral )*100 ;}
    if (contadorfis !=0) {porfisica =(contadorfis / contadorgeneral )*100 ;}
  
  
  
  
  
  
    // si no se ingresa un alumno para fisica nombremejorpromfis = undefined
    // deberias manejarlo de otra manera y mostrar otro mensaje
    console.log("el nombre del mejor promedio de fisica es : "+ nombremejorpromfis);
    // aca lo mismo, si no ingresan una alumna, deberias manejar esto de otra manera
    console.log("el nombre de la alumna mas joven es "+ nombrealumnajoven);
    // aca tambien, si no hay nada que calcular para alguna carrera, el mensaje podria ser otro
    console.log("el porcentaje de cada carrera es fisca " + porfisica +"% " +" quimica " + porquimica +"% " + "sistemas " + porsistema + "%" );
    console.log ("la edad y nombre del que cursa mas materias es : edad " + edadmasmaterias + " nombre : " + nombremasmaterias );
  
    
}
