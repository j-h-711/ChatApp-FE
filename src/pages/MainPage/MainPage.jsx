import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import socket from "../../server";
import SignUpModal from "../../components/SignUpModal/SignUpModal";
import * as S from "./styles";

function MainPage({ setUser, setUserId }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [regisName, setRegisName] = useState("");
  const [regisPassword, setRegisPassword] = useState("");

  const [regisModal, setRegisModal] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  // 로그인 성공시 notify alert
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
        notifyAlert(userName);
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
    <S.MainPageContainer>
      <S.LoginForm>
        <S.MainPageTitle>
          <S.Title>사내 실시간 회의 시스템</S.Title>
        </S.MainPageTitle>

        <S.LoginContainer>
          <S.NameLabel>
            <S.LoginP>이름</S.LoginP>
            <S.LoginInput
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </S.NameLabel>

          <S.PassLabel>
            <S.LoginP>비밀번호</S.LoginP>
            <S.LoginInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.PassLabel>
        </S.LoginContainer>

        <S.LoginBtnContainer>
          <S.LoginBtn type="button" onClick={handleLogin}>
            로그인
          </S.LoginBtn>
        </S.LoginBtnContainer>

        <S.SignUpContainer>
          <S.SignUpBtn
            type="button"
            onClick={() => {
              setRegisModal(true);
            }}
          >
            회원가입
          </S.SignUpBtn>
          {regisModal && (
            <SignUpModal
              regisModal={regisModal}
              setRegisModal={setRegisModal}
            ></SignUpModal>
          )}
        </S.SignUpContainer>
      </S.LoginForm>
    </S.MainPageContainer>
  );
}

export default MainPage;
