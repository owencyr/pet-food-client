import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import SignInPage from "./SignInPage";

it("renders SignInPage without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<MemoryRouter>
			<SignInPage />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
