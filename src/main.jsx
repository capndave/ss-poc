import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import "./index.css";
import App from "./App.jsx";

const cognitoAuthConfig = {
	authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_pVIBYFq8B",
	client_id: "893sh8kj3he3k5oasmmv0rrrt",
	redirect_uri: "http://localhost:5173",
	response_type: "code",
	scope: "phone openid email",
};

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider {...cognitoAuthConfig}>
			<App />
		</AuthProvider>
	</StrictMode>,
);
