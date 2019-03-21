import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FoodStarRating } from "../FoodStarRating/FoodStarRating";
import "./FoodListItem.css";

export default class FoodListItem extends Component {
	// joinOneFoodWithIngredients(db, id) {
	// 	return db("foods")
	// 		.select(
	// 			"foods.id AS ingredient_id",
	// 			"foods.variety",
	// 			"foods.kcal",
	// 			"foods.grade",
	// 			"foods.brand",
	// 			"foods.i1",
	// 			"ing_1.name as ing_1_name",
	// 			" foods.i2",
	// 			"ing_2.name as ing_2_name",
	// 			"foods.i3",
	// 			"ing_3.name as ing_3_name",
	// 			"foods.i4",
	// 			"ing_4.name as ing_4_name",
	// 			"foods.i5",
	// 			"ing_5.name as ing_5_name",
	// 			"foods.rating"
	// 			// db.raw('count(DISTINCT rev) AS number_of_reviews'),
	// 			// db.raw('AVG(rev.rating) AS average_review_rating')
	// 		)
	// 		.leftJoin("ingredients as ing_1", "ingredients.i1", "ing_1.id")
	// 		.leftJoin("ingredients as ing_2", "ingredients.i2", "ing_2.id")
	// 		.leftJoin("ingredients as ing_3", "ingredients.i3", "ing_3.id")
	// 		.leftJoin("ingredients as ing_4", "ingredients.i4", "ing_4.id")
	// 		.leftJoin("ingredients as ing_5", "ingredients.i5", "ing_5.id")
	// 		.where("food.id", id);
	// }

	render() {
		const { food, ingredients } = this.props;
		// debugger;
		return (
			<section className="FoodListItem">
				<div className="FoodListItem__details">
					<div className="FoodListItem__text">
						<h2 className="FoodListItem__heading">
							{food.brand} {food.variety} dinner
						</h2>
						<ul className="FoodListItem__composites">
							<li className="FoodListItem__kcal">{food.kcal}</li>
							<li className="FoodListItem__grade">{food.grade}</li>
							<li className="FoodListItem__rating">{food.rating}</li>
							<form className="FoodListItem__Rating">
								<label htmlFor="Rating__up">Thumbs up</label>
								<button className="Rating__up">^</button>
								<label htmlFor="Rating__down">Thumbs down</label>
								<button className="Rating__down">v</button>
							</form>
						</ul>
						<ul className="FoodListItem__ingredients">
							<h3>Ingredients:</h3>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i1 - 1].name}
							</li>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i2 - 1].name}
							</li>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i3 - 1].name}
							</li>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i4 - 1].name}
							</li>
							<li className="FoodListItem__ingredient">
								{ingredients[food.i5 - 1].name}
							</li>
						</ul>

						{/* <p className="FoodListItem__description">
							{truncate(food.content)}
						</p> */}
					</div>

					{/* <div className="FoodListItem__reviews">
						<FoodStarRating rating={food.average_review_rating} />
						<span id="FoodListItem__review-count">
							{readableReviewCount(food.number_of_reviews)}
						</span>
					</div> */}
				</div>
			</section>
		);
	}
}

// function readableReviewCount(number) {
// 	switch (number) {
// 		case 0:
// 			return "no reviews yet";

// 		case 1:
// 			return `based on 1 review`;

// 		default:
// 			return `based on ${number} reviews`;
// 	}
// }

// function truncate(text) {
// 	const words = text.split(" ");

// 	if (words.length > 10) {
// 		return words.slice(0, 10).join(" ") + " ...";
// 	}

// 	return text;
// }
