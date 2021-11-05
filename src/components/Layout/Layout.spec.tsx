import {Layout} from './Layout'
import {render, screen} from "@testing-library/react";
import {Auth0Provider} from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";
import { mocked } from 'ts-jest/utils';

let mockLogout = jest.fn()
jest.mock('@auth0/auth0-react', () => {

    return {
        Auth0Provider: ({children}: any) => children,
        //withAuthenticationRequired: ((component:any, _) => component),
        useAuth0: () => {
            return {
                isLoading: false,
                user: {sub: "foobar"},
                isAuthenticated: true,
                loginWithRedirect: jest.fn(),
                logout: mockLogout
            }
        }
    }
});



describe("<Layout/>", () => {
    beforeEach(() => {
        render(
            <Auth0Provider clientId="__test_client_id__" domain="__test_domain__">
                <Layout>
                    <p>Main content</p>
                </Layout>
            </Auth0Provider>
        )
    })

    it("should render a layout component", () => {
        expect(screen.getByTestId("Layout")).toBeInTheDocument()
    })

    it("should render a logo, a create button", () => {
        expect(screen.getByTestId("logo")).toBeInTheDocument()
        expect(screen.getByTestId("create-post-button")).toBeInTheDocument()
    })

    it("should render a logout button", () => {
        expect(screen.getByTestId("logout-button")).toBeInTheDocument()
    })

    it("should trigger a logout action if logout button is clicked", async () => {
        const logoutBtn = screen.getByTestId("logout-button")
        await userEvent.click(logoutBtn)
        expect(mockLogout).toHaveBeenCalledTimes(1)
    })
})