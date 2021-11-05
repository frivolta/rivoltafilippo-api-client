import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import {Route, Switch} from "react-router-dom";
import {AllPosts} from "./pages/AllPosts/AllPosts";
import axios from "axios";
import {CreatePost} from "./pages/CreatePost/CreatePost";
import {SeePost} from "./pages/SeePost/SeePost";

function App() {
    const {isAuthenticated, getAccessTokenSilently} = useAuth0()

    React.useEffect(()=>{
        _setAccessToken()
    }, [])

    const _setAccessToken = async()=>{
        try {
            const token = await getAccessTokenSilently()
            return axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }catch{
            return axios.defaults.headers.common['Authorization'] = ``
            console.error('Cannot get tokens')
        }
    }




    return (
        <>
            {
                isAuthenticated
                    ? (
                        <Switch>
                            <Route exact path="/">
                              <AllPosts/>
                            </Route>
                            <Route exact path="/posts/create">
                                <CreatePost/>
                            </Route>
                            <Route exact path="/posts/:id">
                                <SeePost/>
                            </Route>
                        </Switch>)
                    :
                    <LoginButton/>
            }

        </>
    );
}

export default App;
