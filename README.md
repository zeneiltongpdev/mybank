# Banco da Cubos Acadamy

## Descrição do Projeto:

O Banco da Cubos Academy é uma aplicação bancária online desenvolvida em Node.js com a utilização do framework Express e Banco de Dados utilizando o MongoDB.
É uma plataforma segura e eficiente que permite aos usuários realizar diversas operações financeiras, incluindo a criação de contas, gerenciamento de saldos e registro de transações. 

A aplicação oferece as seguintes funcionalidades principais:

> 1. Cadastro de Contas: Os usuários podem criar facilmente contas bancárias fornecendo informações pessoais básicas, como nome, e-mail, usuário e senha.
> 2. Login e Autenticação: A aplicação garante a segurança dos dados dos usuários com um sistema de autenticação robusto, exigindo login com senha para acessar as contas.
> 3. Gestão de Contas: Os clientes podem visualizar informações detalhadas de suas contas, incluindo saldo atual, histórico de transações e informações pessoais.
> 4. Movimentações Financeiras: Os usuários podem realizar diversas transações financeiras, incluindo depósitos, saques e transferências entre contas.
> 5. Histórico de Transações: Cada transação é registrada e exibida no histórico de transações do usuário, fornecendo um registro completo das atividades financeiras.
> 6. Segurança: A aplicação prioriza a segurança, implementando medidas de segurança robustas para proteger informações sensíveis e prevenir atividades fraudulentas com JWT.

Este projeto visa fornecer uma solução completa e escalável para serviços bancários online, com foco na segurança e facilidade de uso. Ele utiliza tecnologias modernas como Node.js e Express para criar uma aplicação web confiável e de alto desempenho.

## Por onde Comerçar?
```bash
# Comerce pelo Back-end
# Clone o repositório
# Instale as dependências
# Rode o Back-end
# siga os passos abaixo
```
### 1. Clone o repositório
```bash
git@github.com:zeneiltongpdev/bank-of-cubos.git
```
### 2. Instalações necessárias:
*Após o clone do repositório, entre na pasta do back-end e execute os comandos abaixo:*
```bash
cd backend
```
> 1. Instale as dependências com `npm i`
> 2. Instale o express com `npm i express`
> 3. Instale o nodemon com `npm i -D morgan nodemon`

*Instale as dependências abaixo para o banco de dados caso algo não funcione:*
> 4. Instale o mongoose com `npm i mongoose`
> 5. Instale o dotenv com `npm i dotenv` (opcional)
> 6. Instale o cors com `npm i cors`

### 3. Rode o projeto:
**Antes de rodar o projeto, certifique-se de que o banco de dados está rodando.**

*Neste caso o banco de dados é o MongoDB. [Baixe, instale e execute no o Mongo no seu Workstation](https://www.mongodb.com/try/download/community)* (estação de trabalho).
#### Siga o passo a passo para instalção e execução do MongoDB:
- [Windows:](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
<details>
    <summary>Comandos no Windows Usando o CMD | Clique para Expandir</summary>

> 1. Abra o CMD na pasta do projeto
> 2. Execute o comando: `net start MongoDB` para iniciar o banco de dados
> 3. Execute o comando: `sc.exe query MongoDB` para verificar o status do banco de dados
> 4. Execute o comando: `net stop MongoDB` para parar o banco de dados
> 5. Execute o comando: `net start MongoDB` novamente para reiniciar o banco de dados
</details>

- [MacOS:](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
<details>
    <summary>Comandos no MacOS Usando o Terminal | Clique para Expandir</summary>

> 1. Abra o terminal na pasta do projeto
> 2. Execute o comando: `brew services start mongodb-community@4.4` para iniciar o banco de dados
> 3. Execute o comando: `brew services list` para verificar o status do banco de dados
> 4. Execute o comando: `brew services stop mongodb-community@4.4` para parar o banco de dados
> 5. Execute o comando: `brew services start mongodb-community@4.4` novamente para reiniciar o banco de dados
</details>

- [Linux:](https://www.mongodb.com/docs/manual/administration/install-on-linux/)
<details>
    <summary>Comandos no Linux Usando o Terminal | Clique para Expandir</summary>

> 1. Abra o terminal na pasta do projeto
> 2. Execute o comando: `sudo systemctl start mongod` para iniciar o banco de dados
> 3. Execute o comando: `sudo systemctl status mongod` para verificar o status do banco de dados
> 4. Execute o comando: `sudo systemctl stop mongod` para parar o banco de dados
> 5. Execute o comando: `sudo systemctl restart mongod` para reiniciar o banco de dados
</details>

#### E então, use o comando abaixo para rodar o projeto:
> Aplique o comando: `npm start` para rodar o backend

#### O backend está rodando na porta 3000, então acesse: [http://localhost:3000](http://localhost:3000)

## Para realização e a execução dos testes, foi utilizado o Thunder Client neste projeto:
**Recomendo a utilização do Mesmo**
> 1. Foi disponibilizado um arquivo com as rotas para facilitar a execução dos testes, basta importar o arquivo `thunder-collection_bank-of-cubos.json` no Thunder Client.
> 2. O arquivo está na pasta `backend/src/utils/` do projeto.

## Neste ponto o backend já deve está rodando, agora vamos para o Front-end...

*Com o clone do repositório já realizado, entre na pasta do frontend e execute os comandos abaixo:*
```bash
cd frontend
```
### Instalações necessárias:
> 1. Instale as dependências com `npm i`
> 2. Instale o Axios + Routes com `npm i axios react-router-dom@6`
> 3. E por ultimo, execute o comando `npm run dev` para rodar o frontend. (Que ainda está em desenvolvimento).

## Ferramentas e Tecnologias Utilizadas:

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![Node.js](https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/-Express-black?style=flat-square&logo=express)
![Mongoose](https://img.shields.io/badge/-Mongoose-black?style=flat-square&logo=mongoose)
![MongoDB](https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb)
![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)
![React Router](https://img.shields.io/badge/-React%20Router-black?style=flat-square&logo=react-router)
![Vite](https://img.shields.io/badge/-Vite-black?style=flat-square&logo=vite)
![Thunder Client](https://img.shields.io/badge/-Thunder%20Client-black?style=flat-square&logo=thunder-client)
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-black?style=flat-square&logo=visual-studio-code)
![Git](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github)

## Autor:
- [Zeneilton Granja de Paulo](https://github.com/zeneiltongpdev)
