import { useContext, useEffect, useState } from "react";
import Editor from "../Components/Editor/Editor";
import VideoCall from "../Components/VideoCall/VideoCall";
import "./style.css";
import Utilities from "../Components/Utitlities/Utitlities";
import { Container, Row, Button } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import socket from "../socket";

export default function Room() {
  const [roomId, setRoomId] = useState("");
  const [access, setAccess] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const url = window.location.href;
    const id = url.substr(url.lastIndexOf("/") + 1, url.length);
    setRoomId(id);
    socket.emit("join-room", id);
  }, []);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  if (access) {
    return (
      <>
        <Container fluid className="p-0" id="room-view">
          <div className="navbar" id="room-nav">
            <div className="container-fluid">
              <a className="navbar-brand site-name" href="/">
                Intereact
                {/* <img src="https://i.imgur.com/HTLGops.png" alt="logo" width="24" height="24" className="d-inline-block align-text-top"/> */}
              </a>
              <Container>
                <a
                  className="float-end"
                  href="/"
                  style={{ marginLeft: "10px" }}
                >
                  <Button variant="danger">Exit</Button>
                </a>
                <Button
                  className="float-end"
                  onClick={(e) => {
                    navigator.clipboard.writeText(
                      `https://intereact-ee0ef.web.app/room/${roomId}`
                    );
                  }}
                >
                  copy room link
                </Button>
              </Container>
            </div>
          </div>
          <div className="container-fluid ">
            <Row className="" id="room-row1">
              <div className="col" id="editor">
                <Editor />
              </div>
              <div className="col" id="utility">
                <Utilities socket={socket} />
              </div>
            </Row>
            <div className="position-absolute" id="video-call">
              <VideoCall socket={socket} />
            </div>
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container fluid className="joining-room">
          <div>
            <h2>Ready to join ?</h2>
            <Button
              className="rounded-pill"
              onClick={() => {
                setAccess(true);
              }}
            >
              Join now
            </Button>
          </div>
        </Container>
      </>
    );
  }
}
