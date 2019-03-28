import React, { Component } from "react";
import FoodListContext from "../../contexts/FoodListContext";
import FoodApiService from "../../services/food-api-service";
import IngredientApiService from "../../services/ingredient-api-service";
import RatingApiService from "../../services/rating-api-service";
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
		RatingApiService.getRatings()
			.then(this.context.setRatingsList)
			.catch(this.context.setError);
		RatingApiService.getUserRatedFoods(window.localStorage.getItem("userid"))
			.then(this.context.setUserRatedFoods)
			.catch(this.context.setError);
	}

	renderFoods() {
		const {
			foodList = null,
			ingredientsList = null,
			ratingsList = null,
			userRatedFoods = null,
			query = null
		} = this.context;

		return !foodList || !ingredientsList || !ratingsList || !userRatedFoods ? (
			<section className="foodlist">
				<span className="status-text">{"Loading from server..."}</span>
			</section>
		) : !query ? (
			foodList.map(food => (
				<FoodListItem
					key={food.id}
					food={food}
					ingredients={ingredientsList}
					ratings={ratingsList}
				/>
			))
		) : (
			foodList
				.filter(food => food.variety.includes(query))
				.map(food => (
					<FoodListItem
						key={food.id}
						food={food}
						ingredients={ingredientsList}
						ratings={ratingsList}
					/>
				))
		);
		// return !foodList || !ingredientsList || !ratingsList ? (
		// 	<section className="foodlist">
		// 		<span className="status-text">{"Loading from server..."}</span>
		// 	</section>
		// ) : (
		// 	<p>Nothing</p>
		// 	/*foodList.map(food => (
		// 			<FoodListItem
		// 				key={food.id}
		// 				food={food}
		// 				ingredients={ingredientsList}
		// 				ratings={ratingsList}
		// 			/>
		// 		))*/
		// );
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
