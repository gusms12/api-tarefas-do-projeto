const express = require('express');
const app = express();
const tarefasRoutes = require('./src/routes/tarefas');

app.use(express.json());
app.use('/tarefas', tarefasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
