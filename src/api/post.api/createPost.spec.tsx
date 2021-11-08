import * as React from 'react'
import {renderHook} from '@testing-library/react-hooks'
import {createWrapper} from "../../testUtils";
import {mockedPosts} from "../../mockData/mockedPosts";
import {useCreatePost} from "./createPost";
import {CreatePostInput} from "../../types/post.type";

const mockedMutationVariables: CreatePostInput = {
    title: "post title",
    slug: "post-slug",
    content: "post content",
    publishedAt: new Date(),
    img: "https://www.img.it",
    isDraft: true
}

describe("Create post", () => {
    test("succesfully create a post", async () => {
        const {result, waitFor} = renderHook(() => useCreatePost(), {
            wrapper: createWrapper()
        })
        result.current.mutate(mockedMutationVariables)
        await waitFor(() => result.current.isSuccess)

        expect(result.current.data).toStrictEqual(mockedPosts[0])
    })
})