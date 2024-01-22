exibirTextoInicial();
function textoModelo(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial()
{
    numeroSecreto = geraNumero();
    limparCampo();
    tentativas = 1;
    textoModelo('h1', 'Jogo dos Números');
    textoModelo('p', 'Escolha um número entre 1 e 100');
}

function verificarChute()
{
    let chute = document.querySelector('input').value;
    let palavraS = tentativas > 1 ? ' tentativas' : ' tentativa';

    if(chute == numeroSecreto){
        textoModelo('h1', 'Acertou!');
        textoModelo('p', 'Você descobriu o número secreto com ' + tentativas + palavraS + '!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else 
    {
        textoModelo('h1', 'Errou!');
        if (chute > numeroSecreto) {
            textoModelo('p', 'O número secreto é menor');
        } else {
            textoModelo('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo()
{
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
function geraNumero()
{
    return parseInt(Math.random() * 100 + 1);
}