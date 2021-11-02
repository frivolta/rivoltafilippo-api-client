import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {OutlineButton} from "./Buttons/OutlineButton";

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <OutlineButton
            data-testid="logout-button"
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }
         label="Logout"/>
    );
};

export default LogoutButton;