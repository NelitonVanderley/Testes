var palavra = "teste"
var array = palavra.split("")
var novapalavra = []

function inverterString (palavra){
    for (var i = array.length -1; i >= 0 ; i--){
        //var string = array.slice()[array.length 0- 
        var teste = i

        var func = array.slice()[teste]
        novapalavra.push(func)
        
    }
    return novapalavra
}

console.log('A palavra invertida é: '+ inverterString(palavra).join([separador = '']) +' !')

