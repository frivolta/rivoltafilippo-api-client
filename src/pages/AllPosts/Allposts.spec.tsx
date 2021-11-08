import {screen, wait, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {renderWithClient} from "../../testUtils";
import {Auth0Provider} from "@auth0/auth0-react";
import App from "../../App";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {useDeletePost} from "../../api/post.api/deletePost";
import userEvent from "@testing-library/user-event";

const useDeletePostMock = () => jest.fn()

jest.mock('../../api/post.api/deletePost', () => ({
    ...jest.requireActual('../../api/post.api/deletePost'),
    useDeletePost: () => ({ok: true})
}))

describe("Navigation routes", () => {

    beforeEach(() => {
        const history = createMemoryHistory({initialEntries: ['/']})
        renderWithClient(
            <Router history={history}>
                <Auth0Provider clientId="__test_client_id__" domain="__test_domain__">
                    <App/>
                </Auth0Provider>
            </Router>)
    })
    it('should be defined', function () {
        expect(screen.getByTestId("Layout")).toBeInTheDocument()
    });
    it('should have a title', function () {
        expect(screen.getByTestId("all-posts-title")).toBeInTheDocument()
    });
    it('should show a table component', function () {
        expect(screen.getByTestId('table')).toBeInTheDocument()
    })

    it('should sucesfully show fetched data into the table', async () => {
        expect(await screen.findByText(/Write better JavaScript, function composition with pipe and compose/i)).toBeInTheDocument()
        expect(await screen.findByText(/Typing React Context to avoid an undefined default value/i)).toBeInTheDocument()
    })
    
})