import React, { useState } from "react";
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
	NavbarLink,
	HamburgerButton,
	NavbarLinkExtended,
} from "../StyledComponents/Navbar.style";

function Navbar() {
	const [extendNav, setExtendNav] = useState(false);

	return (
		<NavbarContainer extendNav={extendNav}>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/">Home</NavbarLink>
						<NavbarLink to="/Contact">Contact</NavbarLink>
						<NavbarLink to="/Main">Shop</NavbarLink>
						<HamburgerButton
							onClick={() => {
								setExtendNav((curr) => !curr);
							}}
						>
							{extendNav ? <>&#x2715;</> : <>&#x2261;</>}
						</HamburgerButton>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer></RightContainer>
			</NavbarInnerContainer>
			{extendNav && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="/">Home</NavbarLinkExtended>
					<NavbarLinkExtended to="/Main">Shop</NavbarLinkExtended>
					<NavbarLinkExtended to="/Contact">
						Contact
					</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}

export default Navbar;
