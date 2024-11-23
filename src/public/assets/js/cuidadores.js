// Cuidadores - Inicio

const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sEspeci = document.querySelector('#m-especi');
const sStatus = document.querySelector('#m-status');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

const resetLocalStorage = () => {
    const defaultData = [
        { nome: 'Ana Souza', especi: 'Enfermagem', status: 'Ativo' },
        { nome: 'Carlos Lima', especi: 'Fisioterapia', status: 'Inativo' },
        { nome: 'Maria Fernanda', especi: 'Nutrição', status: 'Ativo' },
        { nome: 'João Silva', especi: 'Psicologia', status: 'Ativo' },
        { nome: 'Fernanda Gomes', especi: 'Terapia Ocupacional', status: 'Inativo' }
    ];
    localStorage.setItem('dbcuidadores', JSON.stringify(defaultData));
};

const getItensBD = () => JSON.parse(localStorage.getItem('dbcuidadores')) ?? [];
const setItensBD = () => localStorage.setItem('dbcuidadores', JSON.stringify(itens));

function loadItens() {
    itens = getItensBD();
    tbody.innerHTML = '';
    itens.forEach((item, index) => {
        insertItem(item, index);
    });
}

resetLocalStorage();
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
    if (sNome.value == '' || sEspeci.value == '' || sStatus.value == '') {
        return;
    }

    e.preventDefault();

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