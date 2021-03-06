import React, {Component} from 'react'
import { Box } from '@material-ui/core'

class QuestionCard extends Component{
  render(){
		const { questionString } = this.props
    return (
			//question card/container
			<Box
				bgcolor="primary.main"
				borderRadius={16}
				className="tc f4 white h-100 w-40 mr2 pa2"
				style={{ minHeight: "150px" }}
			>
				{questionString.split("\n").map((i, key) => {
					//replace newline symbols
					return <div key={key}>{i}</div>;
				})}
			</Box>
		);
  }
}

export default QuestionCard