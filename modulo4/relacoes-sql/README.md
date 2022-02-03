EXERCÍCIO 1
a) É uma chave que permite que relacionemos informações de tabelas diferentes, em uma mesma tabela. 

b) CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);
INSERT INTO Rating() VALUES
("050", "Esse filme é ótimo", 7, "001")
("051", "Amei o filme, excelente!", 10, "002"),
("052", "Dahoraaaaaaaaa", 7, "003"),
("053", "Nossa esse é o melhor filme que eu já assitir", 10, "004"),
("054", "Muiiiiiiiiiiiiito bom", 9, "007");

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`database-name`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`)). 
Esse erro acontece, porque a nossa FOREIGN KET, não achou a referência de id que passamo pra ela.

d) ALTER TABLE Filmes DROP COLUMN avaliacao; 

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`database-name`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`)). Não foi possível excluir o filme, pois o mesmo está vinculado a uma chave estrangeira, FOREIGN KEY. 

EXERCÍCIO 2 
a) Essa tabela, vai servi para podermos juntar os atores e os filmes, sendo assim, vamos poder ver, quais atores fizeram qual filme, e também ver os atores que participam de um determinado filme. 

b) INSERT INTO MoveisCast() VALUES
( "001", "003" ),
( "001", "005"),
( "002", "005" ),
( "002", "007" ),
( "003", "003" ),
( "003", "007"),
( "004", "003" ),
( "004", "005" ),
( "004", "007" )
;

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`database-name`.`MoveisCast`, CONSTRAINT `MoveisCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)). Não foi possivel, realizar essaa query, porque o ator não existe, sendo assim deu um erro na nossa FOREIGN KEY.

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`database-name`.`MoveisCast`, CONSTRAINT `MoveisCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)). Não foi possívell deletar esse ator, pois o mesmo possui relação na tabela MoveisCast, com alguns filmes, ai deu erro na nossa FOREIGN KEY. 
 
EXERCÍCIO 3 
a) Essa query trouxe os filmes, com as suas respectivas avaliações. O operador ON, serve para essa tabela vir com as informações de avaliações juntamnete com o seu respectivos filmes, pois ele é a condição de retorno. 

b) SELECT Filmes.id, nome, rate as avaliação FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;

DESAFIOS 
4 - a) SELECT Filmes.id, nome, rate as avaliação, comment FROM Filmes LEFT JOIN Rating ON Filmes.id = Rating.movie_id;

b) SELECT Filmes.id, Filmes.nome, actor_id FROM Filmes LEFT JOIN MoveisCast ON MoveisCast.move_id = Filmes.id;

c) SELECT AVG(rate), Filmes.id, Filmes.nome FROM Filmes LEFT JOIN Rating ON Filmes.id = Rating.movie_id GROUP BY Filmes.id;

5 - a) 1º Ela faz uma comparacao de Filmes com MoveisCast e traz essas informações de todos os filmes. 2º traz uma tabela, cujo os filmes estejam avaliados e também tras as informações do tores. 

b) SELECT Filmes.id, Filmes.nome, actor_id, name FROM Filmes LEFT JOIN MoveisCast ON MoveisCast.move_id = Filmes.id
JOIN Actor a ON a.id = MoveisCast.actor_id;

c) Error Code: 1054. Unknown column 'Actor.id' in 'field list'. Ele não consegue achar a coluna Actor.id. 

d) SELECT Filmes.id, Filmes.nome, Actor.id, Actor.name, Rating.rate, Rating.comment FROM Filmes 
LEFT JOIN Rating ON Filmes.id = Rating.movie_id
LEFT JOIN MoveisCast ON Rating.movie_id = MoveisCast.move_id
JOIN Actor ON MoveisCast.actor_id = Actor.id;

6 -a) de referencia.

b) Tabela do Oscar: 
CREATE TABLE Oscar (
nome VARCHAR(255),
id VARCHAR(255));

Tabele de premiações, que relaciona o filme com os respectvo premios


