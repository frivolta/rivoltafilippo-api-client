import {Post} from "../types/post.type";

export const mockedPosts: Post[] = [
    {
        id: 1,
        createdAt: new Date("2021-10-30T21:13:59.603Z"),
        updatedAt: new Date("2021-10-30T21:13:59.603Z"),
        title: "Write better JavaScript, function composition with pipe and compose",
        slug: "lorem-ipsum-title",
        content: "Lorem ipsum content",
        mediumUrl: "https://www.rivoltafilippo.com",
        redditUrl: "https://www.rivoltafilippo.com",
        publishedAt: new Date("2021-11-01"),
        img: "https://www.rivoltafilippo.com/content.jpg",
        isDraft: true
    },
    {
        id: 4,
        createdAt: new Date("2021-10-30T21:13:59.603Z"),
        updatedAt: new Date("2021-10-30T21:13:59.603Z"),
        title: "Typing React Context to avoid an undefined default value",
        slug: "lorem-ipsum-title-2",
        content: "Lorem ipsum content",
        mediumUrl: "https://www.rivoltafilippo.com",
        publishedAt: new Date("2021-11-01"),
        redditUrl: "https://www.rivoltafilippo.com",
        img: "https://www.rivoltafilippo.com/content.jpg",
        isDraft: true
    }
]