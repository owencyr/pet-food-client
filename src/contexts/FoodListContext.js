import React, { Component } from "react";

const FoodListContext = React.createContext({
	foodList: [],
	ingredientsList: [],
	ratingsList: [],
	error: null,
	setError: () => {},
	clearError: () => {},
	setFoodList: () => {},
	setIngredientsList: () => {},
	setRatingsList: () => {}
});
export default FoodListContext;

export class FoodListProvider extends Component {
	state = {
		foodList: null,
		ingredientsList: null,
		ratingsList: null,
		error: null
	};

	setFoodList = foodList => {
		this.setState({ foodList });
	};

	setIngredientsList = ingredientsList => {
		this.setState({ ingredientsList });
	};

	setRatingsList = ratingsList => {
		this.setState({ ratingsList });
	};

	//seems silly to update local state, when there could have potentially been other ratings changes since last updated from database
	// would be ideal to trigger a get ratings after user sends an update, so all database updates are reflected clientside
	// addRating = newRating => {
	// 	this.setState({...ratingsList})
	// }

	setError = error => {
		console.error(error);
		this.setState({ error });
	};

	clearError = () => {
		this.setState({ error: null });
	};

	render() {
		const value = {
			foodList: this.state.foodList,
			ingredientsList: this.state.ingredientsList,
			ratingsList: this.state.ratingsList,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setFoodList: this.setFoodList,
			setIngredientsList: this.setIngredientsList,
			setRatingsList: this.setRatingsList
		};
		return (
			<FoodListContext.Provider value={value}>
				{this.props.children}
			</FoodListContext.Provider>
		);
	}
}
