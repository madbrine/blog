import { IPostData } from "./IPostData";

export interface IPostFullData extends IPostData {
    content?: {
        type: 'h' | 'p' | 'q' | 'img',
        data: string,
    }[],
    commentaries?: {
        name: string,
        date: string,
        text: string,
    }[]
}