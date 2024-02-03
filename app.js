var numChutado = [];
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
numChutado = [];
let chute;
let chances = 1;
function enviar() {
  chute = document.getElementById("numbChute").value;
  numChutado.push(chute);
  if (chute == numeroSecreto) {
    let palavraChance = chances > 1 ? "tentativas" : "tentativa";
    document.getElementById('ajuda').innerText=`Parabéns, acertou com ${chances} ${palavraChance}! O número é ${numeroSecreto}`;
  } else {
    if (chute < numeroSecreto) {
      document.getElementById('ajuda').innerText=`O número secreto é maior que ${document.getElementById("numbChute").value}`;
    } else {
      document.getElementById('ajuda').innerText=`O número secreto é menor que ${document.getElementById("numbChute").value}`;
    }
    chances += 1;
  }
  console.log(numChutado);
}
function verChutes() {
  alert(numChutado);
}
function newNumber() {
  numeroSecreto = parseInt(Math.random() * 100 + 1);
  console.log(numeroSecreto);
  numChutado = [];
  chances = 1;
  document.getElementById('ajuda').innerText='';
}
document.getElementById('chute').addEventListener('submit', function(){
  event.preventDefault();
  enviar();
  document.getElementById('numbChute').value='';
});
