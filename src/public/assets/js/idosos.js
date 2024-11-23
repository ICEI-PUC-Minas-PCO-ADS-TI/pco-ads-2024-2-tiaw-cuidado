// Idosos - Inicio

const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sIdade = document.querySelector('#m-idade');
const sStatus = document.querySelector('#m-status');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

const resetLocalStorage = () => {
    const defaultData = [
        { nome: 'João Silva', idade: 75, status: 'Ativo' },
        { nome: 'Maria Oliveira', idade: 82, status: 'Inativo' },
        { nome: 'Carlos Pereira', idade: 68, status: 'Ativo' }
    ];
    localStorage.setItem('dbidosos', JSON.stringify(defaultData));
};

const getItensBD = () => JSON.parse(localStorage.getItem('dbidosos')) ?? [];
const setItensBD = () => localStorage.setItem('dbidosos', JSON.stringify(itens));

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
        <td>${item.idade}</td>
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
        sIdade.value = itens[index].idade;
        sStatus.value = itens[index].status;
        id = index;
    } else {
        sNome.value = '';
        sIdade.value = '';
        sStatus.value = 'Ativo'; // valor padrão
    }
}

btnSalvar.onclick = e => {
    if (sNome.value == '' || sIdade.value == '' || sStatus.value == '') {
        return;
    }

    e.preventDefault();

    if (id !== undefined) {
        itens[id].nome = sNome.value;
        itens[id].idade = sIdade.value;
        itens[id].status = sStatus.value;
    } else {
        itens.push({ 'nome': sNome.value, 'idade': sIdade.value, 'status': sStatus.value });
    }

    setItensBD();

    modal.classList.remove('active');
    loadItens();
    id = undefined;
};


// Idosos - Fim