document.addEventListener('DOMContentLoaded', function() {
    // Carregar o JSON de usuários
    fetch('/src/pesquisa.json')
        .then(response => response.json())
        .then(data => {
            const usuarios = data.usuarios;

            const searchButtons = document.querySelectorAll('.BotãoAvaliações');
            const searchInputs = document.querySelectorAll('.avaliações-box');
    
            searchButtons.forEach((button, index) => {
                button.addEventListener('click', function(event) {
                    event.preventDefault();
                    const searchInput = searchInputs[index];
                    const searchTerm = searchInput.value.trim().toLowerCase();
                    const userContainer = document.querySelectorAll('.Usuario')[index];

                    const user = usuarios.find(u => u.nome.toLowerCase().includes(searchTerm));
                    if (user) {
                        exibirUsuario(user, userContainer);
                    } else {
                        userContainer.innerHTML = '<p>Usuário não encontrado</p>';
                    }
                });
            });

            function exibirUsuario(user, container) {
                container.innerHTML = `
                    <img src="${user.img}" alt="Foto de ${user.nome}">
                    <p><strong>Nome:</strong> ${user.nome}</p>
                    <p><strong>Idade:</strong> ${user.idade}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <textarea id="comentários-${user.nome}" placeholder="Comente aqui..."></textarea>
                    <button class="submit-comment" data-nome="${user.nome}">Enviar Comentário</button>
                `;
                
                const commentButton = container.querySelector('.submit-comment');
                commentButton.addEventListener('click', function() {
                    const comment = container.querySelector(`#comentários-${user.nome}`).value;
                    alert(`Comentário enviado para ${user.nome}: ${comment}`);
                });
            }
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});
