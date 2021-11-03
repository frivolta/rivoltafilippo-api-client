import {screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {renderWithClient} from "../../testUtils";
import {Auth0Provider} from "@auth0/auth0-react";
import App from "../../App";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

describe("Create Post", () => {

    beforeEach(() => {
        const history = createMemoryHistory({initialEntries: ['/posts/create']})
        renderWithClient(
            <Router history={history}>
                <Auth0Provider clientId="__test_client_id__" domain="__test_domain__">
                    <App/>
                </Auth0Provider>
            </Router>)
    })
    it('should be defined', ()=> {
        expect(screen.getByTestId("create-post-title")).toBeInTheDocument()
    });

    describe('title field', ()=>{
        it('should show a title field', function () {
            expect(screen.getByTestId("post-title-field")).toBeInTheDocument()
        });
    })
    describe('slug field', ()=>{
        it('should show a slug field', function () {
            expect(screen.getByTestId("post-slug-field")).toBeInTheDocument()
        });
    })
})