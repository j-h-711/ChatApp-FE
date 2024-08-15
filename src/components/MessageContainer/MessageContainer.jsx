import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";

export const MessageContainer = ({ messageList, user }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.MessageWrapper>
      {messageList.map((message, index) => {
        const uniqueKey = message._id || index;
        return (
          <S.MessageAreaContainer key={uniqueKey}>
            {message.user.name === "system" ? (
              <S.SystemMessageContainer>
                <S.SystemMessage>{message.chat}</S.SystemMessage>
              </S.SystemMessageContainer>
            ) : message.user.name === user ? (
              <S.MyMessageContainer>
                <S.MyMessage>{message.chat}</S.MyMessage>
              </S.MyMessageContainer>
            ) : (
              <S.YourMessageContainer>
                <S.UserContainer
                  style={
                    (index === 0
                      ? { visibility: "visible" }
                      : messageList[index - 1].user.name === user) ||
                    messageList[index - 1].user.name === "system"
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                >
                  <S.ProfileImage src="/profile.jpeg" />
                  <S.UserName style={{ fontSize: "12px", marginRight: "8px" }}>
                    {message.user.name}
                  </S.UserName>
                </S.UserContainer>

                <S.YourMessage>{message.chat}</S.YourMessage>
              </S.YourMessageContainer>
            )}
          </S.MessageAreaContainer>
        );
      })}
      <div ref={messageEndRef}></div>
    </S.MessageWrapper>
  );
};

export default MessageContainer;
