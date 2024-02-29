import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../server";
import SignUpModal from "../../components/SignUpModal/SignUpModal";
import {
  MainPageContainer,
  MainPageWrapper,
  MainPageTitle,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginP,
  LoginBtn,
  SignUpBtn,
  Title,
  SignUpContainer,
} from "./styles";

function MainPage({ setUser }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [regisName, setRegisName] = useState("");
  const [regisPassword, setRegisPassword] = useState("");

  const [regisModal, setRegisModal] = useState(false);

  // 로그인
  const handleLogin = (e) => {
    e.preventDefault();
    socket.emit("login", userName, password, (res) => {
      console.log("res : ", res);
      if (res?.ok) {
        setUser(userName);
        navigate(`/rooms`);
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    });
  };

  const closeModal = () => {
    setRegisModal(false);
  };

  return (
    <MainPageContainer>
      <MainPageWrapper>

        <MainPageTitle>
          <Title>사내 실시간 회의 시스템</Title>
        </MainPageTitle>

        <LoginForm onSubmit={handleLogin}>
          <LoginLabel>
            <LoginP>이름</LoginP>
            <LoginInput
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </LoginLabel>
          <LoginLabel>
            <LoginP>비밀번호</LoginP>
            <LoginInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LoginLabel>
          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginForm>

        <SignUpContainer>
          <SignUpBtn
            onClick={() => {
              setRegisModal(true);
            }}
          >
            회원가입
          </SignUpBtn>
          {regisModal && (
            <SignUpModal
              regisModal={regisModal}
              setRegisModal={setRegisModal}
            ></SignUpModal>
          )}
        </SignUpContainer>
        
      </MainPageWrapper>
    </MainPageContainer>
  );
}

export default MainPage;
