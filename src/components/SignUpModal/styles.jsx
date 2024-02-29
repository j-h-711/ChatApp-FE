import React from "react";
import styled from "styled-components";

export const SignUpModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #00000080;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SignUpModalWrapper = styled.div`
  width: 375px;
  height: 400px;
  background-color: white;
  border-radius: 4px;
  border: 4px solid #86b6f6 !important;
`;

export const SignUpNav = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #b4d4ff;
  margin-top: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const SignUpTitle = styled.div`
  width: 90%;
  display: flex;
  padding-left: 42%;
  color: white;
`;

export const SignUpCancelBtn = styled.div`
  width: 10%;
  color: blue;

  &:hover {
    cursor: pointer;
  }
`;

export const SignUpForm = styled.form`
  margin-top: 48px;
`;

export const SignUpLabel = styled.label`
  margin: 12px 48px;
  display: flex;
  flex-direction: column;
`;

export const SignUpP = styled.p`
  font-size: 12px;
`;

export const SignUpInput = styled.input`
  padding: 0px 8px;
  display: flex;
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border: none;
  border-bottom: 1px solid lightblue !important;

  &:focus {
    outline: none;
    border-bottom: 1px solid blue !important;
  }
`;

export const SignUpBtn = styled.button`
  display: flex;
  margin: 60px auto;
  width: 200px;
  height: 40px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: #b4d4ff;
  border: none;
  color: white;
  cursor: pointer;
`;
