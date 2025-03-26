import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

function Login() {
	return (
		<div className="flex justify-center items-center align-center">
			<SignIn appearance={{ baseTheme: dark }} />
		</div>
	);
}

export default Login;
