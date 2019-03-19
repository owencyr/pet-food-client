import React, { Component } from "react";

const FoodListContext = React.createContext({
	foodList: [],
	error: null,
	setError: () => {},
	clearError: () => {},
	setFoodList: () => {}
});
export default FoodListContext;

export class FoodListProvider extends Component {
	state = {
		foodList: [],
		error: null
	};

	setFoodList = foodList => {
		this.setState({ foodList });
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
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setFoodList: this.setFoodList
		};
		return (
			<FoodListContext.Provider value={value}>
				{this.props.children}
			</FoodListContext.Provider>
		);
	}
}
