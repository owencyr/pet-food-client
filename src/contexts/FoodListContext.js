import React, { Component } from "react";

const FoodListContext = React.createContext({
	foodList: [],
	ingredientsList: [],
	error: null,
	setError: () => {},
	clearError: () => {},
	setFoodList: () => {},
	setIngredientsList: () => {}
});
export default FoodListContext;

export class FoodListProvider extends Component {
	state = {
		foodList: [],
		ingredientsList: [],
		error: null
	};

	setFoodList = foodList => {
		this.setState({ foodList });
	};

	setIngredientsList = ingredientsList => {
		this.setState({ ingredientsList });
	};

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
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setFoodList: this.setFoodList,
			setIngredientsList: this.setIngredientsList
		};
		return (
			<FoodListContext.Provider value={value}>
				{this.props.children}
			</FoodListContext.Provider>
		);
	}
}
