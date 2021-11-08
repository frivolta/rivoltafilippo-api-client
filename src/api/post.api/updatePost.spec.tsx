import * as React from 'react'
import {renderHook} from '@testing-library/react-hooks'
import {createWrapper} from "../../testUtils";
import {mockedPosts, updatePostResult} from "../../mockData/mockedPosts";
import {UpdatePostInput} from "../../types/post.type";
import {useUpdatePost} from "./updatePost";

const mockedMutationVariables: UpdatePostInput = {
    id: 1,
    title: "new post title",
    slug: "post-slug",
    content: "post content",
    publishedAt: new Date(),
    img: "https://www.img.it",
    isDraft: true
}


describe("Update post", () => {
    test("succesfully update a post", async () => {
        const {result, waitFor} = renderHook(() => useUpdatePost(), {
            wrapper: createWrapper()
        })
        result.current.mutate(mockedMutationVariables)
        await waitFor(() => result.current.isSuccess)

        expect(result.current.data).toStrictEqual(updatePostResult)
    })
})