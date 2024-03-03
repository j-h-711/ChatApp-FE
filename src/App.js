import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import socket from "./server";
import ChatPage from "./pages/ChatPage/ChatPage";
import RoomListPage from "./pages/RoomListPage/RoomListPage";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on("rooms", (res) => {
      setRooms(res);
    });
  }, [user, rooms]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/room/:id"
          element={<ChatPage user={user} rooms={rooms} userId={userId} />}
        />
        <Route exact path="/rooms" element={<RoomListPage rooms={rooms} />} />
        <Route
          exact
          path="/"
          element={<MainPage setUser={setUser} setUserId={setUserId} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
