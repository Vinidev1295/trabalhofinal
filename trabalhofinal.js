const abrigos = [];

function adicionarAbrigo() {
    const nome = prompt("Informe o nome do abrigo: ");
    const cidade = prompt("Informe a cidade do abrigo: ");
    const endereco = prompt("Informe o endereço do abrigo: ");
    const telefone = prompt("Informe o telefone do abrigo: ");
    const capacidade = prompt("Informe a capacidade de lotação do abrigo: ");

    const abrigo = {
        nome,
        endereco,
        cidade,
        telefone,
        capacidade
    };

    abrigos.push(abrigo);
    alert("Abrigo adicionado com sucesso!");
}

function listarAbrigoss() {
    if (abrigos.length === 0) {
        alert("Nenhum abrigo cadastrado.");
        return;
    }


    for (let i = 0; i < abrigos.length; i++) {
        const abrigo = abrigos[i];
        const codigo = i + 1; // Código
        const nome = abrigo.nome; // Nome do abrigo
        const endereco = abrigo.endereco; // Endereço do abrigo
        const telefone = abrigo.telefone; // Telefone do abrigo
        const capacidade = abrigo.capacidade; // Capacidade do abrigo
        const cidade = abrigo.cidade; // Cidade do abrigo

        alert(`LISTA DE ABRIGOS:\n Codigo: ${codigo}\n Nome do Abrigo: ${nome}\n Endereço: ${endereco}\n Telefone: ${telefone}\n Capacidade Máxima: ${capacidade}\n Cidade: ${cidade}`);
    }

}

function procurarAbrigo() {
    const nome = prompt("Qual cidade você está?")
    const cidadesArray = []
    for (let i = 0; i < abrigos.length; i++){
        if(nome===abrigos[i].cidade){
            cidadesArray.push(abrigos[i])
        }
    }
    if(cidadesArray.length===0){
        alert("Cidade não cadastrada")
}else{
     for (let i = 0; i < cidadesArray.length; i++){
    alert(`Abrigo encontrado: ${cidadesArray[i].nome}\n Cidade: ${cidadesArray[i].cidade}\n Endereço: ${cidadesArray[i].endereco}\n Telefone: ${cidadesArray[i].telefone}\n Capacidade: ${cidadesArray[i].capacidade}`)
}
}
}



function menu() {
    let opcao;

    while (opcao !== '4') {
        opcao = prompt("Escolha uma opção:\n1. Adicionar Abrigo\n2. Listar Abrigos\n3. Procurar Abrigo\n4. Sair\n");
        switch (opcao) {
            case '1':
                adicionarAbrigo();
                break;

            case '2':
                listarAbrigoss();
                break;

            case '3':
                procurarAbrigo();
                break;

            case '4':
                alert("Saindo...");
                break;

            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
}

// Iniciar o menu
menu();
