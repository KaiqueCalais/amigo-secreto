const formulario = document.querySelector('#nome-amigo');
const listaDeAmigos = document.querySelector('#lista-amigos');
const sorteio = document.querySelector('#lista-sorteio');
let amigosNoSorteio = [];
let amigosSorteados = [];

function adicionar() {
    if (amigosNoSorteio.includes(formulario.value) === false && formulario.value != '') {
        amigosNoSorteio.push(formulario.value);
        exibirAmigos();
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
    exibirAmigos();
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

function exibirAmigos() {
    listaDeAmigos.textContent = '';

    for (let i = 0; i < amigosNoSorteio.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        if (listaDeAmigos.textContent == '') {
            listaDeAmigos.innerHTML = `
            <p onClick="removerAmigo(${i})">${amigosNoSorteio[i]}</p>`;
        } else {
            listaDeAmigos.innerHTML += `
            <p onClick="removerAmigo(${i})">, ${amigosNoSorteio[i]}</p>`;
        }
    }

    limparFormulario();
}

function removerAmigo(i) {
    amigosNoSorteio.splice(i, 1);
    exibirAmigos();
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

// Desafio 2
var minhaLista = [1, 2, 3];
var outraLista = [4, 5, 6];
var novaLista = minhaLista.concat(outraLista);
console.log(novaLista);
