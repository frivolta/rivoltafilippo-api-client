// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { rest } from 'msw'
import { setLogger } from 'react-query'
import { setupServer } from 'msw/node'
import {mockedPosts, updatePostResult} from "./mockData/mockedPosts";
import {body} from "msw/lib/types/context";

export const handlers = [
    rest.get(
        '*/posts',
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    posts: [...mockedPosts]
                })
            )
        }
    ),
    rest.get(
        '*/posts/1',
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    post: mockedPosts[0]
                })
            )
        }
    ),
    rest.put(
        '*/posts/1',
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    ...updatePostResult
                })
            )
        }
    ),
    rest.post('*/posts', (req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json({
                post: mockedPosts[0]
            })
        )
    })
]

export const server = setupServer(...handlers)

jest.mock('@auth0/auth0-react', () => ({
    Auth0Provider: ({children}: any) => children,
    //withAuthenticationRequired: ((component:any, _) => component),
    useAuth0: () => {
        return {
            isLoading: false,
            user: {sub: "foobar"},
            isAuthenticated: true,
            loginWithRedirect: jest.fn(),
            logout: jest.fn()
        }
    }
}));


// Establish API mocking before all tests.
beforeAll(() => {
    server.listen()
})
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())



// React query
setLogger({
    log: console.log,
    warn: console.warn,
    // ✅ no more errors on the console
    error: () => {},
})


