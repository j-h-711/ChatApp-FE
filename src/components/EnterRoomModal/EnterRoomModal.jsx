import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import socket from "../../server";
import * as S from "./styles";

export const EnterRoomModal = ({
  rid,
  roomname,
  setEnterRoomState,
  moveToChat,
}) => {
  const navigate = useNavigate();
  const [roomPassword, setRoomPassword] = useState("");

  const enterRoomSubmit = (e) => {
    e.preventDefault();

    socket.emit("joinRoom", rid, roomPassword, (response) => {
      if (response.ok) {
        swal("Success", `"${roomname}" 회의방에 입장합니다.`, "success");
        setEnterRoomState(false);
        moveToChat(rid, roomname); // 채팅 화면으로 이동
      } else {
        swal("Error", response.error, "error");
      }
    });
  };

  return (
    <S.AddRoomModalContainer>
      <S.AddRoomWrapper>
        <S.AddRoomForm onSubmit={enterRoomSubmit}>
          <S.AddRoomNav>입장 비밀번호 확인</S.AddRoomNav>

          <S.InputArea>
            <S.InputPassArea>
              <label>
                <S.RoomP>비밀번호</S.RoomP>
                <S.RoomInput
                  onChange={(e) => setRoomPassword(e.target.value)}
                ></S.RoomInput>
              </label>
            </S.InputPassArea>
          </S.InputArea>

          <S.SubmitBtn type="submit">회의실 입장하기</S.SubmitBtn>
        </S.AddRoomForm>
      </S.AddRoomWrapper>
    </S.AddRoomModalContainer>
  );
};

export default EnterRoomModal;
