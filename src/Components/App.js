import React, {Component} from 'react';
import '../Styles/App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import SelectQuestions from './SelectQuestions';
import JSQuestions from './JSQuestions';
import ReactQuestions from './ReactQuestions';
import DataStructQuestions from './DataStructQuestions';
import AndroidQuestions from './AndroidQuestions';

class App extends Component{
  render(){
    return (
			<div className="background-grey">
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/home" />} />
					<Route
						exact
						path="/full-stack-flash-cards"
						render={() => <Redirect to="/home" />}
					/>
					<Route
						path="/home"
						component={SelectQuestions}
					/>
					<Route
						path="/javascript"
						component={JSQuestions}
					/>
					<Route
						path="/react"
						component={ReactQuestions}
					/>
					<Route
						path="/data-structs"
						component={DataStructQuestions}
					/>
					<Route
						path="/android"
						component={AndroidQuestions}
					/>
				</Switch>
			</div>
		);
  }
}
export default App;
