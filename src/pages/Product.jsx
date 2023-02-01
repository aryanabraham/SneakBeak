import {
  AddCircleOutlineRounded,
  RemoveCircleOutlineRounded,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProgressBar from "react-scroll-progress-bar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 25px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200; ;
`;

const FilterColor = styled.div`
  width: 10px;
  height: 10px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
    <ProgressBar height="7px" duration="0.2"/>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://assets.reebok.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0dd403b1b0a14a889fa3ac7d00147f6d_9366/Answer_IV_Men's_Basketball_Shoes_White_FY9691_01_standard.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Answer IV Men's Basketball Shoes</Title>
          <Price>$160</Price>
          <Desc>
            This white and back OG-inspired colorway is latest in the lineup of
            iconic Answer IV shoes. Building on Allen Iverson's legendary
            sneaker legacy, this drop features a special edition sockliner
            highlighting Iverson's tattoos, stark color blocking and signature
            details.
          </Desc>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>UK 5</FilterSizeOption>
                <FilterSizeOption>UK 6</FilterSizeOption>
                <FilterSizeOption>UK 7</FilterSizeOption>
                <FilterSizeOption>UK 8</FilterSizeOption>
                <FilterSizeOption>UK 9</FilterSizeOption>
                <FilterSizeOption>UK 10</FilterSizeOption>
                <FilterSizeOption>UK 11</FilterSizeOption>
                <FilterSizeOption>UK 12</FilterSizeOption>
                <FilterSizeOption>UK 13</FilterSizeOption>
                <FilterSizeOption>UK 14</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlineRounded />
              <Amount>1</Amount>
              <AddCircleOutlineRounded />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
