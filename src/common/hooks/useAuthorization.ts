import { create } from "zustand";
import { IAuthorization } from "../types/IAuthorization";

const useAuthorization = create<IAuthorization>((set)=>({
    modal: false,
    auth: false,
    token: null,
    signIn:  (token) => {() => set((state) => ({ auth: true, token}))},
    signOut: () => set(() => ({ auth: false, token: null})),
    setModal: () => set((state)=> ({ modal: !state.modal}))
}))

export default useAuthorization;