export interface Post {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    slug: string;
    content: string;
    mediumUrl?: string;
    redditUrl?: string;
    publishedAt: string;
    img: string;
    isDraft: boolean;
}