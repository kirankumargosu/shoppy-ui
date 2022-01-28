import { GoogleLogin } from 'react-google-login';


export default function LoginView(props)
{

    const handleSuccessAuth = async (auth) => {
        console.log("Login View Success", auth)
        let user = {
            imageUrl: auth['profileObj']['imageUrl'],
            name: auth['profileObj']['name'],
            firstName: auth['profileObj']['givenName'],
            lastName: auth['profileObj']['familyName'],
            email: auth['profileObj']['email'],
            authService: 'google'
        };
        await fetch(process.env.REACT_APP_API + "login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8", 
            },
            body: JSON.stringify(user),
        }).then(response => response.json())
          .then(json => { 
                          console.log("LoginView Display Name", json.data[0]['user_display_name']); 
                          //setUserProfile(json.data);
                          console.log("LoginView json data", json.data[0])
                          props.handleSuccessAuth(json.data[0]);
                        });
    }

    const handleFailureAuth = () => {

    }

    return (
        <div className="login">
            <h1>Login to team<i>li</i></h1>
            <GoogleLogin
                clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText = "Login with Google"
                onSuccess = {handleSuccessAuth}
                onFailure = {handleFailureAuth}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
            />

        </div>
    )
}