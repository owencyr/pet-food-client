import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignInPage.css";

export default class SignInPage extends Component {
	render() {
		return (
			<section className="sign-in-page">
				<Link to="/search">Search Foods</Link>
				<section className="mission-statement">
					<p className="problem">
						Pet food shopping is hard, the process of searching for foods that
						have the right ingredients and none of the wrong ones takes long
						enough. Calculating how many dollars per calorie per day your pet
						consumes can vary wildly from one diet to the next, and is critical
						in budgeting how many dollars go towards Coco and Felix.
					</p>
					{"   "}
					<p className="solution">
						Pet Food Shopper is here to simplify this process, removing the need
						for a spreadsheet to effectively price shop pet diets. In addition,
						you won't need a pet nutritionist to know what that pet food label
						is really telling you.
					</p>
					<p>
						Try username guy123, password PasswordA1! This account has already
						rated all foods. Make a new account to try rating foods.
					</p>
					<ul>
						<li>You can register a new account.</li>
						<li>You can view the list of foods in the database.</li>
						<li>
							You can rate foods only one time, with this status preserved
							between log ins.
						</li>
						<li>You can filter the list of foods by name in the search bar.</li>
					</ul>
				</section>
				<img
					src="https://cdn.theatlantic.com/assets/media/img/mt/2018/10/GettyImages_521915123/lead_720_405.jpg"
					alt="dog-eating-food"
				/>
			</section>
		);
	}
}
