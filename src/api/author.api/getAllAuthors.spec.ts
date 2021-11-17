import * as React from 'react'
import {renderHook} from '@testing-library/react-hooks'
import {createWrapper} from "../../testUtils";
import {useAllAuthors} from "./getAllAuthors";
import {mockedAuthors} from "../../mockData/mockedAuthors";

describe("query all authors", () => {
    test("succesfully query authors", async () => {
        const {result, waitFor} = renderHook(() => useAllAuthors(), {
            wrapper: createWrapper()
        })

        await waitFor(() => result.current.isSuccess)
        expect(result.current?.data).toStrictEqual(mockedAuthors)
    })
})