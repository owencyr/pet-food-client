import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

it("renders RegistrationForm without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<MemoryRouter>
			<RegistrationForm />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
