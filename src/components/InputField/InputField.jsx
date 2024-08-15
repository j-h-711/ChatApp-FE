import React from "react";
import * as S from "./styles";

export const InputField = ({ message, setMessage, sendMessage }) => {
  return (
    <S.InputContainer>
      <S.PlusButton>+</S.PlusButton>

      <S.InputForm onSubmit={sendMessage}>
        <S.InputArea
          placeholder="Type in here…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={1}
        />
        <S.SendButton disabled={message === ""} type="submit">
          전송
        </S.SendButton>
      </S.InputForm>
    </S.InputContainer>
  );
};

export default InputField;
