import React, { useState } from "react";
import styled from "styled-components";

export const MainPageContainer = styled.div`
  height: 50vh;
  margin-top: 25vh;
  background-color: #eef5ff;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  position: relative;
  border-radius: 8px;
  border: 4px solid #b4d4ff;
`;

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const MainPageTitle = styled.div`
  font-size: 1.5em;
  border-bottom: 2px solid #86b6f6;
  height: 10%;
  padding: 5% 0px;
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px !important;
  height: 100%;
`;

export const LoginForm = styled.form`
  max-height: 44%;
  padding: 5% 0;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const LoginP = styled.p`
  width: 88%;
  margin: 2px auto;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 88%;
  height: 20px;
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
  font-size: 12px;
`;

export const LoginBtn = styled.button`
  color: white;
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
  width: 40%;
  border-radius: 8px;
  border: 1px solid #86b6f6;
  background-color: #b4d4ff;
  cursor: pointer;
`;

export const SignUpContainer = styled.div`
  max-height: 30%;
`;

export const SignUpBtn = styled.button`
  width: 80%;
  max-height: 50%;
  color: white;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 8px;
  border: 1px solid #86b6f6;
  background-color: #b4d4ff;
  cursor: pointer;
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
