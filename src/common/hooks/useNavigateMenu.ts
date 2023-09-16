import { create } from 'zustand';
import { INavigateMenu } from '../types/INavigateMenu';
const useNavigateMenu = create<INavigateMenu>((set) => ({
    isOpen: true,
    setOpen: () => set((state) => ({ isOpen: !state.isOpen})),
}));

export default useNavigateMenu;