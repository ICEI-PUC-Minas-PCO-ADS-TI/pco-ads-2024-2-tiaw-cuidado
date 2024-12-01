// Idosos - Inicio

const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sIdade = document.querySelector('#m-idade');
const sStatus = document.querySelector('#m-status');
const btnSalvar = document.querySelector('#btnSalvar');

let itens;
let id;

// Função para inicializar o sessionStorage com idosos padrão
const initializeSessionStorage = () => {
    const defaultData = [
        { nome: 'João Silva', idade: 75, status: 'Ativo' },
        { nome: 'Maria Oliveira', idade: 82, status: 'Inativo' },
        { nome: 'Carlos Pereira', idade: 68, status: 'Ativo' }
    ];
    sessionStorage.setItem('dbidosos', JSON.stringify(defaultData));
};

// Verificar se o sessionStorage está vazio e inicializar se necessário
if (!sessionStorage.getItem('dbidosos')) {
    initializeSessionStorage();
}

const getItensBD = () => JSON.parse(sessionStorage.getItem('dbidosos')) ?? [];
const setItensBD = () => sessionStorage.setItem('dbidosos', JSON.stringify(itens));

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
    e.preventDefault();

    // Verificar se os campos estão preenchidos
    if (sNome.value.trim() === '' || sIdade.value.trim() === '' || sStatus.value.trim() === '') {
        alert('Todos os campos devem ser preenchidos.');
        return;
    }

    // Verificar se a idade é um número positivo
    const idade = parseInt(sIdade.value, 10);
    if (isNaN(idade) || idade < 18 || idade > 120) {
        alert('A idade deve estar entre 18 e 120 anos.');
        return;
    }

    // Verificar se o nome contém apenas letras e espaços
    const nomeRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!nomeRegex.test(sNome.value)) {
        alert('O nome deve conter apenas letras e espaços.');
        return;
    }

    // Editar ou adicionar o novo item
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