export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN",
 }

//  export type loginInputDTO = {
//     email: string,
//     password: string
// }

// export type signupInputDTO = {
//     name: string,
//     email: string,
//     password: string
// }

export class User {

    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected password: string,
        protected role: USER_ROLES

    ) { }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }

    public getRole(): USER_ROLES {
        return this.role
    }

    static toUserModel(data: User) {
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
} 