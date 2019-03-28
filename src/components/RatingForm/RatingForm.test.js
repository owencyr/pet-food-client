import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import RatingForm from "./RatingForm";

it("renders RatingForm without crashing", () => {
	const div = document.createElement("div");
	const food = {
		id: 1,
		variety: "beef",
		kcal: 130,
		grade: "C",
		brand: 1,
		i1: 1,
		i2: 2,
		i3: 3,
		i4: 4,
		i5: 5,
		rating: 1
	};

	ReactDOM.render(
		<MemoryRouter>
			<RatingForm food={food} />
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
