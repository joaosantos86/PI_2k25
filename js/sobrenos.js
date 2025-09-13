const contribuicao = {
    Otavio: "asdasds",
    Jota: "",
    Miguel: "",
    Sofia: "",
    Alice: "",
    Flavia: ""
};

// to contruindo o javascript ainda, NÂO QUERO CRITICAS !!!!
function contri(id) {
    const msg = document.getElementById("msg-" + id);

    if (msg) {
        msg.textContent = contribuicao[id];
    }
}