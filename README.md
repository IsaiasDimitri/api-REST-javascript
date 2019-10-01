# exemplo de api em javascript

Usando express, fiz uma api, que via requisições, cadastra, exclui e atualiza projetos.
Utilizo conceitos básicos de middleware, requisições HTTP com parâmetros e
respostas às mesmas. Recomendo usar, como ferramenta para testar as requisições,
o insomnia, ou o postman.
Minha estrutura para guardar os projetos, é apenas uma lista simples. Mas o conceito
se aplica à persistencia em banco de dados.

Tenha instalado o node, o yarn e rode:

- yarn install

O formato das requisições estão explicados abaixo:

-> /projetos (GET)
retorna todos os projetos

-> /projetos (POST)
cria um projeto, recebendo um json com o formato:

- {
id:"some_id",
tittle:"some_tittle",
tasks:[
"task_1",
"task_2",
"...",
"task_N"
],
}

-> /projetos/{some_id}/tasks (POST)
Adiciona uma nova task a projeto que existe (com o "some_id"), recebendo seguinte json:
- {
tittle: "some_tittle
}

-> /projetos/{some_id} (PUT)
Atualiza o titulo de um projeto com o id especificado
- {
tittle: "some_tittle"
}

-> /projetos/{some_id} (DELETE)
Deleta um projeto, especificando um id
