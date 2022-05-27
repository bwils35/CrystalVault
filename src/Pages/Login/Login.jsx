import React from "react";
import "./Login.css";

function Login() {
	return (
		<div className="login_form">
			<form>
				<h1>Login</h1>
				<label>Username:</label>
				<input type="text" name="username" />
				<label>Password:</label>
				<input type="password" name="password" />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
