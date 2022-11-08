<script>
var vetorA = []
var vetorSoma = []
var somaMedia = 0
var soma = 0

var N = parseInt(prompt("Digite a quantidade de números a serem calculados"))

for(i=0;i<N;i++){
vetorA[i] = parseFloat(prompt("Digite um valor"))
}



for(i=0;i<N;i++){
somaMedia += vetorA[i]
}



media = somaMedia/N
alert("Média (x̅) = " + media.toFixed(6))


for(i=0;i<N;i++){
vetorSoma[i] = Math.pow(vetorA[i] - media,2)
soma += vetorSoma[i]
}



calc = soma/(N*(N-1))

sigma = Math.sqrt(calc)
alert("Desvio padrão da média (σ) = " + sigma.toFixed(6))

alert("Relato da medida: " + "( " + media + " ± " + sigma + " )" + " Unidade")

</script>

