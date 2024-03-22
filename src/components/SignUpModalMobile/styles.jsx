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
  height: 100vh;
`;

export const SignUpModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
  border-radius: 4px;
  border: 10px solid #86b6f6 !important;
`;

export const SignUpNav = styled.p`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b4d4ff;
  margin-top: 0px;
  margin-bottom: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-bottom: 15%;
`;

export const SignUpTitle = styled.div`
  width: 90%;
  display: flex;
  padding-left: 40%;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const SignUpCancelBtn = styled.div`
  width: 10%;
  color: blue;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const SignUpForm = styled.form`
  height: 85vh;
`;

export const SignUpLabel = styled.label`
  margin: 40px 48px;
  display: flex;
  flex-direction: column;
`;

export const SignUpP = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const SignUpInput = styled.input`
  padding: 0px 8px;
  display: flex;
  height: 20px;
  margin-top: auto;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border: none;
  border-bottom: 2px solid lightblue !important;
  font-size: 14px;

  &:focus {
    outline: none;
    border-bottom: 2px solid blue !important;
  }
`;

export const SignUpBtn = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 40px;
  border-radius: 16px;
  background-color: #b4d4ff;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15%;
`;
