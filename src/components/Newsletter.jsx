import React, { useState } from 'react';
import { Send } from '@material-ui/icons'
import { mobile } from "../responsive";
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import './ImpCss.css'; 

const Container = styled.div`
  height: 60vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 3px solid white;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  const [isValid, setIsValid] = useState(false);
  
  const [message, setMessage] = useState('');
  
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Thank you for registering!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email');
    }
  };

  function sendEmail(e) {
    e.preventDefault();   
    console.log(process.env.REACT_APP_SERVICE_ID)
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target,process.env.REACT_APP_PUBLIC_API).then((result) => {
          window.location.reload()  
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get updated whenever the latest stock drops.</Desc>
      <InputContainer>
        <Input placeholder="email@domain.com" />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
