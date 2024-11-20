document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript carregado!'); // Log para verificar se o script está carregando

    // Carregar o JSON de usuários
    fetch('/src/pesquisa.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log('JSON carregado!', data); // Log para verificar se o JSON foi carregado corretamente
            const usuarios = data.usuarios;

            const searchButtons = document.querySelectorAll('.BotãoAvaliações');
            const searchInputs = document.querySelectorAll('.avaliações-box');
    
            searchButtons.forEach((button, index) => {
                button.addEventListener('click', function(event) {
                    event.preventDefault();
                    console.log('Botão de busca clicado!'); // Log para verificar o clique do botão
                    const searchInput = searchInputs[index];
                    const searchTerm = searchInput.value.trim().toLowerCase();
                    const userContainer = document.querySelectorAll('.Usuario')[index];
                    const commentArea = document.querySelectorAll('#comentários')[index];

                    console.log('Termo de busca:', searchTerm); // Log para verificar o termo de busca

                    const user = usuarios.find(u => u.nome.toLowerCase().includes(searchTerm));
                    if (user) {
                        console.log('Usuário encontrado!', user); // Log para verificar se o usuário foi encontrado
                        exibirUsuario(user, userContainer, commentArea);
                        carregarComentarios(user.nome, commentArea);
                    } else {
                        userContainer.innerHTML = '<p>Usuário não encontrado</p>';
                    }
                });
            });

            function exibirUsuario(user, container, commentArea) {
                container.innerHTML = `
                    
                    <p><strong>Nome:</strong> ${user.nome}</p>
                    <p><strong>Idade:</strong> ${user.idade}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                `;
                
                const commentButton = container.querySelector('.submit-comment');
                commentButton.addEventListener('click', function() {
                    const comment = commentArea.value;
                    console.log('Comentário:', comment); // Log para verificar o comentário
                    salvarComentario(user.nome, comment);
                    alert(`Comentário enviado para ${user.nome}: ${comment}`);
                });
            }

            function salvarComentario(nome, comentario) {
                const comentarios = JSON.parse(localStorage.getItem('comentarios')) || {};
                if (!comentarios[nome]) {
                    comentarios[nome] = [];
                }
                comentarios[nome].push(comentario);
                localStorage.setItem('comentarios', JSON.stringify(comentarios));
                console.log('Comentários salvos:', comentarios); // Log para verificar os comentários salvos
            }

            function carregarComentarios(nome, commentArea) {
                const comentarios = JSON.parse(localStorage.getItem('comentarios')) || {};
                if (comentarios[nome]) {
                    commentArea.value = comentarios[nome].join('\n');
                    console.log('Comentários carregados:', comentarios[nome]); // Log para verificar os comentários carregados
                }
            }
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});
