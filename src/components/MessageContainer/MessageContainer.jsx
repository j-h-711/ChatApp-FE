import React, { useState } from "react";
import "./MessageContainer.css";
import { Container } from "@mui/system";

export const MessageContainer = ({ messageList, user }) => {
  console.log("list", messageList);
  console.log("user", user);

  return (
    <div>
      {messageList.map((message, index) => {
        const uniqueKey = message._id || index;
        return (
          <Container key={uniqueKey} className="message-container">
            {message.user.name === "system" ? (
              <div className="system-message-container">
                <p className="system-message">{message.chat}</p>
              </div>
            ) : message.user.name === user ? (
              <div className="my-message-container">
                <div className="my-message">{message.chat}</div>
              </div>
            ) : (
              <div className="your-message-container">
                <img
                  src="/profile.jpeg"
                  className="profile-image"
                  style={
                    (index === 0
                      ? { visibility: "visible" }
                      : messageList[index - 1].user.name === user) ||
                    messageList[index - 1].user.name === "system"
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                />
                <p style={{ fontSize: "12px", marginRight: "8px" }}>
                  {message.user.name}
                </p>
                <div className="your-message">{message.chat}</div>
              </div>
            )}
          </Container>
        );
      })}
    </div>
  );
};

export default MessageContainer;
