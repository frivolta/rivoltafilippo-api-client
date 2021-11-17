import {Post} from "../types/post.type";

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
        publishedAt: "2021-11-01",
        img: "https://www.rivoltafilippo.com/content.jpg",
        isDraft: true
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
        publishedAt: "2021-11-01",
        redditUrl: "https://www.rivoltafilippo.com",
        img: "https://www.rivoltafilippo.com/content.jpg",
        isDraft: true
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
    publishedAt: "2021-11-01",
    img: "https://www.rivoltafilippo.com/content.jpg",
    isDraft: true
}

