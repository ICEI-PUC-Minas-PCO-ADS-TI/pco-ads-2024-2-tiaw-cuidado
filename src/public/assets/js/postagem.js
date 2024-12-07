// Estrutura do objeto JavaScript baseada no JSON
const cadastroServico = {
    dados: {
        nome: "",
        idade: 0,
        sexo: ""
    },
    endereco: {
        rua: "",
        cidade: "",
        bairro: "",
        estado: "",
        cep: "",
        complemento: ""
    },
    servico: {
        descricao: "",
        horario: ""
    }
};

// Exemplo de preenchimento do objeto com dados reais
cadastroServico.dados.nome = "Filomena da Silva";
cadastroServico.dados.idade = 68;
cadastroServico.dados.sexo = "Feminino";

cadastroServico.endereco.rua = "Rua A";
cadastroServico.endereco.cidade = "Contagem";
cadastroServico.endereco.bairro = "Bairro X";
cadastroServico.endereco.estado = "MG";
cadastroServico.endereco.cep = "32000-000";
cadastroServico.endereco.complemento = "Apto 101";

cadastroServico.servico.descricao = "Limpeza completa de residências.";
cadastroServico.servico.horario = "08:00 - 10:00";

// Função para exibir os dados no console
function mostrarDadosCadastro() {
    console.log("DADOS:");
    console.log(`Nome: ${cadastroServico.dados.nome}`);
    console.log(`Idade: ${cadastroServico.dados.idade}`);
    console.log(`Sexo: ${cadastroServico.dados.sexo}`);
    
    console.log("\nENDEREÇO:");
    console.log(`Rua: ${cadastroServico.endereco.rua}`);
    console.log(`Cidade: ${cadastroServico.endereco.cidade}`);
    console.log(`Bairro: ${cadastroServico.endereco.bairro}`);
    console.log(`Estado: ${cadastroServico.endereco.estado}`);
    console.log(`CEP: ${cadastroServico.endereco.cep}`);
    console.log(`Complemento: ${cadastroServico.endereco.complemento}`);
    
    console.log("\nSERVIÇO:");
    console.log(`Descrição: ${cadastroServico.servico.descricao}`);
    console.log(`Horário: ${cadastroServico.servico.horario}`);
}

// Chama a função para mostrar os dados
mostrarDadosCadastro();
