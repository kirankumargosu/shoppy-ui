import React from 'react';
// import './Login.css';
import { GoogleLogout } from 'react-google-login';

export default function LogoutView(props)
{
    return (
            <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText = "Logout from Teamli"
                onLogoutSuccess={props.handleLogout}
            >
            </GoogleLogout>
    )
}