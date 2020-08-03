import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { Container, Content, Description } from "./task-item.styles";

const TaskItem = ({ task: { description, isCompleted }, toggleTaskStatus }) => {
	return (
		<Container isCompleted={isCompleted}>
			<Content>
				<Checkbox
					checked={isCompleted}
					color="primary"
					inputProps={{ "aria-label": "secondary checkbox" }}
					icon={<RadioButtonUncheckedIcon style={{ color: "white" }} />}
					checkedIcon={<CheckCircleIcon />}
					size="medium"
					onClick={toggleTaskStatus}
				/>
				<Description isCompleted={isCompleted}>{description}</Description>
			</Content>
		</Container>
	);
};

export default TaskItem;
