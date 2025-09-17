// vou fazer depois isso aq
// imc vai ser (altura * altura) / kilos

function carregando() {
    document.getElementById("calcular").textContent = "Carregando...";
}
function resultadoECalculo() {
    const idDoPeso = document.getElementById("peso");
    const peso = Number(idDoPeso.value);
    const idDaAltura = document.getElementById("altura"); 
    const altura = Number(idDaAltura.value);
    const imc = (peso / (altura * altura) *10000).toFixed(2);
    const localDeExibir = document.getElementById("exibi");
    localDeExibir.innerHTML = ""; 
    const criarH1 = document.createElement("h1");
    criarH1.textContent = "Resultado:";
    localDeExibir.appendChild(criarH1);
    const criarp = document.createElement("p");
    if (imc < 18.5) {
        criarp.textContent = `Estado: Baixo peso  Imc: ${imc}`;
    } else if (imc < 24.99) {
        criarp.textContent = `Estado: peso Normal Imc: ${imc}`;
    } else if (imc < 29.99) {
        criarp.textContent = `Estado: Sobrepeso  Imc: ${imc}`;
    } else {
        criarp.textContent =  `Estado: Obesidade  Imc: ${imc}`;
    }
    localDeExibir.appendChild(criarp);
    idDoPeso.value = "";
    idDaAltura.value = "";
    document.getElementById("calcular").textContent = "Calcular";
}
function tudoJunto() {
    carregando();
    setTimeout(resultadoECalculo, 3000);
}
//vou dar um update depois, vou tentar fazer com objeto  mas por agr vou dormir

