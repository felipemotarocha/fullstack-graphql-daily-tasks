import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import moment from "moment";

import {
	Container,
	Content,
	Description,
	ConcludedAt,
	Text,
	Time,
} from "./task-item.styles";

const TaskItem = ({
	task: { description, isCompleted, conclusionTime },
	toggleTaskStatus,
}) => {
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
					style={{ transition: "all 350ms ease" }}
				/>
				<Description isCompleted={isCompleted}>{description}</Description>
			</Content>

			<ConcludedAt isCompleted={isCompleted}>
				{conclusionTime && isCompleted ? (
					<>
						<Text>Concluded at:</Text>
						<Time>{moment(conclusionTime).format("LT")}</Time>
					</>
				) : (
					""
				)}
			</ConcludedAt>
		</Container>
	);
};

export default TaskItem;
