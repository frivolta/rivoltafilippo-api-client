import * as React from 'react'
import {renderHook} from '@testing-library/react-hooks'
import {useAllPosts} from "./getAllPosts";
import {createWrapper} from "../../testUtils";
import {mockedPosts} from "../../mockData/mockedPosts";
import {usePost} from "./getPost";

const mockedPost = mockedPosts[0]

describe("query a single post", () => {
    test("succesfully query post", async () => {
        const {result, waitFor} = renderHook(() => usePost({id: 1}), {
            wrapper: createWrapper()
        })

        await waitFor(() => result.current.isSuccess)
        expect(result.current?.data).toStrictEqual(mockedPost)
    })
})