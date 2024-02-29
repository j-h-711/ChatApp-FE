import React, { useState, useRef, useEffect } from "react";
import {
  MessageWrapper,
  MessageAreaContainer,
  SystemMessageContainer,
  SystemMessage,
  MyMessageContainer,
  YourMessageContainer,
  ProfileImage,
  YourMessage,
  MyMessage,
  UserName,
  UserContainer,
} from "./styles";

export const MessageContainer = ({ messageList, user }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MessageWrapper>
      {messageList.map((message, index) => {
        const uniqueKey = message._id || index;
        return (
          <MessageAreaContainer key={uniqueKey}>
            {message.user.name === "system" ? (
              <SystemMessageContainer>
                <SystemMessage>{message.chat}</SystemMessage>
              </SystemMessageContainer>
            ) : message.user.name === user ? (
              <MyMessageContainer>
                <MyMessage>{message.chat}</MyMessage>
              </MyMessageContainer>
            ) : (
              <YourMessageContainer>
                <UserContainer
                  style={
                    (index === 0
                      ? { visibility: "visible" }
                      : messageList[index - 1].user.name === user) ||
                    messageList[index - 1].user.name === "system"
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                >
                  <ProfileImage src="/profile.jpeg" />
                  <UserName style={{ fontSize: "12px", marginRight: "8px" }}>
                    {message.user.name}
                  </UserName>
                </UserContainer>

                <YourMessage>{message.chat}</YourMessage>
              </YourMessageContainer>
            )}
          </MessageAreaContainer>
        );
      })}
      <div ref={messageEndRef}></div>
    </MessageWrapper>
  );
};

export default MessageContainer;
