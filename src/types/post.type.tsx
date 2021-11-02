export interface Post {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    slug: string;
    content: string;
    mediumUrl?: string;
    redditUrl?: string;
    publishedAt: Date;
    img: string;
    isDraft: boolean;
}