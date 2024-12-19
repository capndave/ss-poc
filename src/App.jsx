import { useState } from "react";
import CognitoView from "./CognitoView";
import Auth0View from "./Auth0View";
import Selector from "./Selector";
import "./App.css";

const App = () => {
	const [idp, setIdp] = useState("Cognito");

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "2rem",
				width: "100%",
				height: "50vh",
				alignItems: "center",
				justifyContent: "space-around",
			}}
		>
			<Selector idp={idp} setIdp={setIdp} />
			{idp === "Cognito" ? <CognitoView /> : <Auth0View />}
		</div>
	);
};

export default App;
