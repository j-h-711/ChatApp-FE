import React, { useState } from "react";
import styled from "styled-components";

export const ChatPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0px !important;
  align-items: center;
  justify-content: center;

  /* 스크롤 바 스타일링 */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* 스크롤 바 색상 */
  ::-webkit-scrollbar-track {
    background: lightblue;
  }

  /* 스크롤 바 역할 */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* 스크롤 버튼 클릭 시 색상 */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ChatPageWrapper = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  background-color: #e4f1ff;
  margin-left: auto;
  margin-right: auto;
  height: 80%;
  position: relative;
  border: 2px solid #4f709c;
  border-radius: 4px;
`;

export const ChatPageNav = styled.nav`
  display: flex;
  align-items: center;
  height: 8vh;
  background-color: #86b6f6;
  justify-content: space-between;
`;

export const LeaveAndRoomname = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeaveRoomBtn = styled.button`
  height: 50px;
  width: 50px;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
  margin-right: 10px;
`;

export const RoomName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const DeleteRoomBtn = styled.button`
  margin-right: 1em;
  max-width: 3em;
  max-height: 2em;
  font-size: 1em;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
`;
