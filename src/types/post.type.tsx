export interface Post {
    id: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    title: string;
    slug: string;
    content: string;
    mediumUrl?: string;
    redditUrl?: string;
    publishedAt: Date | string;
    img: string;
    isDraft: boolean;
}