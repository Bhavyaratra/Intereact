import React, {
  useContext,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Container, Button, Row, Col, Navbar } from "react-bootstrap";
import logo from "../../Assets/logo/intereactLogo.png";
import homeImg from "../../Assets/logo/homeImg.svg";
import homeImg2 from "../../Assets/logo/homeImg2.png";
import homeImg3 from "../../Assets/logo/home3.jpeg";
import demoImg from "../../Assets/logo/demoImg.PNG";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./home.css";

export default function Home() {
  const [id, setId] = useState("");
  const divRef = useRef();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = (e) => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useLayoutEffect(() => {
    if (user) {
      const bgcontainer = divRef.current;

      const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

      const numBalls = 50;
      const balls = [];

      for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;

        balls.push(ball);
        bgcontainer.append(ball);
      }

      // Keyframes
      balls.forEach((el, i, ra) => {
        let to = {
          x: Math.random() * (i % 2 === 0 ? -11 : 11),
          y: Math.random() * 12,
        };

        let anim = el.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` },
          ],
          {
            duration: (Math.random() + 1) * 4000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    setId(uuidv4().split("-")[0]);
  }, []);

  if (!user) {
    return <Navigate to="/auth" />;
  }
  return (
    <>
      <Container fluid className=" home1 h-100" style={{ height: "100vh" }}>
        <div id="bg" ref={divRef} />
        <Navbar expand="lg" className="site-container ">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30px"
              className="d-inline-block align-top"
            />
            Intereact
          </Navbar.Brand>
          <Button className="ml-auto" onClick={(e) => handleLogout(e)}>
            Logout
          </Button>
        </Navbar>
        <Container className="h-100 " style={{ marginTop: "100px" }}>
          <Row lg={2} md={1} sm={1}>
            <Col className="d-grid" style={{ placeItems: "center" }}>
              <div>
                <div>
                  <h2 id="bodhome1">
                    Live coding environment with built-in video calls
                  </h2>
                  <p>Interview portal to test the upcoming developers</p>
                </div>
                <Link to={`/room/${id}`}>
                  <Button id="cr" className="btn btn-info">
                    Create Room
                  </Button>
                </Link>
              </div>
            </Col>
            <Col className="d-grid" style={{ placeItems: "center" }}>
              <img alt="" src={homeImg} width="330px" />
            </Col>
          </Row>

          <Row className="" style={{ marginTop: "100px" }}>
            <p id="bodhome3">
              For more information scroll down <br />
              <span> &#8964;</span>
            </p>
          </Row>
        </Container>
        <Container style={{ marginTop: "100px" }}>
          <Row lg={2} sm={1}>
            <Col className="d-grid" style={{ placeItems: "center" }}>
              <img src={homeImg2} alt="" id="homeimg2" />
            </Col>

            <Col className="d-grid" style={{ placeItems: "center" }}>
              <p class="hometxt2">
                Intereact brings a virtual platform to make
                <em>Technical Interviews</em> a hassle free process by providing
                additional features of switching between tabs and applications
                to perform various functions.
              </p>
            </Col>
          </Row>
          <Row lg={2} sm={1}>
            <Col className="d-grid" style={{ placeItems: "center" }}>
              <p class="hometxt2" id="hid">
                Covid-19 pushed us all to our homes and in this process
                conducting an interview for a technical jobs becomes a tedious
                process for both the candidate and the organisation. To make the
                process easier this project has been made.
              </p>
            </Col>
            <Col className="d-grid" style={{ placeItems: "center" }}>
              <img src={homeImg3} alt="" id="homeimg3" />
            </Col>
          </Row>
          <Row lg={1} sm={1} xs={1}>
            <Col className="d-grid" style={{ placeItems: "center" }}>
              <img src={demoImg} className="border" alt="" id="homeimg4" />
            </Col>
            <Col className="d-grid" style={{ placeItems: "center" }}>
              <p class="hometxt2" id="hometext2">
                Currently with the support for three primary language that
                includes
                <em>
                  <b>Node.js, Python & C++</b>
                </em>{" "}
                Intereact can show output for these languages all while being
                connected for the interview and without having a problem to
                switch tabs and applications.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <footer>
        <div>
          <a
            href="https://github.com/Bhavyaratra/Intereact"
            target="_blank"
            style={{ color: "black" }}
          >
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </footer>
    </>
  );
}
