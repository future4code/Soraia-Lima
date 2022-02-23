import { USER_ROLES } from "../types/types";

export class User {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
        protected password: string,
        protected role: USER_ROLES,
        protected following?: object[]
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

    public getRole(): string {
        return this.role
    }

    public getFllowing(): object[] | undefined {
        return this.following
    }
}