var capturando = "";
	function LinguagemA(){
		capturando = document.getElementById('palavra').value;
		document.getElementById('valorDigitado').innerHTML = capturando; 
			
			const palavra = capturando;
			const alfabeto = "aaa"

			for(let i = 0; i < palavra.length; i++){

				if(palavra[i] == alfabeto[0]){
					if(palavra[i+1] == alfabeto[1]){
						if(palavra[i+2] == alfabeto[2]){
							alert("Aceita");
							return;
						}
					}
				}
			}
			alert('Rejeitada');
	}