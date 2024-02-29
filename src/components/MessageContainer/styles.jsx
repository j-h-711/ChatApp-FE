import React, { useState } from "react";
import styled from "styled-components";

export const MessageWrapper = styled.div`
  width: 100%;
  margin-left: 1rem;
  height: 100%;
  margin: 0 !important;
  max-height: 64vh;

  overflow-y: auto;
`;
export const MessageAreaContainer = styled.div``;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyMessage = styled.div`
  background-color: #f7e600;
  border-radius: 8px;
  padding: 8px;
  marign-top: 4px;
  margin-bottom: 4px;
  max-width: 200px;
  font-size: 12px;
`;

export const YourMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1%;
`;

export const YourMessage = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  max-width: 200px;
  font-size: 12px;
  height: 16px !important;
  margin: 0px !important;
`;

export const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  margin-right: 10px;
`;
