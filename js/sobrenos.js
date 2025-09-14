const contribuicao = {
    Otavio: "desenvolveu as páginas: sobre nós, receitas e termos de uso.",
    Jota: "",
    Miguel: "",
    Sofia: "",
    Alice: "",
    Flavia: ""
};

// to construindo o javascript ainda, NÂO QUERO CRITICAS !!!!
function contri(id) {
    const msg = document.getElementById("msg-" + id);

    if (msg) {
        msg.textContent = contribuicao[id];
    }
}