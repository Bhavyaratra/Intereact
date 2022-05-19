import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
//components
import Editor from "./Components/Editor/Editor";
import Home from "./Components/Home/Home";
import Room from "./views/Room";
import NotFound from "./Components/NotFound";
import AuthViewModule from "./views/Auth";
import { UserContext } from "./context/UserContext";

function App() {
  const data = localStorage.getItem("user");
  const [user, setUser] = useState(data);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/editor" element={<Editor />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthViewModule />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
