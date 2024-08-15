import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import socket from "../../server";
import * as S from "./styles";

export const AddRoomModal = ({ setAddRoomState, rooms }) => {
  const [roomName, setRoomName] = useState("");
  const roomAddAlert = () => {
    swal("Success", "create this room", "success");
  };
  const errorAlert = () => {
    swal("Fail add room", "Please check ROOM NAME", "error");
  };

  const addRoomSubmit = () => {
    // 중복 방 찾음
    let isDuplicate = rooms.some((room) => room.room === roomName);
    if (isDuplicate) {
      // alert("이미 해당 회의방이 존재합니다.");
      errorAlert();
    } else {
      socket.emit("addRoom", roomName, (res) => {
        console.log("res : ", res);
        if (res?.ok) {
          roomAddAlert();
          setAddRoomState(false);
        } else {
          errorAlert();
        }
      });
    }
  };

  return (
    <S.AddRoomModalContainer>
      <S.AddRoomWrapper>
        <S.AddRoomForm onSubmit={addRoomSubmit}>
          <S.AddRoomNav>신규 회의방 생성</S.AddRoomNav>

          <S.InputArea>
            <label>
              <S.RoomP>방 이름</S.RoomP>
              <S.RoomNameInput
                onChange={(e) => setRoomName(e.target.value)}
              ></S.RoomNameInput>
            </label>
          </S.InputArea>

          <S.SubmitBtn type="submit">방 만들기</S.SubmitBtn>
        </S.AddRoomForm>
      </S.AddRoomWrapper>
    </S.AddRoomModalContainer>
  );
};

export default AddRoomModal;
