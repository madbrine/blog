export interface IAuthorization {
    modal: boolean,
    auth: boolean,
    token: string | null,
    signIn: (token: string | null) => void,
    signOut: () => void,
    setModal: () => void,
}