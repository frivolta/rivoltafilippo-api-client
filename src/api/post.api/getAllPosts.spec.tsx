import * as React from 'react'
import {renderHook} from '@testing-library/react-hooks'
import {useAllPosts} from "./getAllPosts";
import {createWrapper} from "../../testUtils";
import {mockedPosts} from "../../mockData/mockedPosts";

describe("query all posts", () => {
    test("succesfully query posts", async () => {
        const {result, waitFor} = renderHook(() => useAllPosts(), {
            wrapper: createWrapper()
        })

        await waitFor(() => result.current.isSuccess)
        expect(result.current?.data).toStrictEqual(mockedPosts)
    })
})