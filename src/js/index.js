const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;

btnAvancar.addEventListener("click", () => {

    const cartoes = document.querySelectorAll("li", ".cartao");

    const ultimoCartao = cartaoAtual === cartoes.length - 1;

    if (ultimoCartao) return;

    removerCartao(cartoes);
    cartaoAtual++;
    addCartao(cartoes);

});

btnVoltar.addEventListener("click", () => {

    const cartoes = document.querySelectorAll("li", ".cartao");

    const primeiroCartao = cartaoAtual === 0;

    if (primeiroCartao) return;

    removerCartao(cartoes);
    cartaoAtual--;
    addCartao(cartoes);

});

function removerCartao(cartoes) {
    cartoes[cartaoAtual].classList.remove("selecionado");
}

function addCartao(cartoes) {
    cartoes[cartaoAtual].classList.add("selecionado");
}
