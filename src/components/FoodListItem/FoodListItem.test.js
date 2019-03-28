import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import FoodListItem from "./FoodListItem";

it("renders FoodListItem without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<MemoryRouter>
			<FoodListItem />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
