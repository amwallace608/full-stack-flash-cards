import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class SelectQuestions extends Component{
  
  render(){
    //return question set selectors
    return (
			<div className="flex justify-center mt7">
				<div className="pa4">
					<Button
						variant="contained"
						color="primary"
						style={{ minWidth: "200px", minHeight: "200px", fontSize: "2rem" }}
					>
						<Link to="/javascript" className="white no-underline">
							JavaScript
						</Link>
					</Button>
				</div>
				<div className="pa4">
					<Button
						variant="contained"
						color="primary"
						style={{ minWidth: "200px", minHeight: "200px", fontSize: "2rem" }}
					>
						<Link to="/react" className="white no-underline">
							React/Redux
						</Link>
					</Button>
				</div>
				<div className="pa4">
					<Button
						variant="contained"
						color="primary"
						style={{ minWidth: "200px", minHeight: "200px", fontSize: "2rem" }}
					>
						<Link to="/data-structs" className="white no-underline">
							Data <br /> Structures
						</Link>
					</Button>
				</div>
				<div className="pa4">
					<Button
						variant="contained"
						color="primary"
						style={{ minWidth: "200px", minHeight: "200px", fontSize: "2rem" }}
					>
						<Link to="/android" className="white no-underline">
							Android
						</Link>
					</Button>
				</div>
			</div>
		);
  }
}

export default SelectQuestions