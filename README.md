# Banco da Cubos Acadamy

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
> 4. Aplique o comando: `npm start` para rodar o backend

## Neste ponto o backend já deve está rodando, agora vamos para o Front-end...

### 1. Instalações necessárias:
*Com o clone do repositório já realizado, entre na pasta do frontend e execute os comandos abaixo:*
```bash
cd frontend
```
> 1. Instale as dependências com `npm i`
> 2. Instale o react-router com `npm i react-router-dom@6` neste caso estamos usando a versão 6.


### 4. Ferramentas utilizadas:

- [Node.js](https://nodejs.org/en/download/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [React](https://pt-br.reactjs.org/)
- [React Router](https://reactrouter.com/en/6.15.0)
- [Vite](https://vitejs.dev/)
- [Thunder Client](https://www.thunderclient.com/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads)
- [GitHub](https://github.com/)