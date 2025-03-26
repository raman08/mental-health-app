import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

function Login() {
	return (
		<div className="h-full flex justify-center items-center align-center">
			<SignUp appearance={{ baseTheme: dark }} />
		</div>
	);
}

export default Login;
