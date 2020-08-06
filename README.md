# NLWeek2
Projeto Proffy feito através da semana NLWeek #2, promovida pela [Rocketseat](https://rocketseat.com.br/).

Link para acessar a [Demo](https://lkslima-nlweek2.vercel.app/)

<h1 align="center">
    <img style="width:70%" alt="proffy-lks" src="https://i.ibb.co/RTHwZsy/Imagem-Proffy.png" />
    <br>
</h1>

<p align="center">
    <img alt="npm" src="https://img.shields.io/badge/npm-v6.14.6-purple" />
    <img alt="node" src="https://img.shields.io/badge/node-v12.18.3-purple" />      
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark_tabs-dependências">Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-clonar-o-projeto">Clonagem do projeto</a>
</p>

## :rocket: Tecnologias

Este projeto foi baseado na **Next Level Week #2**, realizado pela [Rockseat](https://rocketseat.com.br/), utilizando das seguintes tecnologias:

-  [ReactJS](https://reactjs.org/)
-  [Node.js](https://nodejs.org/en/)
-  [TypeScript](https://www.typescriptlang.org/)

## :bookmark_tabs: Dependências

**Server (Node.js):**

<img alt="express" src="https://img.shields.io/badge/express-^4.17.1-orange" />  
<img alt="cors" src="https://img.shields.io/badge/cors-^2.8.5-orange" /> 
<img alt="knex" src="https://img.shields.io/badge/knex-^0.21.2-orange" /> 
<img alt="sqlite3" src="https://img.shields.io/badge/sqlite3-^5.0.0-orange" />

<br/>
<br/>

**Web (ReactJS):**
  
<img alt="axios" src="https://img.shields.io/badge/axios-^0.19.2-brightgreen" />
<img alt="react" src="https://img.shields.io/badge/react-^16.13.1-brightgreen" /> 
<img alt="react-dom" src="https://img.shields.io/badge/react--dom-^16.13.1-brightgreen" /> 
<img alt="react-router-dom" src="https://img.shields.io/badge/react--router--dom-^5.2.0-brightgreen" /> 
<img alt="react-scripts" src="https://img.shields.io/badge/react--scripts-3.4.1-brightgreen" /> 
<img alt="typescript" src="https://img.shields.io/badge/typescript-^3.7.5-brightgreen" />

<br/>
<br/>


## :information_source: Como clonar o projeto

Para clonar e executar esta aplicação, você precisará das seguintes tecnologias instaladas em sua máquina, com a respectiva versão ou - possivelmente - superior:
- Git v2.28.0;
- Node.js v12.18.3;
- npm v6.14.6.

```bash
# Clonando o repositório
$ git clone https://github.com/lucaswll/nlweek2.git

# Para cada uma das pastas (server, web and mobile), será necessário navegar até elas e utilizar dos seguintes comandos através de um terminal:

# Para o servidor (backend)
$ cd server
$ npm install
$ npm run knex:migrate
$ npm start

# Para o projeto web (frontend)
$ cd web
$ npm install
$ npm start
