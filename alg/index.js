function calcularEstrutura(publicoEsperado) {
    const banheirosPorPessoa = 1 / 50;
    const baresPorPessoa = 1 / 150;

    const qtdBanheiros = Math.ceil(publicoEsperado * banheirosPorPessoa);
    const qtdBares = Math.ceil(publicoEsperado * baresPorPessoa);

    return { qtdBanheiros, qtdBares };
}

function calcular() {
    const publicoEsperado = parseInt(document.getElementById("publico").value);
    const resultado = calcularEstrutura(publicoEsperado);

    document.getElementById("resultadoBanheiros").textContent = `Banheiros: ${resultado.qtdBanheiros}`;
    document.getElementById("resultadoBares").textContent = `Bares: ${resultado.qtdBares}`;
}