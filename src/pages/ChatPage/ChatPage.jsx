import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import socket from "../../server";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import InputField from "../../components/InputField/InputField";
import {
  ChatPageContainer,
  ChatPageNav,
  LeaveRoomBtn,
  ChatPageWrapper,
  RoomName,
  DeleteRoomBtn,
  LeaveAndRoomname,
} from "./styles";

const ChatPage = ({ user, rooms, userId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const roomname = queryParams.get("roomname");

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");

  const [hostId, setHostId] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const currentRoom = rooms.find((room) => room._id === id);
    if (currentRoom && currentRoom.host === userId) {
      // 현재 사용자가 호스트인 경우
      setHostId(userId);
      setRoomId(currentRoom._id);
    } else {
      // 현재 사용자가 호스트가 아닌 경우
      setHostId(currentRoom.host);
    }

    socket.on("message", (res) => {
      console.log("message", res);
      setMessageList((prevState) => prevState.concat(res));
    });

    socket.emit("joinRoom", id, (res) => {
      if (res && res.ok) {
        console.log("successfully join", res);
      } else {
        console.log("fail to join", res);
      }
    });

    const unblock = () => {
      // 이전 페이지로 이동하는 경우
      leaveRoom();
    };

    window.addEventListener("popstate", unblock);

    return () => window.removeEventListener("popstate", unblock);
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    socket.emit("sendMessage", message, (res) => {
      if (!res.ok) {
        console.log("error message", res.error);
      }
      setMessage("");
    });
  };

  const leaveRoom = (event) => {
    event.preventDefault();
    socket.emit("leaveRoom", user, (res) => {
      if (res.ok) navigate("/rooms"); // 다시 채팅방 리스트 페이지로 돌아감
    });
  };

  const deleteRoom = (event) => {
    event.preventDefault();
    socket.emit("deleteRoom", roomId, (res) => {
      if (res.ok) {
        alert("방이 삭제되었습니다.");
        navigate("/rooms");
      } else {
        console.log("error message", res.error);
      }
    });
  };

  return (
    <ChatPageContainer>
      <ChatPageWrapper>
        <ChatPageNav>
          <LeaveAndRoomname>
            <LeaveRoomBtn onClick={leaveRoom}>←</LeaveRoomBtn>
            <RoomName>{roomname}</RoomName>
          </LeaveAndRoomname>
          {userId === hostId && (
            <DeleteRoomBtn onClick={deleteRoom}>Del</DeleteRoomBtn>
          )}
        </ChatPageNav>

        {messageList.length > 0 ? (
          <MessageContainer messageList={messageList} user={user} />
        ) : null}
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </ChatPageWrapper>
    </ChatPageContainer>
  );
};

export default ChatPage;
