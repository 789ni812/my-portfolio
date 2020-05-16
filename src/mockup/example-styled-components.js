import React from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  button {
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;
`;

const Login = () => (
    <StyledLogin>
        <h2>Login</h2>
        <StyledInput type="text" placeholder="email" />
        <StyledInput type="password" placeholder="password" />
        <button>Login</button>
    </StyledLogin>
);

export default Login;