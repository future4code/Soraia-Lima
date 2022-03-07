export enum USER_ROLE {
    ADMIN = "ADMIN",
    NOMAL = "NORMAL"
}

export type AuthenticationData = {
    id: string,
    role: USER_ROLE
}