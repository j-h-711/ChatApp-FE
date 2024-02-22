import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import socket from "./server";
import ChatPage from "./pages/ChatPage/ChatPage";
import RoomListPage from "./pages/RoomListPage/RoomListPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [rooms, setRooms] = useState([]);

  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요.");
    // console.log("user : ", userName);

    socket.emit("login", userName, (res) => {
      // callback 함수
      console.log("res : ", res);
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  useEffect(() => {
    askUserName();
    socket.on("rooms", (res) => {
      setRooms(res);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RoomListPage rooms={rooms} />} />
        <Route exact path="/room/:id" element={<ChatPage user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
