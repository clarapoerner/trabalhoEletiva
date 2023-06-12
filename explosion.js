//função em javascript usando if e else para a última página
function perguntar() {
  var pergunta;
  pergunta = prompt("você gosta de gatos?");
  if (pergunta == "sim") {
    document.getElementById("p").innerHTML = "que bom, eu também!";
  } else {
    document.getElementById("p").innerHTML = "VAI EMBORA!!!!!!!!!!";
  }
}

var header = document.querySelector("h1")

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

//funçao
function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

//milisegundos
setInterval("changeHeaderColor()",500);
