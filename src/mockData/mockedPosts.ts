import {Post} from "../types/post.type";

export const mockedPosts: Post[] = [
    {
        id: 1,
        createdAt: "2021-10-25T20:19:44.230Z",
        updatedAt: "2021-10-30T21:13:59.603Z",
        title: "new title2",
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
        createdAt: "2021-10-30T21:07:06.289Z",
        updatedAt: "2021-10-30T21:14:12.331Z",
        title: "new title2",
        slug: "lorem-ipsum-title-2",
        content: "Lorem ipsum content",
        mediumUrl: "https://www.rivoltafilippo.com",
        publishedAt: "2021-11-01",
        redditUrl: "https://www.rivoltafilippo.com",
        img: "https://www.rivoltafilippo.com/content.jpg",
        isDraft: true
    }
]