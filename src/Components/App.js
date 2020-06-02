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
					<Route
						exact
						path="/"
						render={() => <Redirect to="/full-stack-flash-cards/home" />}
					/>
					<Route
						exact
						path="/full-stack-flash-cards"
						render={() => <Redirect to="/full-stack-flash-cards/home" />}
					/>
					<Route
						exact
						path="/full-stack-flash-cards/home"
						component={SelectQuestions}
					/>
					<Route
						exact
						path="/full-stack-flash-cards/javascript"
						component={JSQuestions}
					/>
					<Route
						exact
						path="/full-stack-flash-cards/react"
						component={ReactQuestions}
					/>
					<Route
						exact
						path="/full-stack-flash-cards/data-structs"
						component={DataStructQuestions}
					/>
					<Route
						exact
						path="/full-stack-flash-cards/android"
						component={AndroidQuestions}
					/>
				</Switch>
			</div>
		);
  }
}
export default App;
