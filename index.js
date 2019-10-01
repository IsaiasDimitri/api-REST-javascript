const express = require("express");
const server = express();
server.use(express.json());

const projetos = [];
contador = 0;

//Middlewares
server.use((req, res, next) => {
  contador++;
  console.log(`Feitas ${contador} requisições até agora`);
  next();
});

function checkIfExists(req, res, next) {
  for (let i = 0; i < projetos.length; i++) {
    const p = projetos[i];
    if (p.id == req.params.id) {
      req.p = p;
      next();
      return res.status(200).json(projetos);
    }
  }

  return res.status(400).json({ error: "Projeto não encontrado!" });
}

//Rotas

server.get("/projetos", (req, res) => {
  return res.json(projetos);
});

server.post("/projetos", (req, res) => {
  projetos.push({
    id: req.body.id,
    tittle: req.body.tittle,
    tasks: req.body.tasks
  });

  return res.json(projetos);
});

server.post("/projetos/:id/tasks", (req, res) => {
  for (let i = 0; i < projetos.length; i++) {
    const p = projetos[i];
    if (p.id == req.params.id) {
      p.tasks.push(req.body.tittle); //Nome da task!
      return res
        .status(200)
        .send(`Task para o projeto ${req.params.id} adicionada!`);
    }
  }
  return res.status(400).send("Projeto não existe!");
});

server.put("/projetos/:id", checkIfExists, (req, res) => {
  req.p.tittle = req.body.tittle;
});

server.delete("/projetos/:id", checkIfExists, (req, res) => {
  projetos.splice(projetos.indexOf(req.p), 1);
});

server.listen(3000);
