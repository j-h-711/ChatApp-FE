import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import socket from "../../server";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import InputField from "../../components/InputField/InputField";
import * as S from "./styles";

const ChatPage = ({ user, rooms, userId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const roomname = queryParams.get("roomname");

  const roomDeleteAlert = () => {
    swal("Success", "delete the room", "success");
  };

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
      // console.log("message", res);
      setMessageList((prevState) => prevState.concat(res));
    });

    socket.emit("joinRoom", id, (res) => {
      if (res && res.ok) {
        console.log("successfully join", res);
      } else {
        console.log("fail to join", res);
      }
      console.log(res);
    });

    socket.on("messageHistory", (chatHistory) => {
      console.log("Received chat history:", chatHistory);
      setMessageList(chatHistory); // Set initial chat history
    });

    const unblock = () => {
      // 이전 페이지로 이동하는 경우
      leaveRoom();
    };

    window.addEventListener("popstate", unblock);

    return () => window.removeEventListener("popstate", unblock);
  }, []);

  // 메시지 발신
  const sendMessage = (event) => {
    event.preventDefault();

    socket.emit("sendMessage", message, (res) => {
      if (!res.ok) {
        console.log("error message", res.error);
      }
      setMessage("");
    });
  };

  // 방 나가기
  const leaveRoom = (event) => {
    event.preventDefault();
    socket.emit("leaveRoom", user, (res) => {
      if (res.ok) navigate("/rooms"); // 다시 채팅방 리스트 페이지로 돌아감
    });
  };

  // 방 삭제
  const deleteRoom = (event) => {
    event.preventDefault();
    socket.emit("deleteRoom", roomId, (res) => {
      if (res.ok) {
        roomDeleteAlert();
        navigate("/rooms");
      } else {
        console.log("error message", res.error);
      }
    });
  };

  return (
    <S.ChatPageContainer>
      <S.ChatPageWrapper>
        <S.ChatPageNav>
          <S.LeaveAndRoomname>
            <S.LeaveRoomBtn onClick={leaveRoom}>←</S.LeaveRoomBtn>
            <S.RoomName>{roomname}</S.RoomName>
          </S.LeaveAndRoomname>
          {userId === hostId && (
            <S.DeleteRoomBtn onClick={deleteRoom}>Del</S.DeleteRoomBtn>
          )}
        </S.ChatPageNav>

        {messageList.length > 0 ? (
          <MessageContainer messageList={messageList} user={user} />
        ) : null}

        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </S.ChatPageWrapper>
    </S.ChatPageContainer>
  );
};

export default ChatPage;
