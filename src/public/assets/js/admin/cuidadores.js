// Cuidadores - Inicio

const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sEspeci = document.querySelector('#m-especi');
const sStatus = document.querySelector('#m-status');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

// Função para inicializar o sessionStorage com cuidadores padrão
const initializeSessionStorage = () => {
    const defaultData = [
        { nome: 'Ana Souza', especi: 'Enfermagem', status: 'Ativo' },
        { nome: 'Carlos Lima', especi: 'Fisioterapia', status: 'Inativo' },
        { nome: 'Maria Fernanda', especi: 'Nutrição', status: 'Ativo' },
        { nome: 'João Silva', especi: 'Psicologia', status: 'Ativo' },
        { nome: 'Fernanda Gomes', especi: 'Terapia Ocupacional', status: 'Inativo' }
    ];
    sessionStorage.setItem('dbcuidadores', JSON.stringify(defaultData));
};

// Verificar se o sessionStorage está vazio e inicializar se necessário
if (!sessionStorage.getItem('dbcuidadores')) {
    initializeSessionStorage();
}

const getItensBD = () => JSON.parse(sessionStorage.getItem('dbcuidadores')) ?? [];
const setItensBD = () => sessionStorage.setItem('dbcuidadores', JSON.stringify(itens));

function loadItens() {
    itens = getItensBD();
    tbody.innerHTML = '';
    itens.forEach((item, index) => {
        insertItem(item, index);
    });
}

loadItens();

function insertItem(item, index) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.especi}</td>
        <td class="status">${item.status}</td>
        <td class="acao">
            <button onclick="editItem(${index})">
                <img src="/src/public/assets/images/admin-images/edit.png" alt="Editar" style="width:24px; height:24px;">
            </button>
        </td>
        <td class="acao">
            <button onclick="deleteItem(${index})">
                <img src="/src/public/assets/images/admin-images/remove.png" alt="Remover" style="width:24px; height:24px;">
            </button>
        </td>
    `;
    tbody.appendChild(tr);
}

function editItem(index) {
    openModal(true, index);
}

function deleteItem(index) {
    itens.splice(index, 1);
    setItensBD();
    loadItens();
}

function openModal(edit = false, index = 0) {
    modal.classList.add('active');

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active');
        }
    };

    if (edit) {
        sNome.value = itens[index].nome;
        sEspeci.value = itens[index].especi;
        sStatus.value = itens[index].status;
        id = index;
    } else {
        sNome.value = '';
        sEspeci.value = '';
        sStatus.value = 'Ativo'; // valor padrão
    }
}

btnSalvar.onclick = e => {
    e.preventDefault();

    if (sNome.value == '' || sEspeci.value == '' || sStatus.value == '') {
        alert('Todos os campos devem ser preenchidos.');
        return;
    }

    // Verificar se o nome contém apenas letras e espaços
    const nomeEspeciRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!nomeEspeciRegex.test(sNome.value)) {
        alert('O nome deve conter apenas letras e espaços.');
        return;
    }

    if (!nomeEspeciRegex.test(sEspeci.value)) {
        alert('A especialização deve conter apenas letras e espaços.');
        return;
    }

    if (id !== undefined) {
        itens[id].nome = sNome.value;
        itens[id].especi = sEspeci.value;
        itens[id].status = sStatus.value;
    } else {
        itens.push({ 'nome': sNome.value, 'especi': sEspeci.value, 'status': sStatus.value });
    }

    setItensBD();

    modal.classList.remove('active');
    loadItens();
    id = undefined;
};

// Cuidadores - Fim