import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";

import { confirmTaskDeleteOpenVar } from "../../graphql/cache";
import {
	Container,
	Content,
	Description,
	Info,
	Time,
	ConcludedAt,
} from "./task-item.styles";

import { default as ConfirmTaskDeleteDialog } from "../confirm-delete-dialog/confirm-task-delete-dialog.container";

const TaskItem = ({
	task: { id, description, isCompleted, conclusionTime },
	toggleTaskStatus,
	isEditable,
}) => {
	return (
		<Container isCompleted={isCompleted}>
			<Content>
				<Checkbox
					checked={isCompleted}
					color="secondary"
					inputProps={{ "aria-label": "secondary checkbox" }}
					icon={<RadioButtonUncheckedIcon style={{ color: "white" }} />}
					checkedIcon={<CheckCircleIcon />}
					size="medium"
					onClick={toggleTaskStatus}
					style={{ transition: "all 350ms ease" }}
				/>
				<Description isCompleted={isCompleted}>{description}</Description>
			</Content>

			<Info>
				<ConcludedAt>
					{conclusionTime && isCompleted ? (
						<>
							<AlarmOnIcon size="small" />
							<Time>{moment(conclusionTime).format("LT")}</Time>
						</>
					) : (
						""
					)}
				</ConcludedAt>
				{isEditable ? (
					<IconButton
						style={{ color: "#cf1b1b" }}
						size="small"
						onClick={() => confirmTaskDeleteOpenVar({ isOpen: true })}
					>
						<DeleteIcon />
					</IconButton>
				) : (
					""
				)}
			</Info>
			<ConfirmTaskDeleteDialog id={id} />
		</Container>
	);
};

export default TaskItem;
