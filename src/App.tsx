import React from 'react';
import {Layout} from "./components/Layout/Layout";
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";

const childrenAuth = () => <p>you can see content</p>

function App() {
    const {isAuthenticated} = useAuth0()
    return (
        <>
            {isAuthenticated ? <Layout>
                {childrenAuth()}
            </Layout> : <LoginButton/>}

        </>
    );
}

export default App;
