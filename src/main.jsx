import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { AuthProvider as CognitoProvider } from "react-oidc-context";
import "./index.css";
import App from "./App.jsx";

const auth0Config = {
	domain: "dev-wrmdvblhk07q5tkj.us.auth0.com",
	clientId: "GfLvLkINgTxMNUy4D7sUWl4h53zHLLBJ",
	authorizationParams: {
		redirect_uri: window.location.origin,
	},
};

const cognitoConfig = {
	authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_pVIBYFq8B",
	client_id: "893sh8kj3he3k5oasmmv0rrrt",
	redirect_uri: "http://localhost:5173",
	response_type: "code",
	scope: "phone openid email",
};

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Auth0Provider {...auth0Config}>
			<CognitoProvider {...cognitoConfig}>
				<App />
			</CognitoProvider>
		</Auth0Provider>
	</StrictMode>,
);
