const contribuicao = {
    Otavio: "Desenvolvedor, colabora na programação do site e na implementação das funcionalidades.",
    jota: "Desenvolvedor, responsável por auxiliar na criação do site e no design das páginas.",
    Miguel: "Desenvolvedor do projeto, encarregado de trabalhar na programação e na estruturação do site.",
    sofia: "Líder e secretária do grupo, responsável por coordenar as atividades, organizar as reuniões e registrar as decisões tomadas.",
    Alice: "Pesquisadora do grupo, dedicada a buscar informações confiáveis sobre alimentação equilibrada. ",
    Flavia: "Pesquisadora, responsável por complementar a coleta de dados e organizar materiais teóricos. "
};
//fiz uns texto meio provisorio não sei direito o que cada um fez, dai muda depois .

// to construindo o javascript ainda, NÂO QUERO CRITICAS !!!!
function contri(id) {
    const msg = document.getElementById("msg-" + id);

    if (msg) {
        msg.textContent = contribuicao[id];
    }
}  