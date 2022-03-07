1 -
a) Round é a resposta do nosso COST, números de ciclo iterativos. 
Salt é uma string aleatória adicionada na nossa senha, na hora da criptação. 
O valor recomendado para o round é 12, pois tem uma boa iteração para criptação e não demora tanto para a resposta. 
Eu usei 12, pois o Bruno disse que é o valor que vamos usar durante o curso. 

2 -
a) A de cadastro, para poder enviar a senha já criptografada.
d) Sim, pois a senha do usuário voltaria criptografada. Mas tem um problema, não conseguiremos mais retornar a senha, pois esse criptografia é irreversível. Sendo assim, só conseguiremos retornar id e email. 

3 -
a) ALTER TABLE User ADD role ENUM("ADMIN", "NORMAL")  DEFAULT "NORMAL"
