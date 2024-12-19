import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Auth0View() {
	const [token, setToken] = useState(null);
	const auth = useAuth0();

	async function getToken(auth) {
		if ("getAccessTokenSilently" in auth) {
			const token = await auth?.getAccessTokenSilently();
			setToken(token);
		}
	}

	console.log(auth);

	useEffect(() => {
		getToken(auth);
	}, [auth]);

	if (auth.isLoading) {
		return <div>Loading...</div>;
	}

	if (auth.error) {
		return <div>Encountered error... {auth.error.message}</div>;
	}

	return auth.isAuthenticated ? (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "2rem",
				alignItems: "center",
				width: "900px",
			}}
		>
			User: <pre>{auth.user?.email} </pre>
			Access Token<pre>{token} </pre>
			<button onClick={() => auth.logout()}>Sign out</button>
		</div>
	) : (
		<button onClick={() => auth.loginWithRedirect()}>Sign in</button>
	);
}
