const formulario = document.querySelector('#nome-amigo');
const listaDeAmigos = document.querySelector('#lista-amigos');
const sorteio = document.querySelector('#lista-sorteio');
let amigosNoSorteio = [];
let amigosSorteados = [];

function adicionar() {
    amigosNoSorteio.push(formulario.value);
    exibirAmigos('adicionar');
    limparFormulario();
}

function sortear() {
    if (amigosNoSorteio.length == amigosSorteados.length) {
    } else {
        while (amigosSorteados.length < amigosNoSorteio.length) {
            let indice = gerarNumeroAleatorio();

            while (amigosSorteados.includes(amigosNoSorteio[indice])) {
                indice = gerarNumeroAleatorio();
            }

            amigosSorteados.push(amigosNoSorteio[indice])
            console.log(amigosNoSorteio[indice]);
        }

        console.log(amigosSorteados);
    }

    exibirSorteio('mostrar');
}

function reiniciar() {
    amigosNoSorteio = [];
    amigosSorteados = [];
    exibirAmigos('deletar');
    exibirSorteio('limpar');
    limparFormulario();
    console.clear();
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * 100);

    while (numeroAleatorio > (amigosNoSorteio.length - 1)) {
        numeroAleatorio = parseInt(Math.random() * 100);
    }

    return numeroAleatorio;
}

function exibirAmigos(acao) {
    if (acao == 'adicionar') {

        if (listaDeAmigos.textContent == '') {
            listaDeAmigos.textContent = formulario.value;
        } else {
            listaDeAmigos.textContent += ', ' + formulario.value;
        }

    } else if (acao == 'deletar') {
        listaDeAmigos.textContent = '';
    }
}

function exibirSorteio(acao) {
    if (acao == 'mostrar') {
        for (let i = 0; i < amigosSorteados.length; i++) {
            if (i == (amigosSorteados.length - 1)) {
                sorteio.innerHTML += `
            <p>${amigosSorteados[i]} --> ${amigosSorteados[0]}</p>`
            } else {
                sorteio.innerHTML += `
            <p>${amigosSorteados[i]} --> ${amigosSorteados[i + 1]}</p>`
            }
        }
    } else if (acao == 'limpar') {
        sorteio.innerHTML = '';
    }
}

function limparFormulario() {
    formulario.value = '';
}
