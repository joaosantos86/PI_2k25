const contribuicao = {
    Otavio: "Desenvolveu as páginas: Sobre nós, Receitas, Imc e Termos de uso.",
    jota: "Desenvolveu a página: Sobre o projeto e fez o design de todas as páginas.",
    Miguel: "Desenvolveu as páginas: Home e Curiosidades.",
    sofia: "Cuidou das redes sociais",
    Alice: "Cuidou das redes sociais",
    Flavia: "Cuidou das redes sociais"
};
//fiz uns texto meio provisorio não sei direito o que cada um fez, dai muda depois .

// to construindo o javascript ainda, NÂO QUERO CRITICAS !!!!
function contri(id) {
    const msg = document.getElementById("msg-" + id);

    if (msg) {
        msg.textContent = contribuicao[id];
    }
}  