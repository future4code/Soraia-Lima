class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    // 4 e 5
    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

// const user1 = new User("1", "douglas@gmail.com", "douglas", "123456")

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

// const consumidor1 = new Customer("2", "rodrigo@gmail.com", "Rodrigo", "12345", "789.897.569.785.52")

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const cliente1: Client = {
    name: "Amanda",
    registrationNumber: 258963,
    consumedEnergy: 50,
    calculateBill: (): number => {
        return 2
    }
}

// console.log(cliente1.calculateBill())

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}
// const local1 = new Place("000000000")

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) { super(cep) }

    //3
    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

const residencia1 = new Residence(10, "000.729-006")
// console.log(residencia1)

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) { super(cep) }

    //3
    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

const comercio1 = new Commerce(7, "000.729-755")
// console.log(comercio1)

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) { super(cep) }

    //3
    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

const induntria1 = new Industry(20, "000.729-298")
// console.log(induntria1)

export class ResidentialClient extends Residence implements Client {

    constructor(
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string

    ) { super(residentsQuantity, cep) }

    public getCpf() {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}

export class CommercialClient extends Commerce implements Client {
    constructor(
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string
    ) { super(floorsQuantity, cep) }

    public getCnpj() {
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}

const cliente2 = new CommercialClient("001.001.001-85", "ahhhhh", 10, 15, 5, "78585-96")
// console.log("valor a pagar", cliente2.calculateBill())

export class IndustrialClient extends Industry implements Client {

    constructor(
        private RegistroIndividual: number,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        machinesQuantity: number,
        cep: string
    ) { super(machinesQuantity, cep) }

    getRegistroIndividual() {
        return this.RegistroIndividual
    }

    public calculateBill(): number {
        return (this.consumedEnergy * 0.45) + (this.machinesQuantity * 100)
    }
}

const industria1 = new IndustrialClient(10, "bbbbbbbb", 7, 80, 10, "789.558.-98")
// console.log(industria1.getCep())
// console.log(industria1.calculateBill())

// DESAFIO

class Employee extends User {

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        protected admissionDate: Date,
        protected baseSalary: number
    ) {
        super(id, email, name, password)
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    public getBaseSalary(): number {
        return this.baseSalary
    }

    public getAdmissionDate(): Date {
        return this.admissionDate
    }

    // 8 
    public calculateTotalSalary(): number {
        return this.baseSalary + 400.00
    }
}

const funcionario1 = new Employee("5", "soraia@gmail.com", "Soraia", "04789", new Date("2022-01-08"), 3000)
// console.log(funcionario1)
// console.log(funcionario1.calculateTotalSalary())

class Seller extends Employee{}

const vendedor1 = new Seller("6", "keyla@gmail.com", "Keylas", "058798", new Date("2005-08-15"), 2.500)
console.log(vendedor1.getId())
console.log(vendedor1.getEmail())
console.log(vendedor1.getName())
console.log(vendedor1.getAdmissionDate())
console.log(vendedor1.getBaseSalary())


