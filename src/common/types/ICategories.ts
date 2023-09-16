import { ICategory } from "./ICategory";

export interface ICategories {
    categories: ICategory[],
    fetch: () => void,
}