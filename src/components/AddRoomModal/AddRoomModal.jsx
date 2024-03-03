import React, { useState, useEffect } from "react";
import socket from "../../server";
import {
  AddRoomModalContainer,
  AddRoomWrapper,
  AddRoomForm,
  AddRoomNav,
  RoomNameInput,
  InputArea,
  RoomP,
  SubmitBtn,
} from "./styles";

export const AddRoomModal = ({ setAddRoomState, rooms }) => {
  const [roomName, setRoomName] = useState("");

  const addRoomSubmit = () => {
    // 중복 방 찾음
    let isDuplicate = rooms.some((room) => room.room === roomName);
    if (isDuplicate) {
      alert("이미 해당 회의방이 존재합니다.");
    } else {
      socket.emit("addRoom", roomName, (res) => {
        console.log("res : ", res);
        if (res?.ok) {
          alert("신규 방 생성이 완료되었습니다.");
          setAddRoomState(false);
        } else {
          alert("방 생성에 실패했습니다. 다시 시도해주세요.");
        }
      });
    }
  };

  return (
    <AddRoomModalContainer>
      <AddRoomWrapper>
        <AddRoomForm onSubmit={addRoomSubmit}>
          <AddRoomNav>신규 회의방 생성</AddRoomNav>

          <InputArea>
            <label>
              <RoomP>방 이름</RoomP>
              <RoomNameInput
                onChange={(e) => setRoomName(e.target.value)}
              ></RoomNameInput>
            </label>
          </InputArea>

          <SubmitBtn type="submit">방 만들기</SubmitBtn>
        </AddRoomForm>
      </AddRoomWrapper>
    </AddRoomModalContainer>
  );
};

export default AddRoomModal;
