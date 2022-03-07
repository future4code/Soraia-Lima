// 1 - a) O constructor serve para inicializar as variáveis. É o primeiro método que é executado quando chamamos nossa classe. Caso não criemos um constructor ele é executado mesmo assim, porém vazio. 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    public getCPF():string {
        return this.cpf
    }

    public getName():string {
        return this.name
    }

    public getTransactions(): Transaction[] {
        return this.transactions
    }

    public setTransactions(newTransactions: Transaction) {
        this.transactions.push(newTransactions)
    }

}

// b  - foi impresso a mensagem 1 vez.
const user1 = new UserAccount("000.000.000-00", "David", 20)
const user2 = new UserAccount("000.000.000-00", "Douglas", 30)

// c - Somente dentro da classe, ou pelos métodos getters (pegar infomações) ou setters (modificar).

// 2 
class Transaction {
    private description: string;
    private value: number;
    private date: string

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getDescription() {
        return this.description
    }

    public getValue() {
        return this.value
    }

    public getDate() {
        return this.date
    }
}

const transacao = new Transaction ("deposito", 200.00, "14/02/2022")
user1.setTransactions(transacao)
//console.log(transacao)

class Bank {
    private accounts: UserAccount[] = []

    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }

    public getAccounts(): UserAccount[]{
        return this.accounts
    }

    public setAccounts(accounts:UserAccount){
        this.accounts.push(accounts)
    }
}

const contas = new Bank([user1])
contas.setAccounts(user2)

console.log(contas)