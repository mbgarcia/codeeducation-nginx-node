# Desafio Nginx com Node.js

Nesse desafio estamos colocando em prática o que aprendemos em relação a utilização do nginx como proxy reverso.

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

</p>

<p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>

<p> 

</p>

<p>- Lista de nomes cadastrada no banco de dados.</p>

<p> 

Para realizar a chamada, basta baixar o projeto do github e executar:

```
docker-compose up -d

```

A aplicação ficará disponível na porta 8080.

# Erros encontrados no desafio

Erro

 ./.docker/entrypoint.sh - fork/exec ./.docker/entrypoint.sh: no such file or directory

motivos:

O caminho para o entrypoint.sh está incorreto ou ele não existe dentro do container
O cabeçalho no entrypoint.sh, como #/bin/bash chamou o bash, mas ele não está instalado no container.
O caminho para o .docker-entrypoint.sh está incorreto no docker-compose.yaml, não está condizente com a pasta que o arquivo está.
O desenvolvimento está no Windows e o arquivo está no modo CRLF em vez de LF que é utilizado em Linux, este modo define o modo dos caracteres de final de linha e final de arquivo, arquivos executáveis no Docker devem estar no modo do Linux, ou seja, LF. Se você clonou o projeto do curso via Git no Windows ou usando um problema, use o Git do problema WSL.


Erro

Subir o node: "Error: Cannot find module 'express'"

Observar se está montando volume e deixar como anônimo no docker-compose