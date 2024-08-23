import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import socket from "../../server";
import * as S from "./styles";

export const AddRoomModal = ({ setAddRoomState, rooms }) => {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [roomPasswordCheck, setRoomPasswordCheck] = useState("");
  const roomAddAlert = (msg) => {
    swal("Success", `"${msg}" 방이 생성되었습니다.`, "success");
  };
  const errorAlert = (msg) => {
    swal("Fail add room", msg, "error");
  };

  const addRoomSubmit = (e) => {
    e.preventDefault();

    console.log("Room Name:", roomName);
    console.log("Room Password:", roomPassword);
    // 중복 방 찾음
    let isDuplicate = rooms.some((room) => room.room === roomName);
    if (isDuplicate) {
      errorAlert("이미 해당 회의방이 존재합니다.");
    } else if (
      roomPassword !== roomPasswordCheck ||
      roomPassword.length === 0 ||
      roomPasswordCheck.length === 0
    ) {
      errorAlert("비밀번호를 확인해주세요.");
    } else {
      socket.emit("addRoom", roomName, roomPassword, (res) => {
        console.log("res : ", res);
        if (res?.ok) {
          roomAddAlert(roomName);
          setAddRoomState(false);
        } else {
          errorAlert("방 추가 실패");
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
            <S.InputNameArea>
              <label>
                <S.RoomP>방 이름</S.RoomP>
                <S.RoomInput
                  onChange={(e) => setRoomName(e.target.value)}
                ></S.RoomInput>
              </label>
            </S.InputNameArea>
            <S.InputPassArea>
              <label>
                <S.RoomP>비밀번호</S.RoomP>
                <S.RoomInput
                  onChange={(e) => setRoomPassword(e.target.value)}
                ></S.RoomInput>
                <S.RoomP>비밀번호 확인</S.RoomP>
                <S.RoomInput
                  onChange={(e) => setRoomPasswordCheck(e.target.value)}
                ></S.RoomInput>
              </label>
            </S.InputPassArea>
          </S.InputArea>

          <S.SubmitBtn type="submit">방 만들기</S.SubmitBtn>
        </S.AddRoomForm>
      </S.AddRoomWrapper>
    </S.AddRoomModalContainer>
  );
};

export default AddRoomModal;
