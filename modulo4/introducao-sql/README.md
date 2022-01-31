## Exercício 31/01/2022.

1 - a) VARCHAR(255) é utilizado para indicar que aquele campo sera do tipo string, com até 255 caracteres. 
DATE representa uma data no formato YYYY-MM-DD.
NOT NULL não aceita um valor null naquele campo. 
PRIMARY KEY é a chave primaria daquele item.

b) SHOW DATABASES trouxe o as informações do meu banco de dados.
SHOW TABLES trouxe as tabelas que eu criei.

c) DESCRIBE Actor touxe todos os campos da tabela Actor.

2 - a) Sim. - b) Sim - c) Sim

3 - b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' 0,157 seg. Isso aconteceu porque nossa PK está duplicada. 

c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 0,156 s - Está faltando os campos (birth_date, gender)

d) Código de erro: 1364. O campo 'nome' não tem um valor padrão - Está faltando o campo name. Responsta INSERT INTO Ator (id, nome, salário, data_nascimento, sexo) VALUES( "004", "Jacinto Araujo", 400000, "1949-04-18", "masculino" ) 1 linha(s) afetada(s) 0,172 segundos

e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

4- a) é um  pedido, consulta, solicitação ao nosso banco de dados. 

b) SELECT  * FROM Actor WHERE (name NOT LIKE 'A%') AND salary > 350000;

c) SELECT * FROM Actor WHERE (name LIKE '%g%' OR name LIKE "%G%");

d) SELECT * FROM Actor WHERE (name LIKE '%a%' OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

5 - a) TITLE não possui uma restrição na qunatidade de caracteres. 
CREATE TABLE Filmes (
 id VARCHAR(255) PRIMARY KEY,
 nome VARCHAR (255) NOT NULL UNIQUE,
 sinopse TEXT NOT NULL, 
 data_lancamento DATE NOT NULL,
 avaliacao INT NOT NULL);

 b, c, d, e ) INSERT INTO Filmes(id, nome, sinopse, data_lancamento, avaliacao)
 VALUES(
 '001',
 'Se Eu Fosse Você',
 'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
 '2006/06/01',
 7
 ),
 (
 '002',
 'Doce de mãe',
 'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',
 '2012/12/27',
 10),
 (
 '003',
 'Dona Flor e Seus Dois Maridos',
 'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',
 '2017/11/02',
 8
 ),
 (
 '004',
 'qualquer gato vira-lata',
 'O filme acompanha um triângulo amoroso em que Tati, uma jovem abandonada pelo namorado Marcelo (um rapaz boa-vida, despreocupado e convencido), busca ajuda com Conrado, um cético professor de biologia que trabalha na faculdade onde estuda Tati.',
 '2011/06/10',
 10);

 6 - a)  SELECT id, nome, avaliacao FROM Filmes WHERE id LIKE "002"

 b) SELECT * FROM Filmes WHERE nome LIKE "Se Eu Fosse Você";

 c)  SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;

 7 - a) SELECT * FROM Filmes WHERE (nome LIKE "%vida%");

 b) SELECT * FROM Filmes WHERE (nome LIKE "%gato%") OR (sinopse LIKE "%gato%");

 c) SELECT * FROM Filmes WHERE data_lancamento > "2000/01/01";

 d) SELECT * FROM Filmes WHERE (data_lancamento > "2000/01/01") AND (nome LIKE "%gato%") OR (sinopse LIKE "%gato%") AND (avaliacao >= 7);

