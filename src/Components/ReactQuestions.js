import React, { Component } from "react";
import { Button, TextField, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { REACT_QUESTIONS } from "../Constants";
import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";
import ScoreCard from './ScoreCard';

class ReactQuestions extends Component {
	initialState = {
		//question index tracker, determines current question
		questionIndex: 0,
		//number of correctly answered questions tracker
		correctQuestions: 0,
		//total number of questions in set
		totalQuestions: REACT_QUESTIONS.length,
		//has checked answer for current question tracker
		hasChecked: false,
		//has verified correct/incorrect answer for current question tracker
		hasVerified: false,
		//answered all questions in set tracker
		setComplete: false,
	};

	state = this.initialState;

	//handle check answer button clicked
	_handleCheckAnswer = () => {
		if (this.state.hasChecked === false) this.setState({ hasChecked: true });
	};

	//handle verified answer
	_handleAnswerVerified = (correctAnswer) => {
		const nextQuestion = this.state.questionIndex + 1;

		//check if verified correct or incorrect
		if (correctAnswer === true) {
			//true = correct answer
			const numCorrect = this.state.correctQuestions + 1;

			//check if all questions completed
			if (this.state.questionIndex < this.state.totalQuestions - 1) {
				//update state to move to next question
				this.setState({
					questionIndex: nextQuestion,
					correctQuestions: numCorrect,
					hasChecked: false,
					hasVerified: false,
				});
			} else {
				//update state to show set complete & score
				this.setState({
					correctQuestions: numCorrect,
					setComplete: true,
				});
			}
		} else {
			//check if all questions completed
			if (this.state.questionIndex < this.state.totalQuestions - 1) {
				//incorrect, update state to move to next question
				this.setState({
					questionIndex: nextQuestion,
					hasChecked: false,
					hasVerified: false,
				});
			} else {
				//update state to show set complete
				this.setState({ setComplete: true });
			}
		}
	};

	//handle reset
	_handleReset = () => {
		if (this.state.setComplete === true) {
			//reset state to inital state
			this.setState(this.initialState);
		}
	};

	render() {
		const questionString = REACT_QUESTIONS[this.state.questionIndex].question;
		const answerString = REACT_QUESTIONS[this.state.questionIndex].answer;
		const questionIndex = this.state.questionIndex;
		const totalQuestions = this.state.totalQuestions;
		const correctQuestions = this.state.correctQuestions;
		const completedQuestions = this.state.questionIndex;
		const hasChecked = this.state.hasChecked;
		const setComplete = this.state.setComplete;

		//variable for which cards to render
		let cardsToRender;

		if (hasChecked) {
			//render both question and answer cards
			cardsToRender = (
				<div className="flex justify-center items-center">
					<QuestionCard questionString={questionString} />
					<AnswerCard answerString={answerString} />
				</div>
			);
		} else {
			//render only question
			cardsToRender = (
				<div className="flex justify-center items-center">
					<QuestionCard questionString={questionString} />
				</div>
			);
		}

		return (
			<div>
				<div>
					<Button variant="contained" color="primary">
						<Link to="/home" className="white no-underline">
							Home
						</Link>
					</Button>
					<h1 className="v-top mt1 tc">React/Redux Interview Questions</h1>
				</div>
				{!setComplete && (
					<div>
						{cardsToRender}
						<ScoreCard
							questionIndex={questionIndex}
							totalQuestions={totalQuestions}
							correctQuestions={correctQuestions}
							completedQuestions={completedQuestions}
							hasChecked={hasChecked}
							handleAnswerVerified={this._handleAnswerVerified.bind(this)}
						/>
						<div className="flex justify-center mt3 ml5 mr5 ph2">
							<div className="bg-silver w-70 ph2">
								<TextField
									id="outlined-multiline-flexible"
									label="Enter your answer"
									multiline
									defaultValue=" "
									margin="normal"
									rowsMax={12}
									fullWidth
								/>
							</div>
							<Button
								variant="contained"
								color="primary"
								onClick={this._handleCheckAnswer}
							>
								Check Answer
							</Button>
						</div>
					</div>
				)}
				{setComplete && ( //full set of questions complete, show score and ask to reset
					<div>
						<div className="flex justify-center items-center">
							<QuestionCard questionString="All questions complete! Would you like to try again?" />
						</div>
						<div className="flex justify-center mt3">
							<Box
								bgcolor="text.disabled"
								borderRadius={12}
								className="flex justify-center w-auto ph2"
							>
								<h2>
									Correct Answers: {correctQuestions} of {completedQuestions}
								</h2>
							</Box>
						</div>
						<div className="flex justify-center items-center">
							<Button
								variant="contained"
								color="primary"
								className="mt3 w-20"
								onClick={this._handleReset}
							>
								Retry
							</Button>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default ReactQuestions
