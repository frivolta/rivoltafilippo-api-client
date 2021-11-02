// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {Auth0Provider} from '@auth0/auth0-react';

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