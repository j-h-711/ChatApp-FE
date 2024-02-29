import React from "react";
import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: red;
  min-height: 50px;
  display: flex;
  position: absolute;
  bottom: 0;
  height: 8vh;
  width: 100%;
`;

export const PlusButton = styled.div`
  background-color: lightslategray;
  width: 50px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InputArea = styled.input`
  height: 100%;
  width: 100%;
  border: none !important;
  border-color: white;
  padding: 0 !important;
  padding-left: 8px !important;

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  min-width: 70px;
  border-radius: 0;
  background-color: #86b6f6;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: yellow;
  }
`;
