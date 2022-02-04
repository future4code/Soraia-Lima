1 - a) Apaga a coluna salary.
b) Vai trocar o nome da coluna gender, por sex, com varchar(6) "string com até 6 caracteres";
c) Vai trocar apenas a quantidade de caracteres permitidos, que agora será 255. O nome da coluna permanecesse o mesmo. 
d )ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


2 - a) UPDATE Actor SET name="Moacyr Franco", birth_date = "1936-10-05" WHERE id = "003";
b) UPDATE Actor SET name = UPPER(name) WHERE name = "Juliana Paes"; // UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
c) UPDATE Actor SET name = "Douglas Lima", salary = "350000", birth_date = "1991-04-21", gender = "male" WHERE id ="005";
d) 13:45:34	UPDATE Actor SET name = "Ronaldo Aguiar" WHERE id ="010"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.172 sec; Ele executou o comando, mas não afetou nenhumalinha, pois esse id não existe. 


3 - a) DELETE FROM Actor WHERE name ="Jacinto Araujo";
b) DELETE FROM Actor WHERE (gender = "male") AND (salary > 1000000);

4 - a) SELECT MAX(salary)FROM Actor; 
b) SELECT MIN(salary)FROM Actor WHERE gender = "female"; 
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;

5 - a) A query contou as pessoas do sexo masculino e retornou essa quantidade, e fez a mesma coisa com o sexo feminino. 
b) SELECT name, id FROM Actor ORDER BY name DESC;
c) SELECT * FROM Actor ORDER BY salary;
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

6 - a) ALTER TABLE Filmes ADD data_limite_filme DATE;
b) ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT; 
c) UPDATE Filmes SET data_limite_filme = "2022-02-17" WHERE id = "001";
   UPDATE Filmes SET data_limite_filme = "2013-02-27" WHERE id = "002";
d) DELETE FROM Filmes WHERE id= "003"; Ele executou a minha query, mas não afetou nenhum linha, pois não encontrou nenhum id "003" na nossa tabela. 

7 - a) SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5; = 2;
b) SELECT AVG(avaliacao) FROM Filmes; = 9;
c) SELECT COUNT(*) FROM Filmes WHERE data_limite_filme < current_date(); = 1;
d) SELECT COUNT(*) FROM Filmes WHERE data_lancamento > current_date(); = 0;
e) SELECT MAX(avaliacao) FROM Filmes; = 10
f) SELECT MIN(avaliacao) FROM Filmes; = 7


8 - a) SELECT * FROM Filmes ORDER BY nome ASC; 
b) SELECT * FROM Filmes ORDER BY nome DESC LIMIT 5;
c) SELECT * FROM Filmes WHERE  data_limite_filme > current_date() ORDER BY data_limite_filme DESC LIMIT 3;
d) SELECT * FROM Filmes ORDER BY avaliacao DESC LIMIT 3;
