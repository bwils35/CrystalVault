import React from "react";
import styled from "styled-components";
import CrystalPic from "../../Images/CrystalPic.jpg";
import IncensePic from "../../Images/IncensePic.jpg";

export const Cart = () => {
	return (
		<Container>
			<Wrapper>
				<Title>YOUR CART</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TextContainer>
						<TopText>Cart(3)</TopText>
						<TopText>Wishlist(0)</TopText>
					</TextContainer>
					<TopButton color="filled">CHECKOUT</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<ProductIMG src={CrystalPic} />
								<Details>
									<ProductName>
										<b>Product:</b> Crystal
									</ProductName>
									<ProductID>
										<b>ID:</b> 123456
									</ProductID>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<>&#x2212;</>
									<ProductAmount>2</ProductAmount>
									<>&#x2b;</>
								</ProductAmountContainer>
								<ProductPrice>$30</ProductPrice>
							</PriceDetail>
						</Product>

						<Separator />

						<Product>
							<ProductDetail>
								<ProductIMG src={IncensePic} />
								<Details>
									<ProductName>
										<b>Product:</b> Incense
									</ProductName>
									<ProductID>
										<b>ID:</b> 456789
									</ProductID>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<>&#x2212;</>
									<ProductAmount>1</ProductAmount>
									<>&#x2b;</>
								</ProductAmountContainer>
								<ProductPrice>$7.50</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>Summary</Summary>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
	color: white;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TextContainer = styled.div``;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
	color: white;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.color === "filled" && "none"};
	background-color: ${(props) =>
		props.color === "filled" ? "black" : "white"};
	color: ${(props) => props.color === "filled" && "white"};
	border-radius: 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
	/* color: white; */
`;

const ProductIMG = styled.img`
	width: 200px;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span`
	color: #eee;
`;

const ProductID = styled.span`
	color: #eee;
`;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #eee;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
`;

const Summary = styled.div`
	flex: 1;
	color: #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Separator = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;
