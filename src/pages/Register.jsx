import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  color: black;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 16px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 15%;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            <br></br>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>SUBMIT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
