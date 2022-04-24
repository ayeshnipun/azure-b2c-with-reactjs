import logo from "./logo.svg";
import "./App.css";
import AuthProvider from './providers/auth-provider';
import LoginView from "./views/login-view";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Azure B2C with MSAL JS</p>
          <LoginView/>
        </div>
      </header>
    </div>
  );
};



export default AuthProvider(App);
