alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto= parseInt(Math.random()*100+1);
console.log(numeroSecreto);
let chute;
let chances = 1;
var numChutado=[];

function recarregarPagina() {
    location.reload();
}
function Iniciar(){
    while (chute != numeroSecreto) {
        chute = prompt(`Escolha um número de 1 a 100`);
        numChutado.push(chute);
        if(chute==numeroSecreto){
        break;    
        } else {
            if (chute < numeroSecreto) {
                alert (`O número secreto é maior que ${chute}`)
            } else {
                alert (`O número secreto é menor que ${chute}`)
            }
            chances+=1;
        }
    }
    let palavraChance = chances > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns, acertou com ${chances} ${palavraChance}! O número é ${numeroSecreto}`);
    console.log(numChutado);
};
function verChutes(){
    alert(numChutado);
};
