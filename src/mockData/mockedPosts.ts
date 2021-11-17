import {Post} from "../types/post.type";
import {Author} from "../types/Author.type";
import {mockedAuthor} from "./mockedAuthors";

export const mockedPosts: Post[] = [
    {
        id: 1,
        createdAt: "2022-10-30T21:13:59.603Z",
        updatedAt: "2021-10-30T21:13:59.603Z",
        excerpt: "excerpt",
        title: "Write better JavaScript, function composition with pipe and compose",
        slug: "lorem-ipsum-title",
        content: "Lorem ipsum content",
        mediumUrl: "https://www.rivoltafilippo.com",
        redditUrl: "https://www.rivoltafilippo.com",
        publishedAt: "01/11/2021",
        img: "https://www.rivoltafilippo.com/content.jpg",
        isDraft: true,
        author: {...mockedAuthor, posts: []}
    },
    {
        id: 4,
        createdAt: "2021-10-30T21:13:59.603Z",
        updatedAt: "2021-10-30T21:13:59.603Z",
        excerpt: "excerpt",
        title: "Typing React Context to avoid an undefined default value",
        slug: "lorem-ipsum-title-2",
        content: "Lorem ipsum content",
        mediumUrl: "https://www.rivoltafilippo.com",
        publishedAt: "01/11/2021",
        redditUrl: "https://www.rivoltafilippo.com",
        img: "https://www.rivoltafilippo.com/content.jpg",
        isDraft: true,
        author: {...mockedAuthor, posts: []}
    }
]

export const updatePostResult: Post = {
    id: 1,
    createdAt: "2022-10-30T21:13:59.603Z",
    updatedAt: "2021-10-30T21:13:59.603Z",
    excerpt: "excerpt",
    title: "new post title",
    slug: "lorem-ipsum-title",
    content: "Lorem ipsum content",
    mediumUrl: "https://www.rivoltafilippo.com",
    redditUrl: "https://www.rivoltafilippo.com",
    publishedAt: "01/11/2021",
    img: "https://www.rivoltafilippo.com/content.jpg",
    isDraft: true,
    author: {...mockedAuthor, posts: []}
}

