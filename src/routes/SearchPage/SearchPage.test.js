import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import SearchPage from "./SearchPage";

it("renders SearchPage without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<MemoryRouter>
			<SearchPage />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
