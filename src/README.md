# 📋 API de Tarefas

## Descrição
Este projeto foi desenvolvido como parte do **Trabalho de Recuperação da disciplina de Desenvolvimento Web**. Trata-se de uma API RESTful simples para gerenciamento de tarefas, utilizando Node.js e Express.

A API permite:
- Criar tarefas
- Listar todas as tarefas
- Atualizar tarefas existentes
- Deletar tarefas

---

## Tecnologias Utilizadas
- Node.js
- Express
- Postman (para testes)
- JavaScript

---

## Estrutura de Pastas

api-tarefas-do-projeto/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── tarefasController.js
│   ├── routes/
│   │   └── tarefas.js
├── prints/
├── .gitignore
├── package.json
├── server.js
└── README.md

---

## Como Rodar o Projeto

1. Instale as dependências:
```bash
npm install

Inicie o servidor:
node server.js

O servidor estará rodando em:
http://localhost:3000

Testes com Postman
1. Criar Tarefa (POST)

Método: POST
URL: http://localhost:3000/tarefas
Body → raw → JSON:
{
  "titulo": "Estudar para a prova"
}

2. Listar Tarefas (GET)

Método: GET
URL: http://localhost:3000/tarefas

3. Atualizar Tarefa (PUT)

Método: PUT
URL: http://localhost:3000/tarefas/1
Body → raw → JSON:
{
  "titulo": "Estudar para a prova de recuperação",
  "concluida": true
}

4. Deletar Tarefa (DELETE)

Método: DELETE
URL: http://localhost:3000/tarefas/1