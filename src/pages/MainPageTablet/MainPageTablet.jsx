import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useMediaQuery } from "react-responsive";
import socket from "../../server";
import SignUpModal from "../../components/SignUpModal/SignUpModal";
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

function MainPageTablet({ setUser, setUserId }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [regisName, setRegisName] = useState("");
  const [regisPassword, setRegisPassword] = useState("");

  const [regisModal, setRegisModal] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const notifyAlert = (name) => {
    swal(`Hello ${name}`, "welcome", "success");
  };
  // 로그인 실패시 error alert
  const errorAlert = () => {
    swal("Fail Login", "Please check your ID & PASSWORD", "error");
  };

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
        errorAlert();
      }
    });
  };

  const closeModal = () => {
    setRegisModal(false);
  };

  return (
    <MainPageContainer>
      <LoginForm>
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
          <LoginBtn type="button" onClick={handleLogin}>
            로그인
          </LoginBtn>
        </LoginBtnContainer>

        <SignUpContainer>
          <SignUpBtn
            type="button"
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
      </LoginForm>
    </MainPageContainer>
  );
}

export default MainPageTablet;
