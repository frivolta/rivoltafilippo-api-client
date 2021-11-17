import {Author} from "./Author.type";

export interface Post {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    excerpt: string;
    slug: string;
    content: string;
    mediumUrl?: string;
    redditUrl?: string;
    publishedAt: string;
    img: string;
    isDraft: boolean;
    author?: Author
}

export interface CreatePostInput extends Omit<Post, "createdAt" | "updatedAt" | "id"> {
}

export interface UpdatePostInput extends Omit<Post, "createdAt" | "updatedAt"> {

}

export interface GetPostInput {
    id: string | number
}

export interface DeletePostInput {
    id: string | number
}
