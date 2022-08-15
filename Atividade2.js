
function sequenciaFibonacci (tamanhoFibonacci){
	var fibonacci = [];
	fibonacci[0] = 0;
	fibonacci[1] = 1;
	for (var i = 2; i < tamanhoFibonacci; i++) {
	fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
	}
	return fibonacci;
}

var tamanhoFibonacci = 3;
var numeroProcurado = 123456;
var retorno = parseInt(sequenciaFibonacci(tamanhoFibonacci).slice(-1)[0]);

while (numeroProcurado > retorno) {
	tamanhoFibonacci += 1
	sequenciaFibonacci(tamanhoFibonacci)
	var retorno = parseInt(sequenciaFibonacci(tamanhoFibonacci).slice(-1)[0]);
	}

console.log(sequenciaFibonacci(tamanhoFibonacci));

var posicaoLista = sequenciaFibonacci(tamanhoFibonacci).indexOf(numeroProcurado);
if (posicaoLista == -1){
		console.log(`Número ${numeroProcurado} não faz parte da sequência de Fibonacci`);
	}else{ 
		console.log(`O número ${numeroProcurado} faz parte da sequência de Fibonacci.`);
	}



