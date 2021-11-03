import {fireEvent, render, screen} from "@testing-library/react";
import {Auth0Provider} from '@auth0/auth0-react';
import "@testing-library/jest-dom/extend-expect";
import {Layout} from "../components/Layout/Layout";
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import App from "../App";
import React from "react";
import {renderWithClient} from "../testUtils";


describe("Navigation routes", () => {
    beforeEach(() => {
        const history = createMemoryHistory({initialEntries: ['/']})

        renderWithClient(
            <Router history={history}>
                <Auth0Provider clientId="__test_client_id__" domain="__test_domain__">
                    <App/>
                </Auth0Provider>
            </Router>
        )
    })
    it('should render the first component when logged in on base route', function () {
        expect(screen.getByTestId("Layout")).toBeInTheDocument()
    });

    it("should redirect the user to create post page on create post click", async()=>{
        const createPostButton = screen.getByTestId("create-post-button")
        fireEvent.click(createPostButton)
        await expect(screen.getByTestId("create-post-title")).toBeInTheDocument()
    })
})
