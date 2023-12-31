const formulario = document.querySelector('#nome-amigo');
const listaDeAmigos = document.querySelector('#lista-amigos');
const sorteio = document.querySelector('#lista-sorteio');
let amigosNoSorteio = [];
let amigosSorteados = [];

function adicionar() {
    if (amigosNoSorteio.includes(formulario.value) === false && formulario.value != '') {
        amigosNoSorteio.push(formulario.value);
        exibirAmigos('adicionar');
        limparFormulario();
    } else if (amigosNoSorteio.includes(formulario.value)) {
        console.error('Esse amigo(a) já foi adicionado(a).');
        alert('Esse amigo(a) já foi adicionado(a).')
    }
}

function sortear() {
    if (amigosNoSorteio.length == amigosSorteados.length) {
        exibirSorteio('limpar');
        amigosSorteados = [];
    }

    if (amigosNoSorteio.length >= 3) {
        while (amigosSorteados.length < amigosNoSorteio.length) {
            let indice = gerarNumeroAleatorio();

            while (amigosSorteados.includes(amigosNoSorteio[indice])) {
                indice = gerarNumeroAleatorio();
            }

            amigosSorteados.push(amigosNoSorteio[indice])
            console.log(amigosNoSorteio[indice]);
        }

        console.log(amigosSorteados);
        exibirSorteio('mostrar');
    } else {
        console.error('Por favor, adicione, pelo menos, três amigos no sorteio.');
        alert('Por favor, adicione, pelo menos, três amigos no sorteio.');
    }
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
