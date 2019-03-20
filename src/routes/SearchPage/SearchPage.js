import React, { Component } from "react";
import FoodList from "../FoodList/FoodList";
// import FoodApiService from "../../services/food-api-service";
// import SearchForm from "../../components/SearchForm";

export default class SearchPage extends Component {
	handleSubmit = e => {
		e.preventDefault();
		// query context at this point, already have "foods" table client side from FoodList Component
		//looking to send query string to context
		// then have foodlist change based on query
		// default query '*', otherwise 'userinputstring'
	};

	render() {
		return (
			<section className="search">
				<form className="search-form" onSubmit={this.handleSubmit}>
					<label htmlFor="search">Search</label>
					<input
						type="text"
						className="search"
						placeholder="Search for Food..."
					/>
				</form>
				<FoodList />
			</section>
		);
	}
}
