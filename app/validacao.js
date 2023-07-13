function verificaSeOChuteEhValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER" || chute.toUpperCase() === "GAME OVER.") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }

    if(numeroForMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}.</div>`

        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O Número Secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class"btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O Número Secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O Número Secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
