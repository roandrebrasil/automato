function converte(letras){
	var alfabeto = "ABC";
	var codigos = [];
		for(var i in letras){
			codigos.push(alfabeto.indexOf(letras[i].toUpperCase()) +1);
		}
		return codigos;
}

var capturando = "";
	function LinguagemB(){
		capturando = document.getElementById('palavra').value;
		document.getElementById('valorDigitado').innerHTML = capturando; 

var resultado = converte(capturando);

var soma = 0;

for(var i=0; i < resultado.length; i++){
	if (resultado[i] == '1') {
		soma += resultado[i]
	}
}

if (soma % 2 == 0) {
	alert("Rejeitada")
}
if (soma % 2 == 1){
	alert("Aceita")
}

}