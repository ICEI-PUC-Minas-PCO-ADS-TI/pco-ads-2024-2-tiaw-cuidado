// 1º Etapa: Carregar os dados do JSON
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
            <p><img src="${resultado.img || 'assets/images/icone_usuario.png'}" alt="Foto de ${resultado.nome}" style="max-width: 100px;"></p>
            <p><strong>Nome:</strong> ${resultado.nome}</p>
            <p><strong>Idade:</strong> ${resultado.idade}</p>
            <p><strong>E-mail:</strong> ${resultado.email}</p>
        `;
    } else {
        usuarioDiv.innerHTML = "<p>Usuário não encontrado!</p>";
    }
}

// 2º Etapa: Armazenar e Exibir Comentários
const comentariosSalvos = []; // Array para armazenar comentários

// Função para salvar comentário
function salvarComentario(textareaSelector, listaSelector) {
    const comentario = document.querySelector(textareaSelector).value.trim();

    if (comentario === "") {
        alert("O comentário não pode estar vazio!");
        return;
    }

    comentariosSalvos.push(comentario); // Adiciona ao array
    alert("Comentário salvo com sucesso!");
    document.querySelector(textareaSelector).value = ""; // Limpa o campo de texto
    atualizarComentarios(listaSelector); // Atualiza a exibição dos comentários
}

// Função para atualizar a exibição dos comentários
function atualizarComentarios(listaSelector) {
    const lista = document.querySelector(listaSelector);
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    comentariosSalvos.forEach((comentario, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${comentario}`;
        lista.appendChild(li);
    });
}

// Event Listener para buscar usuário
document.querySelector(".search-container .BotãoAvaliações").addEventListener("click", (e) => {
    e.preventDefault(); // Evita recarregar a página
    buscarUsuario(".avaliações-box", ".Usuario");
});

// Event Listener para salvar comentário
document.querySelector(".main .BotãoAvaliações").addEventListener("click", (e) => {
    e.preventDefault();
    salvarComentario("#comentários", ".lista-comentarios");
});
