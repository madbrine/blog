import { IPostFullData } from "../types/IPostFullData";
import { fakePostFullData } from "./fakePostFullData";

type Props = string | string[] | undefined
export const getPostFullData = (id: Props): IPostFullData => {
    return fakePostFullData
}