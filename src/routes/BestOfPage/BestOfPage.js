import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BestOfPage extends Component {
	render() {
		return (
			<section className="best-of-page">
				<ul className="best-of">
					<li>
						<Link to="/food/1">Royal Canin Food</Link>
					</li>
					<li>
						<Link to="/discount/1">10% off Coupon</Link>
					</li>
				</ul>
			</section>
		);
	}
}
