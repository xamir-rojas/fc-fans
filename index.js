const MAYORIA_DE_EDAD = 18;
const juegoContainer = document.getElementById("juego");
const quizContainer = document.getElementById("quiz");
const resultadosContainer = document.getElementById("results");
const btnEvaluar = document.getElementById("submit");
const btnEmpezar = document.getElementById("boton-empezar");
const btnFormulario = document.getElementById("registrar");


var edad = 0;
var nombre = "";


function preguntarEdad(){
    nombre = prompt("Inserta tu nombre :");
    edad = prompt("Inserta tu edad : ","18");

    if(parseInt(edad) >= MAYORIA_DE_EDAD ){
        window.alert(`Bienvenido ${nombre} a la pagina del club!`);
    }else{
        window.alert(`Lo sentimos ${nombre}
        eres menor de edad no puedes unirte al club de fans`);
    //<input type="button" id="registrar" disabled>
        btnFormulario.disabled = true;
     }
}

preguntarEdad();

/*
juegoContainer.style.display="none";
hace que
<div id ="juego" style="display:none">
ello oculta el div juego
*/

//se oculta el juego hasta que el usuario le de start
juegoContainer.style.display="none";
//arrowFunction
var mostrarJuego = ev => {
    juegoContainer.style.display="block";
}

// se le asigna que cuando se haga click
//en el botón empezar se ejecute la funcion mostrarJuego

btnEmpezar.addEventListener("click", mostrarJuego);

// preguntas del quiz
const misPreguntas = [
  {
    texto_pregunta: "¿Cuál de estos jugadores lleva el 10?",
    respuestas: {
      a: "Dembelé ",
      b: "Suárez ",
      c: "Messi "
    },
    respuestaCorrecta: "c"
  },
  {
    texto_pregunta: "¿Cuál es el entrenador actual del barca?",
    respuestas: {
      a: "Guardiola ",
      b: "Luis Enrique ",
      c: "Ronald Koeman "
    },
    respuestaCorrecta: "c"
  },
  {
    texto_pregunta: "¿Cuántas ligas de España ha ganado el FC?",
    respuestas: {
      a: "22 ",
      b: "25 ",
      c: "28 ",
      d: "24 "
    },
    respuestaCorrecta: "d"
  }
];

//arrowFunction
var crearQuiz = () =>{
    console.log(misPreguntas)
    var html_quiz = [];
    var numeroPregunta = -1;
    for(var pregunta in misPreguntas){
        var respuestas_html = [];
        numeroPregunta ++;
        var contenido_pregunta = misPreguntas[pregunta];
        for(letra in contenido_pregunta.respuestas){
            respuestas_html.push(
            `
            <input  class="form-check-input" type="radio"
            name="pregunta${numeroPregunta}" value="${letra}">
            <label class="form-check-label mr-2 ml-2">
            ${letra} :
            ${contenido_pregunta.respuestas[letra]}
            </label>`
                );
        }
    /*
    respuestas_html = [
    "
    <input  class="form-check-input" type="radio"
    name="pregunta0" value="a">
      <label class="form-check-label mr-2 ml-2">
      a :
      dembele
      </label>`
    ",
        "
    <input  class="form-check-input" type="radio"
      name="pregunta0" value="b">
      <label class="form-check-label mr-2 ml-2">
      b :
      suarez
      </label>`
    ",
    ]
    */
    /*
    respuestas_html.join("")= [
    "<input  class="form-check-input" type="radio"
    name="pregunta0" value="a">
      <label class="form-check-label mr-2 ml-2">
      a :
      dembele
      </label>`
    <input  class="form-check-input" type="radio"
    name="pregunta0" value="b">
      <label class="form-check-label mr-2 ml-2">
      b :
      suarez
      </label>
    "
    ]
    */

        html_quiz.push(
            `<div class="pregunta">
            <h3> ${contenido_pregunta.texto_pregunta} </h3>
            </div>
            <div class="respuestas form-check form-check-inline mb-2 mt-2">
             ${respuestas_html.join("")}
            </div>
            `
        );

    }
    quizContainer.innerHTML = html_quiz.join("");
}



var mostrarResultados = () =>{
  var respuestaContainers = quizContainer.querySelectorAll(".respuestas");
  var correctas = 0;


  misPreguntas.forEach( (pregunta, preguntaNumero) => {
  var respuestaContainer = respuestaContainers[preguntaNumero];
  var selector = `input[name=pregunta${preguntaNumero}]:checked`;
  var respuestaSelection = respuestaContainer.querySelector(selector)
  var respuestaUsuario = ( respuestaSelection || {}).value;
    if(respuestaUsuario === pregunta.respuestaCorrecta){
      correctas++;
      respuestaContainers[preguntaNumero].style.color = "green";
    }
    else{

      respuestaContainers[preguntaNumero].style.color = "red";
    }
  });

  resultadosContainer.innerHTML = `<strong>${nombre}!
  tu puntaje es ${correctas} de ${misPreguntas.length}</strong>`;
}




crearQuiz();
btnEvaluar.addEventListener("click", mostrarResultados);

//arrowFunction
var contador = () =>{
  var limite = parseInt(prompt(
    "di en que valor quieres que el contador inicie"
    ));

  while(limite > 0){
    if(limite == 5){
      window.alert(`el conteo termino en ${limite}`)
      break;
    } else if (limite == 9){
      window.alert(`nos saltaremos el ${limite}`)
      limite--;
      continue;
    }
    /*
    var par = limite % 2 == 0;
    if(par){
      console.log(`Numero par: ${limite}`)
    }else{
      console.log(`Numero impar: ${limite}`)
    }
    equivalente
    (condicion) ? que pasa si se cumple : que pasa si no se cumple
    */
    (limite % 2 == 0) ? console.log(`Numero par: ${limite}`) : console.log(`Numero impar: ${limite}`)
    limite--;
  }
}


//jQuery y AJAX

/* funcion encargada de cambiar el color del header
cuando el logo se mueve cierta cantidad de pixeles
usando JavaScript
*/
 $(window).scroll(function(){
    if ($("#logo").offset().top > 40) {
        $("#header").addClass("different");
    } else {
        $("#header").removeClass("different");
    }
 });

