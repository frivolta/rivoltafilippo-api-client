import {screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {renderWithClient} from "../../testUtils";
import {Auth0Provider} from "@auth0/auth0-react";
import App from "../../App";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {mockedPosts} from "../../mockData/mockedPosts";

describe("Create Post", () => {

    beforeEach(() => {
        const history = createMemoryHistory({initialEntries: ['/posts/1']})
        renderWithClient(
            <Router history={history}>
                <Auth0Provider clientId="__test_client_id__" domain="__test_domain__">
                    <App/>
                </Auth0Provider>
            </Router>)
    })
    it('should be defined', () => {
        expect(screen.getByTestId("edit-post-title")).toBeInTheDocument()
    });
    it('should show a fetching message', () => {
        expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    })
    it('should show same values as api result in the table', async () => {
        await waitFor(() => {
            //... more to comes
            expect(screen.getByTestId('post-title-field')).toHaveValue(mockedPosts[0].title)
            expect(screen.getByTestId('post-slug-field')).toHaveValue(mockedPosts[0].slug)
        })
    })

})