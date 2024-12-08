# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da solução](images/exemplo-arquitetura.png)

## Funcionalidades

Esta seção apresenta as funcionalidades da solução.

##### Funcionalidades

Permite a inclusão, leitura, alteração e exclusão de contatos para o sistema

* **Estrutura de dados:** [Banner](#Banner---Ivan*)
* **Instruções de acesso:**
  * O Banner e estatico;
  * Acesse a pagina de tutoriais atraves dela sera possivel ver o Banner no topo da tela;
  * Ao recarregar a pagina a imagem mudara aleatoriamente".
* **Tela da funcionalidade**:

* **Estrutura de dados:** [Carrousel](#Carrousel---Erik*)
* **Instruções de acesso:**
  * O Carrousel exibe informações para os idosos;
  * Acesse a pagina principal atraves dela sera possivel ver o Carrousel no topo da tela;
  * Ao recarregar a pagina a imagem mudara aleatoriamente".
* **Tela da funcionalidade**:

* **Estrutura de dados:** [Filtro](#filtro---rodrigo*)
* **Instruções de acesso:**
  * O filtro de pesquisa permite procurar serviços especificos;
  * Por exemplo ao acesse a pagina de tutoriais atraves dela sera possivel ver o filtro de pesquisa a direita ;
  * As informações irão aparecer de acordo com as pesquisas".
* **Tela da funcionalidade**:
![Tela de funcionalidade](images/exemplo-funcionalidade.png)

* **Estrutura de dados:** [Avaliações](Franklin---avaliações*)
* **Instruções de acesso:**
  * atraves de botoes e possivel avaliar os serviços de um cuidador de idosos;
* **Tela da funcionalidade**:
![Tela de funcionalidade](images/exemplo-funcionalidade.png)

* **Estrutura de dados:** [Tela do cuidador](#tela-do-cuidador---Ivan*)
* **Instruções de acesso:**
  * Apos a postagem de serviços pelos idosos estes serviços estarão disponiveis na tela do cuidador;
  * e possivel aceitae ou negar oserviço ;
* **Tela da funcionalidade**:
![Tela de funcionalidade](images/exemplo-funcionalidade.png)

* **Estrutura de dados:** [Cadastro](#cadastro---Lucas*)
* **Instruções de acesso:**
  * O Banner e estatico;
  * Acesse a pagina de tutoriais atraves dela sera possivel ver o Banner no topo da tela;
  * Ao recarregar a pagina a imagem mudara aleatoriamente".
* **Tela da funcionalidade**:
![Tela de funcionalidade](images/exemplo-funcionalidade.png)

* **Estrutura de dados:** [Pagamento](#Formas-de-pagamento---Lucas*)
* **Instruções de acesso:**
  * O Banner e estatico;
  * Acesse a pagina de tutoriais atraves dela sera possivel ver o Banner no topo da tela;
  * Ao recarregar a pagina a imagem mudara aleatoriamente".
* **Tela da funcionalidade**:
![Tela de funcionalidade](images/exemplo-funcionalidade.png)

* **Estrutura de dados:** [Banner](#Banner---Ivan*)
* **Instruções de acesso:**
  * O Banner e estatico;
  * Acesse a pagina de tutoriais atraves dela sera possivel ver o Banner no topo da tela;
  * Ao recarregar a pagina a imagem mudara aleatoriamente".
* **Tela da funcionalidade**:
![Tela de funcionalidade](images/exemplo-funcionalidade.png)

* **Estrutura de dados:** [POstagem](#Postagem-de-serviços---Rodrigo*)
* **Instruções de acesso:**
  * O Banner e estatico;
  * Acesse a pagina de tutoriais atraves dela sera possivel ver o Banner no topo da tela;
  * Ao recarregar a pagina a imagem mudara aleatoriamente".
* **Tela da funcionalidade**:
![Tela de funcionalidade](images/exemplo-funcionalidade.png)

* **Estrutura de dados:** [Banner](#Pagina-de-administração---Erik*)
* **Instruções de acesso:**
  * O Banner e estatico;
  * Acesse a pagina de tutoriais atraves dela sera possivel ver o Banner no topo da tela;
  * Ao recarregar a pagina a imagem mudara aleatoriamente".
* **Tela da funcionalidade**:
![Tela de funcionalidade](images/exemplo-funcionalidade.png)


> ⚠️ **APAGUE ESTA PARTE ANTES DE ENTREGAR SEU TRABALHO**
>
> Apresente cada uma das funcionalidades que a aplicação fornece tanto para os usuários, quanto aos administradores da solução.
>
> Inclua, para cada funcionalidade, itens como: (1) títulos e descrição da funcionalidade; (2) estrutura de dados associada; (3) o detalhe sobre as instruções de acesso e uso.

### Estruturas de dados

Descrição das estruturas de dados utilizadas na solução com exemplos no formato JSON.Info.

##### Estrutura de dados - Contatos

Contatos da aplicação

```json
  {
    "id": 1,
    "nome": "Leanne Graham",
    "cidade": "Belo Horizonte",
    "categoria": "amigos",
    "email": "Sincere@april.biz",
    "telefone": "1-770-736-8031",
    "website": "hildegard.org"
  }
  
```

##### Estrutura de dados - Usuários  ⚠️ EXEMPLO ⚠️

Registro dos usuários do sistema utilizados para login e para o perfil do sistema.

```json
 {
    "imagens": [
      "/src/public/assets/images/imgidoso1.jpg",
      "/src/public/assets/images/imgidoso2.jpg",
      "/src/public/assets/images/imgidoso3.jpg",
      "/src/public/assets/images/imgidoso4.jpg"
    ]
  }
```

