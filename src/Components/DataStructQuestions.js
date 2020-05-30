import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class DataStructQuestions extends Component {
	render() {
		return (
			//home button
			<div>
				<Button variant="contained" color="primary">
					<Link to="/home" className="white no-underline">
						Home
					</Link>
				</Button>
				<h1 className="v-top mt1 tc">Data Structures Interview Questions</h1>
			</div>
			//page title

			//question card
			//answer card
			//next button
			//score card
			//user answer form
			//submit button
		);
	}
}

export default DataStructQuestions