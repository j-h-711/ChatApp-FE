import React, { useEffect, useState } from "react";
import socket from "../../server";
import { useNavigate } from "react-router-dom";
import { AddRoomModal } from "../../components/AddRoomModal/AddRoomModal";
import {
  RoomListContainer,
  RoomWrapper,
  RoomNav,
  RoomItem,
  RoomTitle,
  RoomMember,
  RoomLists,
  RoomsTitle,
  AddRoomBtn,
} from "./styles";

const RoomListPage = ({ rooms }) => {
  const navigate = useNavigate();

  const [addRoomState, setAddRoomState] = useState(false);

  const moveToChat = (rid, roomname) => {
    navigate(`/room/${rid}?roomname=${encodeURIComponent(roomname)}`);
  };

  const addRoomHandle = () => {
    setAddRoomState(true);
  };

  return (
    <RoomListContainer>
      <RoomWrapper>
        <RoomNav>
          <RoomsTitle>회의실 ▼</RoomsTitle>
          <AddRoomBtn onClick={addRoomHandle}>+</AddRoomBtn>
        </RoomNav>
        <RoomLists>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <RoomItem
                key={room._id}
                onClick={() => moveToChat(room._id, room.room)}
              >
                <RoomTitle>{room.room}</RoomTitle>
                <RoomMember>member : {room.members.length}</RoomMember>
              </RoomItem>
            ))
          ) : (
            <p>현재 생성된 회의실이 없습니다.</p>
          )}
        </RoomLists>
        {addRoomState && (
          <AddRoomModal
            setAddRoomState={setAddRoomState}
            rooms={rooms}
          ></AddRoomModal>
        )}
      </RoomWrapper>
    </RoomListContainer>
  );
};

export default RoomListPage;
