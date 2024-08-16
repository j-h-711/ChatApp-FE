import React, { useState } from "react";
import styled from "styled-components";

export const MessageWrapper = styled.div`
  width: 100%;
  margin-left: 1rem;
  height: 100%;
  padding-top: 8px;
  margin: 0 !important;
  height: 64vh;

  @media screen and (max-width: 768px) {
    height: 84vh;
  }

  overflow-y: auto;
`;
export const MessageAreaContainer = styled.div``;

export const EmptyUserContainer = styled.div`
  width: 10%;
  max-width: 40px;
  height: 24px;
`;

export const SystemMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SystemMessage = styled.p`
  background-color: #55667758;
  border-radius: 100px;
  text-align: center;
  color: white;
  padding: 2px 15px;
  font-size: 14px;

  margin: 8px !important;
`;

export const UserName = styled.p`
  font-size: 8px;
  margin: 1px;
`;

export const MyMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const UserContainer = styled.div`
  margin: 0px;
  display: flex;
  width: 10%;
  max-width: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const YourMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1%;
`;

export const MyMessage = styled.div`
  background-color: #4f709c;
  color: white;
  border-radius: 8px;
  padding: 8px;
  marign-top: 4px;
  margin-bottom: 4px;
  max-width: 300px;
  font-size: 12px;
`;

export const YourMessage = styled.div`
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  max-width: 300px;
  font-size: 12px;
`;

export const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  margin-right: 10px;
`;
