let tarefas = [];

exports.listarTarefas = (req, res) => {
  res.json(tarefas);
};

exports.criarTarefa = (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: req.body.titulo,
    concluida: false
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
};

exports.atualizarTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.titulo = req.body.titulo || tarefa.titulo;
    tarefa.concluida = req.body.concluida ?? tarefa.concluida;
    res.json(tarefa);
  } else {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }
};

exports.deletarTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  tarefas = tarefas.filter(t => t.id !== id);
  res.status(204).send();
};
