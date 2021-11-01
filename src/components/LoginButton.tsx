import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {OutlineButton} from "./Buttons/OutlineButton";

const LoginButton= () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <OutlineButton
            onClick={() =>
                loginWithRedirect()
            }
            label="Login"/>
    );
};

export default LoginButton;