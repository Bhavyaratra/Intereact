import React, { useEffect, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

import Peer from "peerjs";

import "./video.css";

export default function Videos({ socket }) {
  const [stream, setStream] = useState();

  const myVideo = useRef();
  const userVideo = useRef();

  const [roomId, setRoomId] = useState("");
  const [userId, setUserId] = useState("");
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);
  const [restric, setRestrict] = useState(false);
  // const [peers,setPeers] = useState([]);

  useEffect(() => {
    console.log(stream);
  }, [stream]);

  useEffect(() => {
    const url = window.location.href;
    const room_id = url.substr(url.lastIndexOf("/") + 1, url.length);
    setRoomId(room_id);
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((currentStream) => {
        myVideo.current.srcObject = currentStream;
        const peer = new Peer({
          config: {
            iceServers: [
              { url: "stun:stun1.l.google.com:19302" },
              {
                url: "turn:numb.viagenie.ca",
                credential: "muazkh",
                username: "webrtc@live.com",
              },
            ],
          },
        });
        peer.on("open", (id) => {
          setUserId(id);
          socket.emit("join-room", room_id, id);
        });
        peer.on("call", (call) => {
          call.answer(currentStream);
          call.on("stream", (userVideoStream) => {
            userVideo.current.srcObject = userVideoStream;
          });
        });

        socket.on("user-connected", (userId) => {
          console.log("userConnected", userId);
          const call = peer.call(userId, currentStream);
          call.on("stream", (userVideoStream) => {
            userVideo.current.srcObject = userVideoStream;
          });
          // setPeers(prev=>[...prev,{userId : call }])
        });

        socket.on("user-disconnected", (userId) => {
          // if (peers[userId]) peers[userId].close()
        });

        setStream(currentStream);
      })
      .catch((err) => {
        console.log("stream error", err);
      });

    return () => {
      console.log("set stream null");
      setStream(null);
    };
  }, []);

  function toggleVideoOpt(e, trackKind) {
    e.preventDefault();
    try {
      const currentStream = myVideo.current.srcObject;
      if (trackKind === "video") {
        currentStream.getVideoTracks().forEach(function (track) {
          if (track.kind === "video") {
            if (track.enabled) {
              //track.stop();
              track.enabled = false;
            } else {
              track.enabled = true;
            }
          }
        });
        setCam(!cam); //toggle cam
      } else if (trackKind === "audio") {
        currentStream.getAudioTracks().forEach(function (track) {
          if (track.kind === "audio") {
            if (track.enabled) {
              //track.stop();
              track.enabled = false;
            } else {
              track.enabled = true;
            }
          }
        });
        setMic(!mic); //toggle mic
      }
    } catch (err) {
      console.log("No video/audio stream");
    }
  }

  return (
    <>
      {/* <div className="container"> */}
      <div className="shadow" id="video-player">
        <div className="row justify-content-center ">
          <div className="col" id="video-opt">
            <IconButton
              className=""
              onClick={(e) => {
                toggleVideoOpt(e, "video");
              }}
            >
              {cam ? (
                <VideocamIcon className="icon-btn" />
              ) : (
                <VideocamOffIcon className="icon-btn" />
              )}
            </IconButton>

            <IconButton
              className=""
              onClick={(e) => {
                toggleVideoOpt(e, "audio");
              }}
            >
              {mic ? (
                <MicIcon className="icon-btn" />
              ) : (
                <MicOffIcon className="icon-btn" />
              )}
            </IconButton>
          </div>
          <div className="col" id="video-col">
            <video
              id="my-video"
              playsInline
              muted
              autoPlay
              ref={myVideo}
              width="236px"
              height="135px"
            />
          </div>
          <div className="col" id="video-col">
            <video
              id="user-video"
              playsInline
              autoPlay
              ref={userVideo}
              width="236px"
              height="135px"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
