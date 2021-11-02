import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import {Route, Switch} from "react-router-dom";
import {AllPosts} from "./pages/AllPosts/AllPosts";

function App() {
    const {isAuthenticated} = useAuth0()
    return (
        <>
            {
                isAuthenticated
                    ? (
                        <Switch>
                            <Route path="/">
                              <AllPosts/>
                            </Route>
                        </Switch>)
                    :
                    <LoginButton/>
            }

        </>
    );
}

export default App;
