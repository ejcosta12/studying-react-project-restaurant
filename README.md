<h3 align="center">
  Aplicação para criação de pedidos: Projeto REACT
</h3>
<h4 align="center">
  CRUD (Create, Read, Update, Delete)
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ejcosta12/studying-react-project-restaurant">
  <img alt="javaScript" src="https://img.shields.io/github/languages/top/ejcosta12/studying-react-project-restaurant">
  <img alt="Size" src="https://img.shields.io/github/repo-size/ejcosta12/studying-react-project-restaurant">
</p>

## Sobre
Versão WEB da aplicação desenvolvida para criação de pedidos em restaurante, trabalhando com a listagem, criação, alteração e remoção de produtos. A aplicação renderiza modais para lidar com a criação e atualização de produtos na página dashboard.

<p align="center" >
<img alt="Home" src="https://res.cloudinary.com/dggw1b0tr/image/upload/v1594144084/studying-react-project-restaurant/dashboard_uzfwsl.png">
<img alt="Home" src="https://res.cloudinary.com/dggw1b0tr/image/upload/v1594144083/studying-react-project-restaurant/modalNewProduct_bvcmao.png">
</p>

### Tecnologias

- React
- Axios
- Styled Components

### Scripts CLI

#### yarn
Instalação de todas as dependências necessárias.

#### yarn json-server server.json -p 3333
Este projeto foi criado com o Json Server para fornecimento de dados Fake API. A configuração default está no endereço localhost, caso vá utilizar outro endereço IP para
testes no ambiente de desenvolvimento utilize o comando:
```yarn json-server server.json -p 3333 -H 192.168.0.2```
192.168.0.2 é um endereço de exemplo. Será necessário alterar a baseURL de acesso em src\services\api.ts.

#### yarn start
Inicia a aplicação pelo endereço hlocalhost utilizando a porta 3000.
