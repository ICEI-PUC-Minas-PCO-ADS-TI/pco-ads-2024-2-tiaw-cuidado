/* Função para alterar a imagem do banner ao carregar a página */
window.onload = function() {
    // Carregar as imagens do arquivo JSON
    fetch('/src/imagensBanner.json')
        .then(response => response.json()) /* Converte o arquivo JSON em um objeto JavaScript */
        .then(data => {
        /* Escolher uma imagem aleatória */
            const imagens = data.imagens;
            const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
            
        /*  Alterar o background-image do banner  */
            document.querySelector('.banner').style.backgroundImage = `url('${imagemAleatoria}')`;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
}