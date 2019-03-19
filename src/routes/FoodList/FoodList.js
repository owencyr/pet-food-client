import React, { Component } from "react";
import FoodListContext from "../../contexts/FoodListContext";
import FoodApiService from "../../services/food-api-service";
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
	}

	renderFoods() {
		const { foodList = [] } = this.context;
		return foodList.map(food => <FoodListItem key={food.id} food={food} />);
	}

	render() {
		const { error } = this.context;
		return (
			<Section list className="FoodListPage">
				{error ? (
					<p className="red">There was an error, try again</p>
				) : (
					this.renderFoods()
				)}
			</Section>
		);
	}
}
