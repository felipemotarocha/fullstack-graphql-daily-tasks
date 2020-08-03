import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";

import { Container } from "./navbar.styles";

const Navbar = () => {
	return (
		<Container>
			<MenuIcon fontSize="large" />
			<Avatar alt="Remy Sharp" src="https://imgur.com/bP0Ixst.jpg" />
		</Container>
	);
};

export default Navbar;
