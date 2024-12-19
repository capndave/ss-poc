import { useAuth } from "react-oidc-context";

export default function CognitoView() {
	const auth = useAuth();

	if (auth.isLoading) {
		return <div>Loading...</div>;
	}

	if (auth.error) {
		return <div>Encountering error... {auth.error.message}</div>;
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
			User: <pre>{auth.user?.profile.email} </pre>
			ID Token: <pre>{auth.user?.id_token} </pre>
			Access Token<pre>{auth.user?.access_token} </pre>
			Refresh Token: <pre>{auth.user?.refresh_token} </pre>
			<button onClick={() => auth.removeUser()}>Sign out</button>
		</div>
	) : (
		<button onClick={() => auth.signinRedirect()}>Sign in</button>
	);
}
