function converte(letras){
	var alfabeto = "ACB";
	var codigos = [];
		for(var i in letras){
			codigos.push(alfabeto.indexOf(letras[i].toUpperCase()) +1);
		}
		return codigos;
}

var capturando = "";
	function LinguagemD(){
		capturando = document.getElementById('palavra').value;
		document.getElementById('valorDigitado').innerHTML = capturando; 

var resultado = converte(capturando);

var soma = 0;
var somaB = 0;

//Soma de A
for(var i=0; i < resultado.length; i++){
	if (resultado[i] == '1') {
		soma += resultado[i]
	}
}

//Soma de B

for(var i=0; i < resultado.length; i++){
	if (resultado[i] == '3') {
		somaB += resultado[i]
	}
}

if (soma % 2 == 1){
	if (somaB % 2 == 1){
		alert("Rejeitada")
	}
}

if (soma % 2 == 0) {
	if (somaB % 2 == 0){
		alert("Rejeitada")
	}
}

if (soma % 2 == 1){
	if (somaB % 2 == 0){
		alert("Aceita")
	}
}
if (soma % 2 == 0){
	if (somaB % 2 == 1){
		alert("Aceita")
	}
}

}