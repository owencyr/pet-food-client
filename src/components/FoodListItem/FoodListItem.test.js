import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import FoodListItem from "./FoodListItem";

it("renders FoodListItem without crashing", () => {
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

	const ingredientsList = [
		{
			id: 1,
			name: "cow",
			description: "a cow",
			impact: 7
		},
		{
			id: 2,
			name: "pig",
			description: "a pig",
			impact: 6
		},
		{
			id: 3,
			name: "chicken",
			description: "a chicken",
			impact: 2
		},
		{
			id: 4,
			name: "turkey",
			description: "a turkey",
			impact: 3
		},
		{
			id: 5,
			name: "cow5",
			description: "a cow",
			impact: 2
		},
		{
			id: 6,
			name: "cow6",
			description: "desciption",
			impact: 7
		},
		{
			id: 7,
			name: "cow7",
			description: "deskiptio",
			impact: 2
		},
		{
			id: 8,
			name: "cow8",
			description: "descripto",
			impact: 2
		},
		{
			id: 9,
			name: "cow9",
			description: "desukuripushunnu",
			impact: 2
		},
		{
			id: 10,
			name: "cow0",
			description: "wow",
			impact: 2
		}
	];

	const ratingsList = [
		{ rating: "-1", foodid: 4 },
		{ rating: "-1", foodid: 2 },
		{ rating: "1", foodid: 3 },
		{ rating: "0", foodid: 1 }
	];

	ReactDOM.render(
		<MemoryRouter>
			<FoodListItem
				food={food}
				ingredients={ingredientsList}
				ratings={ratingsList}
			/>
		</MemoryRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
