import "./index.css";

export default function Selector({ idp: currentIdp, setIdp }) {
	return (
		<form>
			{["Cognito", "Auth0"].map((idp) => (
				<div onChange={() => setIdp(idp)}>
					<input
						type="radio"
						checked={currentIdp === idp}
						id={idp}
						name="ID Provider"
						value={idp}
					/>
					<label for={idp}>{idp}</label>
					<br />
				</div>
			))}
		</form>
	);
}
