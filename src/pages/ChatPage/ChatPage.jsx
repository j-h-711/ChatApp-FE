import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import socket from "../../server";
import { Button } from "@mui/base/Button";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import InputField from "../../components/InputField/InputField";
import {
  ChatPageContainer,
  ChatPageNav,
  LeaveRoomBtn,
  ChatPageWrapper,
  RoomName,
} from "./styles";

const ChatPage = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const roomname = queryParams.get("roomname");

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
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

  const leaveRoom = () => {
    socket.emit("leaveRoom", user, (res) => {
      if (res.ok) navigate("/rooms"); // 다시 채팅방 리스트 페이지로 돌아감
    });
  };

  return (
    <ChatPageContainer>
      <ChatPageWrapper>
        <ChatPageNav>
          <LeaveRoomBtn onClick={leaveRoom}>←</LeaveRoomBtn>
          <RoomName>{roomname}</RoomName>
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
