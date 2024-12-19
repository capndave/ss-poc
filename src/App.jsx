import { useEffect, useState } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
	const [token, setToken] = useState(null);
	const auth = useAuth0();

	async function getToken(auth) {
		if ("getAccessTokenSilently" in auth) {
			const token = await auth?.getAccessTokenSilently();
			setToken(token);
		}
	}

	useEffect(() => {
		getToken(auth);
	}, [auth]);

	if (auth.isLoading) {
		return <div>Loading...</div>;
	}

	if (auth.error) {
		return <div>Encountered error... {auth.error.message}</div>;
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
					User: <pre>{auth.user?.email} </pre>
					Access Token<pre>{token} </pre>
					<button style={buttonStyle} onClick={() => auth.logout()}>
						Sign out
					</button>
				</div>
			) : (
				<button style={buttonStyle} onClick={() => auth.loginWithRedirect()}>
					Sign in
				</button>
			)}
		</div>
	);
};

export default App;
