import { MsalAuthProvider, LoginType } from "react-aad-msal";

const tenant = process.env.REACT_APP_TENANT_NAME;
const signInPolicy = process.env.REACT_APP_SIGN_IN_POLICY;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;

const tenantSubdomain = tenant.split(".")[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const authority = `${instance}${tenant}/${signInPolicy}`;

// Msal Configurations
const signInConfig = {
  auth: {
    authority,
    clientId,
    redirectUri,
    validateAuthority: false
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true
  }
};
// Authentication Parameters
const authenticationParameters = {
  scopes: [],
  extraQueryParameters: {
    ui_locales: 'en',
  },
};
// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + "/auth.html"
};

export const signInAuthProvider = new MsalAuthProvider(
  signInConfig,
  authenticationParameters,
  options
);