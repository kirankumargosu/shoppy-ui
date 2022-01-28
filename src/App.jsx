import './css/App.css';
import Content from './components/content';
import LoginView from './auth/LoginView';
import LogoutView from './auth/LogoutView';
import { useState } from 'react';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState('')


  return (
          <div>
            <div className="center">
            <span className="appName">{process.env.REACT_APP_NAME}</span>
            <span className="appVersion">{process.env.REACT_APP_VERSION}</span>
            </div>
            <hr/>
            <Content/>
          </div>);
}

