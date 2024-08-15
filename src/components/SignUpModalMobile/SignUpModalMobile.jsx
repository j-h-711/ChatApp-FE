import React, { useState, useRef, useEffect } from "react";
import socket from "../../server";
import swal from "sweetalert";
import * as S from "./styles";
import {
  SignUpModalContainer,
  SignUpModalWrapper,
  SignUpForm,
  SignUpNav,
  SignUpLabel,
  SignUpInput,
  SignUpP,
  SignUpBtn,
  SignUpTitle,
  SignUpCancelBtn,
} from "./styles";

function SignUpModalMobile({ regisModal, setRegisModal }) {
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
    <SignUpModalContainer>
      <SignUpModalWrapper>
        <SignUpNav>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpCancelBtn onClick={closeModal}>X</SignUpCancelBtn>
        </SignUpNav>

        <SignUpForm onSubmit={handleRegister}>
          <SignUpLabel>
            <SignUpP>이름</SignUpP>
            <SignUpInput
              type="text"
              ref={nameInputRef}
              value={regisName}
              placeholder="0~10자 이내로 입력해주세요..."
              onChange={(e) => setRegisName(e.target.value)}
            />
          </SignUpLabel>
          <SignUpLabel>
            <SignUpP>비밀번호</SignUpP>
            <SignUpInput
              type="password"
              ref={regisPasswordRef}
              value={regisPassword}
              placeholder="비밀번호 입력..."
              onChange={(e) => setRegisPassword(e.target.value)}
            />
            <SignUpInput
              type="password"
              ref={checkPasswordRef}
              value={checkPassword}
              placeholder="비밀번호 확인..."
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </SignUpLabel>

          <SignUpBtn type="submit">회원가입</SignUpBtn>
        </SignUpForm>
      </SignUpModalWrapper>
    </SignUpModalContainer>
  );
}

export default SignUpModalMobile;
