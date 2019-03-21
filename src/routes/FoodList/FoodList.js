import React, { Component } from "react";
import FoodListContext from "../../contexts/FoodListContext";
import FoodApiService from "../../services/food-api-service";
import IngredientApiService from "../../services/ingredient-api-service";
import { Section } from "../../components/Utils/Utils";
import FoodListItem from "../../components/FoodListItem/FoodListItem";
import "./FoodList.css";

export default class FoodList extends Component {
	static contextType = FoodListContext;

	componentDidMount() {
		this.context.clearError();
		FoodApiService.getFoods()
			.then(this.context.setFoodList)
			.catch(this.context.setError);
		IngredientApiService.getIngredients()
			.then(this.context.setIngredientsList)
			.catch(this.context.setError);
	}

	renderFoods() {
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
		const { foodList = [] } = this.context;
		// debugger;
		return foodList.map(food => (
			<FoodListItem key={food.id} food={food} ingredients={ingredientsList} />
		));
	}

	render() {
		const { error } = this.context;
		return (
			<Section list className="FoodList">
				{error ? (
					<p className="red">There was an error, try again</p>
				) : (
					this.renderFoods()
				)}
			</Section>
		);
	}
}
