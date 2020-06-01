import React, { Component } from "react";
import { Box, IconButton } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ClearIcon from "@material-ui/icons/Clear";

class ScoreCard extends Component{

  render() {
    const questionIndex = this.props.questionIndex;
		const totalQuestions = this.props.totalQuestions;
		const correctQuestions = this.props.correctQuestions;
		const completedQuestions = this.props.questionIndex;
		const hasChecked = this.props.hasChecked;
    let scoreBox;
    
    if(hasChecked){
			//render full scorebox, with answer verification
			scoreBox = (
				<Box
					bgcolor="text.disabled"
					borderRadius={12}
					className="flex w-auto"
				>
					<ul className="list p10">
						<li className="f5">
							Question {questionIndex + 1} of {totalQuestions}{" "}
						</li>
						<li className="f5">
							Correct Answers: {correctQuestions} of {completedQuestions}
						</li>
					</ul>
					<div className="flex justify-center ml2">
						<h1 className="f4 lh-copy ml2 white pa2">
							Is your answer correct?
						</h1>
						<IconButton
							aria-label="checkCircle"
							color="primary"
							onClick={() => this.props.handleAnswerVerified(true)}
						>
							<CheckCircleIcon fontSize="large" />
						</IconButton>
						<IconButton
							aria-label="clear"
							color="secondary"
							onClick={() => this.props.handleAnswerVerified(false)}
						>
							<ClearIcon fontsize="large" />
						</IconButton>
					</div>
				</Box>
			);
		} else {
			//render scorebox without answer verification
			scoreBox = (
				<Box
					bgcolor="text.disabled"
					borderRadius={12}
					className="flex justify-center w-auto ph2"
				>
					<ul className="list p10 pr4">
						<li className="f5">
							Question {questionIndex + 1} of {totalQuestions}{" "}
						</li>
						<li className="f5">
							Correct Answers: {correctQuestions} of {completedQuestions}
						</li>
					</ul>
				</Box>
			);
		}

    return (
      <div className="flex justify-center mt3">
				{scoreBox}
			</div>
    );
  }
}

export default ScoreCard