import styled from "styled-components";

export const AddRoomModalContainer = styled.div`
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

export const AddRoomWrapper = styled.div`
  width: 20%;
  height: 30%;
  background-color: white;
  border: 3px solid #86b6f6 !important;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 30%;
  }
`;

export const AddRoomForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AddRoomNav = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b4d4ff;
  border: none;
`;

export const InputArea = styled.div`
  height: 60%;
  width: 100% !important;
  justify-content: center;
  display: flex;
`;

export const RoomP = styled.p`
  margin-top: 16%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RoomNameInput = styled.input`
  min-width: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  border: 2px solid #b4d4ff;
  border: radius 4px;
  &:focus {
    outline: none;
    border: 1px solid blue !important;
  }
  padding: 0;
  box-sizing: border-box;
  padding: 3px;
`;

export const SubmitBtn = styled.button`
  height: 20%;
  background-color: #b4d4ff;
  border: none;
  color: white;
`;
