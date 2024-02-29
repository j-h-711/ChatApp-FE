import React from "react";
import {
  InputContainer,
  PlusButton,
  InputForm,
  InputArea,
  SendButton,
} from "./styles";

export const InputField = ({ message, setMessage, sendMessage }) => {
  return (
    <InputContainer>
      <PlusButton>+</PlusButton>

      <InputForm onSubmit={sendMessage}>
        <InputArea
          placeholder="Type in here…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={1}
        />
        <SendButton disabled={message === ""} type="submit">
          전송
        </SendButton>
      </InputForm>
    </InputContainer>
  );
};

export default InputField;
