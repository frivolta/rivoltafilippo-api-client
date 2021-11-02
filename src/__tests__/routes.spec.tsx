import {render, screen} from "@testing-library/react";
import {Auth0Provider} from '@auth0/auth0-react';
import "@testing-library/jest-dom/extend-expect";
import {Layout} from "../components/Layout/Layout";
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import App from "../App";
import React from "react";


describe("Navigation routes", () => {
    beforeEach(() => {
        const history = createMemoryHistory({initialEntries: ['/']})
        render(
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
})
