import {Post} from "./post.type";

export interface Author {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    picture: string;
    posts?: Post[]
}


