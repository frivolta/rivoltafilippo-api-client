import {screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {renderWithClient} from "../../testUtils";
import {Auth0Provider} from "@auth0/auth0-react";
import App from "../../App";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import userEvent from "@testing-library/user-event";

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
    it('should be defined', () => {
        expect(screen.getByTestId("create-post-title")).toBeInTheDocument()
    });

    describe('title field', () => {
        it('should show a title field', function () {
            expect(screen.getByTestId("post-title-field")).toBeInTheDocument()
        });
        it('should show an error message if is empty', function () {
            userEvent.type(screen.getByTestId("post-title-field"), " ")
            expect(screen.getByText("Field is required")).toBeInTheDocument()
        });
    })
    describe('slug field', () => {
        it('should show a slug field', function () {
            expect(screen.getByTestId("post-slug-field")).toBeInTheDocument()
        });
        it('should show an error message if is empty', function () {
            userEvent.type(screen.getByTestId("post-slug-field"), " ")
            expect(screen.getByText("Cannot contain spaces and is required")).toBeInTheDocument()
        });
        it('should show an error message if is has spaces', function () {
            userEvent.type(screen.getByTestId("post-slug-field"), "ww . w")
            expect(screen.getByText("Cannot contain spaces and is required")).toBeInTheDocument()
        });
    })
    describe('image field', () => {
        it('should show an image field', function () {
            expect(screen.getByTestId("post-image-field")).toBeInTheDocument()
        });
        it('should show an error message if is empty', function () {
            userEvent.type(screen.getByTestId("post-image-field"), " ")
            expect(screen.getByText("Cannot contain spaces and is required")).toBeInTheDocument()
        });
        it('should show an error message if is has spaces', function () {
            userEvent.type(screen.getByTestId("post-image-field"), "ww . w")
            expect(screen.getByText("Cannot contain spaces and is required")).toBeInTheDocument()
        });
    })
    describe('content field', () => {
        it('should show a content field', function () {
            expect(screen.getByTestId("post-content-field")).toBeInTheDocument()
        });
    })
    describe('isDraft field', () => {
        it('should show a isDraft field', function () {
            expect(screen.getByTestId("post-isDraft-field")).toBeInTheDocument()
        });
    })

    describe("medium reddit fields", () => {
        it('should show a medium url field', function () {
            expect(screen.getByTestId("post-mediumUrl-field")).toBeInTheDocument()
        });
        it('should show a reddi url field', function () {
            expect(screen.getByTestId("post-redditUrl-field")).toBeInTheDocument()
        });
    })

    describe('Create Post Button', () => {
        it('should show a create post button', function () {
            expect(screen.getByText(/Create Post/i)).toBeInTheDocument()
        });
    })
})