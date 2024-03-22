import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import socket from "../../server";
import SignUpModalMobile from "../../components/SignUpModalMobile/SignUpModalMobile";
import {
  MainPageContainer,
  MainPageTitle,
  LoginForm,
  NameLabel,
  PassLabel,
  LoginInput,
  LoginP,
  LoginBtn,
  SignUpBtn,
  Title,
  SignUpContainer,
  LoginBtnContainer,
  LoginContainer,
} from "./styles";

function MainPageMobile({ setUser, setUserId }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [regisName, setRegisName] = useState("");
  const [regisPassword, setRegisPassword] = useState("");

  const [regisModal, setRegisModal] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  // 로그인
  const handleLogin = (e) => {
    e.preventDefault();
    socket.emit("login", userName, password, (res) => {
      console.log("res : ", res);
      if (res?.ok) {
        setUser(userName);
        setUserId(res.data._id);
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
      <LoginForm onSubmit={handleLogin}>
        <MainPageTitle>
          <Title>사내 실시간 회의 시스템</Title>
        </MainPageTitle>

        <LoginContainer>
          <NameLabel>
            <LoginP>이름</LoginP>
            <LoginInput
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </NameLabel>

          <PassLabel>
            <LoginP>비밀번호</LoginP>
            <LoginInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </PassLabel>
        </LoginContainer>

        <LoginBtnContainer>
          <LoginBtn type="submit">로그인</LoginBtn>
        </LoginBtnContainer>

        <SignUpContainer>
          <SignUpBtn
            onClick={() => {
              setRegisModal(true);
            }}
          >
            회원가입
          </SignUpBtn>
          {regisModal && (
            <SignUpModalMobile
              regisModal={regisModal}
              setRegisModal={setRegisModal}
            ></SignUpModalMobile>
          )}
        </SignUpContainer>
      </LoginForm>
    </MainPageContainer>
  );
}

export default MainPageMobile;
