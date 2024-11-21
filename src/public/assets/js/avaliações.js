// 1º Etapa
// Função para carregar os dados do JSON
async function carregarUsuarios() {
    try {
        const resposta = await fetch('/src/pesquisa.json'); // Caminho para o JSON
        const dados = await resposta.json();
        return dados.usuarios; // Retorna a lista de usuários
    } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
        alert("Não foi possível carregar os dados dos usuários.");
        return [];
    }
}

// Função para buscar usuários no JSON
async function buscarUsuario(inputSelector, usuarioDivSelector) {
    const usuarios = await carregarUsuarios(); // Carrega os usuários do JSON
    const input = document.querySelector(inputSelector).value.toLowerCase();
    const resultado = usuarios.find(usuario => usuario.nome.toLowerCase().includes(input));
    const usuarioDiv = document.querySelector(usuarioDivSelector);

    if (resultado) {
        usuarioDiv.innerHTML = `
            <p><strong>Nome:</strong> ${resultado.nome}</p>
            <p><strong>Idade:</strong> ${resultado.idade}</p>
            <p><strong>E-mail:</strong> ${resultado.email}</p>
        `;
    } else {
        usuarioDiv.innerHTML = "<p>Usuário não encontrado!</p>";
    }
}

// Função para salvar comentários
function salvarComentario(textareaSelector) {
    const comentario = document.querySelector(textareaSelector).value.trim();

    if (comentario === "") {
        alert("O comentário não pode estar vazio!");
    } else {
        alert("Comentário salvo com sucesso!");
        document.querySelector(textareaSelector).value = ""; // Limpa o campo de texto
    }
}

// Event Listeners para os formulários de clientes
document.querySelector(".search-container .BotãoAvaliações").addEventListener("click", (e) => {
    e.preventDefault(); // Evita recarregar a página
    buscarUsuario(".avaliações-box", ".Usuario");
});

// Event Listeners para salvar comentário dos clientes
document.querySelector(".main .BotãoAvaliações").addEventListener("click", (e) => {
    e.preventDefault();
    salvarComentario("#comentários");
});

// Event Listeners para os formulários de profissionais
document.querySelectorAll(".search-container .BotãoAvaliações")[1].addEventListener("click", (e) => {
    e.preventDefault();
    buscarUsuario(".avaliações-box:nth-of-type(2)", ".Usuario");
});

// Event Listeners para salvar comentário dos profissionais
document.querySelectorAll(".main .BotãoAvaliações")[1].addEventListener("click", (e) => {
    e.preventDefault();
    salvarComentario("#comentários");
});

// 2º Etapa

// Arrays para armazenar comentários
const comentariosClientes = [];
const comentariosProfissionais = [];

// Função para salvar comentários
function salvarComentario(textareaSelector, listaComentarios, comentariosArray) {
    const comentario = document.querySelector(textareaSelector).value.trim();

    if (comentario === "") {
        alert("O comentário não pode estar vazio!");
    } else {
        comentariosArray.push(comentario); // Adiciona o comentário ao array
        alert("Comentário salvo com sucesso!");
        document.querySelector(textareaSelector).value = ""; // Limpa o campo de texto
        atualizarComentarios(listaComentarios, comentariosArray); // Atualiza a exibição dos comentários
    }
}

// Função para atualizar a exibição dos comentários
function atualizarComentarios(listaSelector, comentariosArray) {
    const lista = document.querySelector(listaSelector);
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    comentariosArray.forEach((comentario, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${comentario}`;
        lista.appendChild(li);
    });
}

// Event Listeners para salvar comentários de clientes
document.querySelector(".main .BotãoAvaliações").addEventListener("click", (e) => {
    e.preventDefault();
    salvarComentario("#comentários", ".lista-comentarios", comentariosClientes);
});

// Event Listeners para salvar comentários de profissionais
document.querySelectorAll(".main .BotãoAvaliações")[1].addEventListener("click", (e) => {
    e.preventDefault();
    salvarComentario("#comentários", ".lista-comentarios:nth-of-type(2)", comentariosProfissionais);
});

