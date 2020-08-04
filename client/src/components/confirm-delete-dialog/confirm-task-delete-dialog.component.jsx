import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const ConfirmTaskDeleteDialog = ({
	isOpen,
	confirmTaskDeleteOpenVar,
	deleteTask,
	getTasks,
}) => {
	return (
		<Dialog
			open={isOpen}
			keepMounted
			onClose={() => {
				confirmTaskDeleteOpenVar({ isOpen: false });
			}}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle id="alert-dialog-slide-title">{"Are you sure?"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Do you really want to delete this task? It can not be recovered.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => confirmTaskDeleteOpenVar({ isOpen: false })}
					color="primary"
				>
					Cancel
				</Button>
				<Button
					onClick={() => {
						deleteTask({
							refetchQueries: [{ query: getTasks }],
						});
						confirmTaskDeleteOpenVar({ isOpen: false });
					}}
					color="primary"
				>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmTaskDeleteDialog;
