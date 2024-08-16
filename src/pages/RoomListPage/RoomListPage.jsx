import React, { useEffect, useState } from "react";
import socket from "../../server";
import { useNavigate } from "react-router-dom";
import { AddRoomModal } from "../../components/AddRoomModal/AddRoomModal";
import EnterRoomModal from "../../components/EnterRoomModal/EnterRoomModal";
import * as S from "./styles";

const RoomListPage = ({ rooms }) => {
  const navigate = useNavigate();
  const [addRoomState, setAddRoomState] = useState(false);
  const [addEnterRoomState, setEnterRoomState] = useState(false);
  const [rid, setRid] = useState("");
  const [roomname, setRoomname] = useState("");

  const moveToChat = (rid, roomname) => {
    navigate(`/room/${rid}?roomname=${encodeURIComponent(roomname)}`);
  };

  // 방 추가 모달 조작
  const addRoomHandle = () => {
    setAddRoomState(true);
  };

  // 방 입장 모달 조작
  const enterRoomHandle = (rid, roomname) => {
    setRid(rid);
    setRoomname(roomname);
    setEnterRoomState(true);
  };

  useEffect(() => {}, [rooms]);

  return (
    <S.RoomListContainer>
      <S.RoomWrapper>
        <S.RoomNav>
          <S.RoomsTitle>회의실 ▼</S.RoomsTitle>
          <S.AddRoomBtn onClick={addRoomHandle}>+</S.AddRoomBtn>
        </S.RoomNav>
        <S.RoomLists>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              // <S.RoomItem
              //   key={room._id}
              //   onClick={() => moveToChat(room._id, room.room)}
              // >
              <S.RoomItem
                key={room._id}
                onClick={() => enterRoomHandle(room._id, room.room)}
              >
                <S.RoomTitle>{room.room}</S.RoomTitle>
                <S.RoomMember>member : {room.members.length}</S.RoomMember>
              </S.RoomItem>
            ))
          ) : (
            <p style={{ marginLeft: "12px" }}>현재 생성된 회의실이 없습니다.</p>
          )}
        </S.RoomLists>
        {addRoomState && (
          <AddRoomModal
            setAddRoomState={setAddRoomState}
            rooms={rooms}
          ></AddRoomModal>
        )}
        {addEnterRoomState && (
          <EnterRoomModal
            rid={rid}
            roomname={roomname}
            setEnterRoomState={setEnterRoomState}
            moveToChat={moveToChat}
          ></EnterRoomModal>
        )}
      </S.RoomWrapper>
    </S.RoomListContainer>
  );
};

export default RoomListPage;
