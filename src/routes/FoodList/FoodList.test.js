import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import FoodList from "./FoodList";

it("renders FoodList without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<MemoryRouter>
			<FoodList />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
