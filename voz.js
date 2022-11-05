window.contador=0;          
window.contadorcubogrande=0;
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

      var arreglovoz = [  'Hola octocat',
            'octocat Dime un dato curioso',
                     'octocat preséntate',
            'octocat muéstrame a IronCat',
            'octocat Muéstrame a Iron Cat',
            'octocat Muéstrame a Iron Man',  
            'Muéstrame a Iron Cat', 
            'Muéstrame Iron Cat',              
            'octocat muéstrame a IronCat más grande',
            'octocat Muéstrame Iron Man más grande', 
            'Muéstrame a Iron Cat más grande', 
            'Muéstrame Iron Cat más grande', 
            'octocat muéstrame a IronCat más pequeño',
            'octocat Muéstrame ironcat más pequeño',
            'octocat Muéstrame a Iron Cat más pequeño',
            'octocat Muéstrame Iron Cat más pequeño',
            'octocat Haz que Iron Cat desaparezca',
            'realidad animación'];

var grammar = '#JSGF V1.0; grammar arreglovoz; public <arreglovoz> = ' + arreglovoz.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;           
recognition.lang = 'es-MX';        
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('#text');  
//var hints = document.querySelector('.hints');  
var vozHTML= '';
arreglovoz.forEach(function(v, i, a){
console.log(v, i);

});
document.onkeydown = function() {
recognition.start();
console.log('Estoy listo para escuchar.');

}       

recognition.onresult = function(event) {            
var voz = event.results[0][0].transcript;
//diagnostic.textContent = 'Dijiste: ' + voz + '.';           
diagnostic.setAttribute("value", "Dijiste: " + voz + ".");
//diagnostic.textContent = 'Dijiste: ' + voz + '.';
bg = voz;
var bg = document.querySelector('text');


//VISUALIZO EN CONSOLA
console.log(bg);
console.log(voz);

function randD(array){
var rand= Math.random()*array.length|0;
var result=array[rand];
return result;
}

// Interacciones iniciales
if(voz === 'Hola octocat'){
console.log("Hola, estas saludando!");
let utterance = new SpeechSynthesisUtterance('Hola amigo, bienvenido. Estoy listo y preparado para resolver tus dudas. Te escucho...')
utterance.lang = 'es-MX'
speechSynthesis.speak(utterance)     
}

if(voz === 'octocat preséntate'){
console.log("octocat se esta presentando!");
let utterance = new SpeechSynthesisUtterance('Hola, mi nombre es octocat mascota y logotipo de GitHub, mi nombre e imagen hacen referencia a la estructura y las ramificaciones de mi cuerpo, es decir, la cabeza es mi rama principal y mis tentáculos las ramificaciones de ella, por lo que se asemeja a la estructura y funcionamiento de un repositorio de GitHub.')
utterance.lang = 'es-MX'
speechSynthesis.speak(utterance)     
}


//interaccion con RA         
if(voz === 'octocat muéstrame a IronCat' || voz === 'octocat Muéstrame a Iron Cat'  || voz === 'octocat Muéstrame a Iron Man'  || voz === 'Muéstrame a Iron Cat' || voz === 'Muéstrame Iron Cat'){
console.log("Estas queriendo visualizar el modelo ironcat");

if(contador ==0){
var el = document.querySelector('#avatar');
  el.setAttribute("src", '#Modelo3D');
  let utterance = new SpeechSynthesisUtterance('Ironcat es un modelo basado en el personaje de ciencia ficcion IRONMAN de Marvel, esta fue renderizada por alumnos del instituo tecnologico de tlaxiaco tomando como referencia la imagen compartida por Cameron McEfee en el octodex, la verdadera identidad de Ironcat sigue siendo un misterio. Tienes idea de quien es?')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)    
}


if(voz === 'octocat muéstrame a ironcat más grande' || voz === 'octocat Muéstrame a Iron Cat más grande' || voz === 'Muéstrame a Iron Cat más grande' || voz === 'octocat Muéstrame Iron Cat más grande' || voz === 'Muéstrame Iron Cat más grande'){
console.log("Estas queriendo hacer a ironcat mas grande");             
if(contadorcubogrande ==0){
var el = document.querySelector('#avatar');
  el.setAttribute("scale", '1 1 1');

  let utterance = new SpeechSynthesisUtterance('Ahora Ironcat es más grande pero no me pidas hacerlo de nuevo por que es imposible. ok?')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}


if(voz === 'octocat muéstrame a IronCat más pequeño' || voz === 'octocat Muéstrame ironcat más pequeño' || voz === 'octocat Muéstrame a IronCat más pequeño' || voz === 'octocat Muéstrame Iron Cat más pequeño'){
console.log("Estas queriendo a ironcat mas pequeño");
var el = document.querySelector('#avatar');
  el.setAttribute("scale", '0.1 0.1 0.1');

  let utterance = new SpeechSynthesisUtterance('Reduciendo a Ironcat. Ahora Ironcat a vuelto a su tamaño normal para volver a combatir el mal.')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}
if(voz === 'octocat Haz que ironcat desaparezca' || voz === 'octocat Haz que Iron Cat desaparezca'){
console.log("Estas queriendo a ironcat transparente");
var el = document.querySelector('#avatar');
  el.setAttribute("opacity", '0.4');

  let utterance = new SpeechSynthesisUtterance('Ironcat a desaparecido, a utilizado nanotecnologia y muchas librerias que ha econtrado en GitHub')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
}

if(voz === 'octocat regresa al escenario'){
console.log("Estas queriendo regresar a octocat");
var el = document.querySelector('#avatar');
  el.setAttribute("src", '#Modelo3D');            
  el.setAttribute("scale", '0.1 0.1 0.1');
  el.setAttribute("position", '0 -0.25 0');
  el.setAttribute("rotation", '0 0 0');
 
  var es = document.querySelector('#entityID1').removeAttribute('opacity');


  let utterance = new SpeechSynthesisUtterance('Enseguida amigo. auqnue ya me estoy cansando de esto')
  utterance.lang = 'es-MX'
  speechSynthesis.speak(utterance)
 
}

recognition.onspeechend = function() {
recognition.stop();
}

recognition.onnomatch = function(event) {
diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
//diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
}

recognition.onerror = function(event) {
diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
//diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
}


