import React, { useState } from "react";
import styled from "styled-components";

export const MainPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  border-radius: 8px;
  border: 4px solid #b4d4ff;
  height: 100vh;
  width: 100%;
  background-color: #eef5ff;
  margin-left: auto;
  margin-right: auto;
`;

export const MainPageTitle = styled.div`
  height: 20%;
  font-size: 10%;
  border-bottom: 2px solid #86b6f6;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px !important;
  height: 100%;
`;

export const LoginContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
`;

export const NameLabel = styled.label`
  margin-top: 5%;
  height: 40%;
`;
export const PassLabel = styled.label`
  height: 40%;
`;

export const LoginP = styled.p`
  width: 70%;
  margin: 3% auto 1% auto;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 70%;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #86b6f6;
  &:focus {
    outline: none;
    border: 2px solid #86b6f6;
  }
  font-size: 16px;
`;

export const LoginBtnContainer = styled.div`
  height: 10%;
  wdith: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBtn = styled.button`
  height: 50%;
  color: white;
  margin-left: 30%;
  margin-right: 30%;
  width: 40%;
  border-radius: 8px;
  border: 1px solid #86b6f6;
  background-color: #b4d4ff;
  cursor: pointer;
`;

export const SignUpContainer = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpBtn = styled.button`
  width: 70%;
  height: 50%;
  color: white;
  margin-left: 15%;
  margin-right: 15%;
  border-radius: 8px;
  border: 1px solid #86b6f6;
  background-color: #b4d4ff;
  cursor: pointer;
`;
