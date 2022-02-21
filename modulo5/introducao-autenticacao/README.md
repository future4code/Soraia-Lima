1 -
a) Sim, pois quando usamos o UUID, ele nos trás um id contendo string e numeros, por isso usamos string, para poder aceitar todos os caracteres necessários.

2 -
a) Primeiro: declara qual tabela será usada, segundo: usa o knex para poder se conectar ao BD, terceiro: cria uma função asíncrona para adicionar um novo usuário a tabela do BD. 

b) CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)
3 -
a) Para garantir que o que recebemos do nosso .env é uma string, pois o typescript acha que pode vir outro tipo. 

7 -
a) Ela diz que o payload pode assumir qualquer tipo. 


