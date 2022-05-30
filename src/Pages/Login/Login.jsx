import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
	width: 25%;
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
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
	border-radius: 8px;
`;

const Button = styled.button`
	/* width: 40%;
	border: none;
	padding: 15px 20px;
	color: white;
	margin: 10px 0px;
	background-color: rgb(192, 63, 218);
	cursor: pointer; */

	width: 40%;
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
	background-position: 0%;
	background-size: 200%;
	transition: 0.4s;
	:hover {
		background-position: 100% 0%;
	}
`;

const Link = styled.nav`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	let nav = useNavigate();
	return (
		<Container>
			<Card>
				<Title>SIGN IN</Title>
				<Form>
					<Input type="text" name="username" placeholder="Username" />
					<Input
						type="password"
						name="password"
						placeholder="Password"
					/>
					<Button>LOGIN</Button>
					<Link
						onClick={() => {
							nav("/");
						}}
					>
						Forgot Password?
					</Link>
					<Link>Create an Account</Link>
				</Form>
			</Card>
		</Container>
	);
};

export default Login;
