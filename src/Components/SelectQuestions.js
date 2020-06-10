import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class SelectQuestions extends Component{
  
  render(){
    //return question set selectors
    return (
			<div className="flex justify-center mt7">
				<div className="pa4">
					<Link
						to="/javascript"
						className="white no-underline"
					>
						<Button
							variant="contained"
							color="primary"
							style={{
								minWidth: "200px",
								minHeight: "200px",
								fontSize: "2rem",
							}}
						>
							JavaScript
						</Button>
					</Link>
				</div>
				<div className="pa4">
					<Link
						to="/react"
						className="white no-underline"
					>
						<Button
							variant="contained"
							color="primary"
							style={{
								minWidth: "200px",
								minHeight: "200px",
								fontSize: "2rem",
							}}
						>
							React/Redux
						</Button>
					</Link>
				</div>
				<div className="pa4">
					<Link
						to="/data-structs"
						className="white no-underline"
					>
						<Button
							variant="contained"
							color="primary"
							style={{
								minWidth: "200px",
								minHeight: "200px",
								fontSize: "2rem",
							}}
						>
							Data <br /> Structures
						</Button>
					</Link>
				</div>
				<div className="pa4">
					<Link
						to="/android"
						className="white no-underline"
					>
						<Button
							variant="contained"
							color="primary"
							style={{
								minWidth: "200px",
								minHeight: "200px",
								fontSize: "2rem",
							}}
						>
							Android
						</Button>
					</Link>
				</div>
			</div>
		);
  }
}

export default SelectQuestions