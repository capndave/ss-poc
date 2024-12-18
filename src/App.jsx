import { useAuth } from "react-oidc-context";
import "./App.css";

const App = () => {
	const auth = useAuth();

	if (auth.isLoading) {
		return <div>Loading...</div>;
	}

	if (auth.error) {
		return <div>Encountering error... {auth.error.message}</div>;
	}

	const buttonStyle = {
		width: "100px",
		height: "40px",
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				gap: "2rem",
				width: "100%",
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{auth.isAuthenticated ? (
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
					<button style={buttonStyle} onClick={() => auth.removeUser()}>
						Sign out
					</button>
				</div>
			) : (
				<button style={buttonStyle} onClick={() => auth.signinRedirect()}>
					Sign in
				</button>
			)}
		</div>
	);
};

export default App;
