import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import socket from "./server";
import ChatPage from "./pages/ChatPage/ChatPage";
import RoomListPage from "./pages/RoomListPage/RoomListPage";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on("rooms", (res) => {
      setRooms(res);
    });
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage setUser={setUser} />} />
        <Route exact path="/room/:id" element={<ChatPage user={user} />} />
        <Route exact path="/rooms" element={<RoomListPage rooms={rooms} />} />
      </Routes>
    </Router>
  );
}

export default App;
