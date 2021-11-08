import * as React from 'react'
import {renderHook} from '@testing-library/react-hooks'
import {createWrapper} from "../../testUtils";
import {updatePostResult} from "../../mockData/mockedPosts";
import {DeletePostApi, useDeletePost} from "./deletePost";


describe("Delete post", () => {
    test("succesfully delete a post", async () => {
        const {result, waitFor} = renderHook(() => useDeletePost(), {
            wrapper: createWrapper()
        })

        result.current.mutate({id: 1})
        await waitFor(() => result.current.isSuccess)

        expect(result.current.data).toStrictEqual(true)
    })
})