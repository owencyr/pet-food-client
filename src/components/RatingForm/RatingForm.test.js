import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import RatingForm from "./RatingForm";

it("renders RatingForm without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<MemoryRouter>
			<RatingForm />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
