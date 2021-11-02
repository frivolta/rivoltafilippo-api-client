import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,} from "react-router-dom";
import {QueryClient, QueryClientProvider,} from 'react-query'

import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <Auth0ProviderWithHistory>
                    <App/>
                </Auth0ProviderWithHistory>
            </Router>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
