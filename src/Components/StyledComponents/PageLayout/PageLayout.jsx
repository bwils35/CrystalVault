import React from "react";
import {
	Container,
	PageContent,
	PageHeader,
	PageFooter,
	Image,
} from "./PageLayout.style";
import CrystalPic from "../../../Images/CrystalPic.jpg";
import Header from "../../Header/Header";

export const PageLayout = () => {
	return (
		<>
			<Container>
				<PageHeader>
					<Header />
				</PageHeader>
				<PageContent>
					<Image src={CrystalPic} />
				</PageContent>
				<PageFooter>Lorem ipsum dolor sit amet</PageFooter>
			</Container>
		</>
	);
};
