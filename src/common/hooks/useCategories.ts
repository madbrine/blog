import { create } from 'zustand';
import { ICategories } from '../types/ICategories';

const useCategories = create<ICategories>((set) => ({
    categories: [
        {
            id: 1,
            imageUrl: "https://leonardo.osnova.io/68e0e807-2b43-55b9-9b76-b3f0f76f3d32/-/scale_crop/64x64/-/format/webp/",
            text: "Моя жизнь"
        },
        {
            id: 2,
            imageUrl: "https://leonardo.osnova.io/04607ca7-338b-561e-9403-3f06a70ef789/-/scale_crop/64x64/-/format/webp/",
            text: "Крутые истории"
        },
        {
            id: 3,
            imageUrl: "	https://leonardo.osnova.io/7e34636c-3189-5ba0-a2b3-c1c9ee18b5ba/-/scale_crop/64x64/-/format/webp/",
            text: "Карьера"
        },
        {
            id: 4,
            imageUrl: "https://leonardo.osnova.io/d66009fe-9bf0-52da-bdbf-4c758eba39e7/-/scale_crop/64x64/-/format/webp/",
            text: "Смешное"
        },
        {
            id: 5,
            imageUrl: "https://leonardo.osnova.io/81132c2d-ddb6-0127-19d6-e1d1293194b1/-/scale_crop/64x64/-/format/webp/",
            text: "Разное"
        },
    ],
    fetch: async () => {
        // here axios fetch data of actual categories
    },
}));

export default useCategories;