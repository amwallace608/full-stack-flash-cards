import React, {Component} from 'react'
import { Box } from '@material-ui/core'

class QuestionCard extends Component{
  render(){
    return (
			//question card/container
			<Box
				bgcolor="primary.main"
				borderRadius={16}
				className="tc f4 white h-100 w-40 mr2 pa2"
				style={{ minHeight: "150px" }}
			>
				<p className="v-mid">{this.props.questionString}</p>
			</Box>
		);
  }
}

export default QuestionCard