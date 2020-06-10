import React, { Component } from "react";
import { Box } from "@material-ui/core";

class AnswerCard extends Component {
	render() {
    const { answerString } = this.props;
    
		return (
			//question card/container
			<Box
        bgcolor="info.main"
        borderRadius={16}
				className="white f4 tj lh-copy w-40 ml2 pa2"
				style={{ minHeight: "150px" }}
			>
        {answerString.split("\n").map((i, key) => {
          //replace newline symbols
          return <div key={key}>{i}</div>;
        })}
			</Box>
		);
	}
}

export default AnswerCard