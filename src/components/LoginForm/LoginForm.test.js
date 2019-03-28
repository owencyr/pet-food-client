import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

it("renders LoginForm without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<MemoryRouter>
			<LoginForm />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
