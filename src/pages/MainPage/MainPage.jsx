import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../server";

function MainPage({ setUser }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [regisName, setRegisName] = useState("");
  const [regisPassword, setRegisPassword] = useState("");

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

  // 회원가입
  const handleRegister = (e) => {
    e.preventDefault();
    socket.emit("register", regisName, regisPassword, (res) => {
      console.log("res : ", res);
      if (res?.ok) {
        navigate(`/`);
        alert("회원가입 완료! 로그인을 시도해주세요");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    });
  };

  return (
    <div>
      <h1>회원가입 및 로그인</h1>
      <form onSubmit={handleLogin}>
        <label>
          이름:
          <input
            type="text"
            value={userName}
            style={{ border: "1px solid black" }}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            style={{ border: "1px solid black" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">로그인</button>
      </form>
      <form onSubmit={handleRegister}>
        <label>
          이름:
          <input
            type="text"
            value={regisName}
            style={{ border: "1px solid black" }}
            onChange={(e) => setRegisName(e.target.value)}
          />
        </label>
        <label>
          비밀번호:
          <input
            type="password"
            value={regisPassword}
            style={{ border: "1px solid black" }}
            onChange={(e) => setRegisPassword(e.target.value)}
          />
        </label>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default MainPage;
