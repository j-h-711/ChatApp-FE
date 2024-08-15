import React, { useState, useRef, useEffect } from "react";
import swal from "sweetalert";
import socket from "../../server";
import * as S from "./styles";

function SignUpModal({ regisModal, setRegisModal }) {
  const [regisName, setRegisName] = useState("");
  const [regisPassword, setRegisPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const nameInputRef = useRef(null);
  const regisPasswordRef = useRef(null);
  const checkPasswordRef = useRef(null);

  const successAlert = (msg) => {
    swal("Success", msg, "success");
  };
  const errorAlert = (msg) => {
    swal("Fail", msg, "error");
  };

  useEffect(() => {}, [regisPassword, checkPassword, regisName]);

  // 회원가입
  const handleRegister = (e) => {
    e.preventDefault();

    if (regisName.length > 10 || regisName.length === 0) {
      errorAlert("이름은 0에서 10자 이내로 설정해주세요.");
      setRegisName("");
      nameInputRef.current.focus();
    } else if (regisPassword.length === 0) {
      errorAlert("비밀번호를 입력해주세요");
      regisPasswordRef.current.focus();
    } else if (checkPassword.length === 0) {
      errorAlert("비밀번호 확인을 입력해주세요");
      checkPasswordRef.current.focus();
    } else if (regisPassword !== checkPassword) {
      errorAlert("비밀번호와 비밀번호 확인을 동일하게 설정해주세요.");
      setRegisPassword("");
      setCheckPassword("");
    } else {
      socket.emit("register", regisName, regisPassword, (res) => {
        console.log("res : ", res);
        if (res?.ok) {
          setRegisModal(false);
          successAlert("회원가입 완료! 로그인을 시도해주세요");
        } else {
          errorAlert("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
      });
    }
  };

  const closeModal = () => {
    setRegisModal(false);
  };

  return (
    <S.SignUpModalContainer>
      <S.SignUpModalWrapper>
        <S.SignUpNav>
          <S.SignUpTitle>회원가입</S.SignUpTitle>
          <S.SignUpCancelBtn onClick={closeModal}>X</S.SignUpCancelBtn>
        </S.SignUpNav>
        <S.SignUpForm onSubmit={handleRegister}>
          <S.SignUpLabel>
            <S.SignUpP>이름</S.SignUpP>
            <S.SignUpInput
              type="text"
              ref={nameInputRef}
              value={regisName}
              placeholder="0~10자 이내로 입력해주세요..."
              onChange={(e) => setRegisName(e.target.value)}
            />
          </S.SignUpLabel>
          <S.SignUpLabel>
            <S.SignUpP>비밀번호</S.SignUpP>
            <S.SignUpInput
              type="password"
              ref={regisPasswordRef}
              value={regisPassword}
              placeholder="비밀번호 입력..."
              onChange={(e) => setRegisPassword(e.target.value)}
            />
          </S.SignUpLabel>
          <S.SignUpLabel>
            <S.SignUpInput
              type="password"
              ref={checkPasswordRef}
              value={checkPassword}
              placeholder="비밀번호 확인..."
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </S.SignUpLabel>
          <S.SignUpBtn type="submit">회원가입</S.SignUpBtn>
        </S.SignUpForm>
      </S.SignUpModalWrapper>
    </S.SignUpModalContainer>
  );
}

export default SignUpModal;
