import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import socket from "./server";
import ChatPage from "./pages/ChatPage/ChatPage";
import RoomListPage from "./pages/RoomListPage/RoomListPage";
import MainPage from "./pages/MainPage/MainPage";
import MainPageMobile from "./pages/MainPageMobile/MainPageMobile";
import MainPageTablet from "./pages/MainPageTablet/MainPageTablet";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [rooms, setRooms] = useState([]);

  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    socket.on("rooms", (res) => {
      setRooms(res);
    });
  }, [user, rooms]);

  return (
    <Router>
      <Routes>
        <Route
          path="/room/:id"
          element={<ChatPage user={user} rooms={rooms} userId={userId} />}
        />
        <Route exact path="/rooms" element={<RoomListPage rooms={rooms} />} />
        {isPc && (
          <Route
            path="/"
            element={<MainPage setUser={setUser} setUserId={setUserId} />}
          />
        )}
        {isTablet && (
          <Route
            path="/"
            element={<MainPageTablet setUser={setUser} setUserId={setUserId} />}
          />
        )}
        {isMobile && (
          <Route
            path="/"
            element={<MainPageMobile setUser={setUser} setUserId={setUserId} />}
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
