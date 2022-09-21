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