import React from "react";
import styled from "styled-components";
import { mobile } from "../../Components/StyledComponents/MediaQueries/responsive";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	/* position: sticky;
	top: 50px; */
	/* border: 1px solid black; */

	/* @media only screen and (max-width: 380px) {
		display: none;
	} */
`;

const Card = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	border-radius: 8px;
	margin: 10px 0px;
	${mobile({ width: "70%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	border-radius: 8px;
`;

const Agreement = styled.div`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	/* width: 40%;
	border: none;
	padding: 15px 20px;
	color: white;
	margin: 10px 0px;
	background-color: rgb(192, 63, 218);
	cursor: pointer; */

	width: 25%;
	height: 35px;
	margin: 10px 0px;
	border-radius: 8px;
	background: #ffce00;
	color: #000000;
	font-size: 20px;
	font-weight: bold;
	border: none;
	cursor: pointer;
	box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.747);
	background-image: linear-gradient(
		to right,
		#ffce00 50%,
		#ffce00 50%,
		rgb(192, 63, 218)
	);
	${mobile({ width: "45%" })}
	background-position: 0%;
	background-size: 200%;
	transition: 0.4s;
	:hover {
		background-position: 100% 0%;
	}
`;

export const Register = () => {
	return (
		<>
			<Container>
				<Card>
					<Title>CREATE AN ACCOUNT</Title>
					<Form>
						<Input type="text" placeholder="First name" />
						<Input type="text" placeholder="Last name" />
						<Input
							type="text"
							name="username"
							placeholder="Username"
						/>
						<Input type="email" placeholder="Email" />
						<Input
							type="password"
							name="password"
							placeholder="Password"
						/>
						<Input type="password" placeholder="Confirm password" />
						<Agreement>
							By creating an account, I consent to the processing
							of my personal data in accordance with{" "}
							<b>PRIVACY POLICY</b>
						</Agreement>
						<Button>REGISTER</Button>
					</Form>
				</Card>
			</Container>
		</>
	);
};
