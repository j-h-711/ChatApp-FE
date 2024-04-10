import React from "react";
import styled from "styled-components";

export const RoomListContainer = styled.div`
  height: 80vh;
  margin-top: 10vh;
  background-color: #eef5ff;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  position: relative;
  border-radius: 8px;
  border: 4px solid #b4d4ff;

  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100%;
    margin: 0;
  }
  box-sizing: border-box;
`;

export const RoomWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RoomNav = styled.div`
  height: 10%;
  background-color: #eef5ff;
  border-bottom: 1px solid #b4d4ff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RoomsTitle = styled.p`
  max-height: 100%;
  padding-left: 5%;
`;
export const AddRoomBtn = styled.button`
  max-width: 2em;
  max-height: 2em;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4%;
  border-radius: 50%;
  border: none;
  background-color: lightblue;
  color: white;
  cursor: pointer;
`;

export const RoomLists = styled.div`
  overflow-y: auto;
  height: 90%;
`;

export const RoomItem = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  justify-content: space-between;
  height: 40px;

  &:hover {
    background-color: whitesmoke;
  }
`;

export const RoomTitle = styled.div`
  display: flex;
`;

export const RoomMember = styled.div`
  color: white;
  background-color: rgb(237, 71, 71);
  border-radius: 50px;
  padding: 3px 8px;
  font-size: 16px;
`;
