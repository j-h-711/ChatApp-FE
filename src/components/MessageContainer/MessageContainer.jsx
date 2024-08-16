import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";

export const MessageContainer = ({ messageList, user }) => {
  const messageEndRef = useRef(null);
  // console.log("user : ", user);

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
        const isMyMessage = message.user.name === user;
        const isFirstMessage = index === 0;
        const isDifferentUser =
          !isFirstMessage &&
          messageList[index - 1].user.name !== message.user.name;

        return (
          <S.MessageAreaContainer key={uniqueKey}>
            {message.user.name === "system" ? (
              <S.SystemMessageContainer>
                <S.SystemMessage>{message.chat}</S.SystemMessage>
              </S.SystemMessageContainer>
            ) : isMyMessage ? (
              <S.MyMessageContainer>
                <S.MyMessage>{message.chat}</S.MyMessage>
              </S.MyMessageContainer>
            ) : (
              <S.YourMessageContainer>
                {isFirstMessage || isDifferentUser ? (
                  <S.UserContainer>
                    <S.ProfileImage src="/profile.jpeg" />
                    <S.UserName
                      style={{ fontSize: "12px", marginRight: "8px" }}
                    >
                      {message.user.name}
                    </S.UserName>
                  </S.UserContainer>
                ) : (
                  // 빈 공간을 차지하도록 빈 요소를 추가합니다.
                  <S.EmptyUserContainer />
                )}

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
