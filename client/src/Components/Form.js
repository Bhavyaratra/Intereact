import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import srvcAuth from "../services/srvc-auth";
import Loader from "./shared/Loader";
export default function Form() {
  const { user, setUser } = useContext(UserContext);

  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [role, setRole] = useState("interviewer");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    if (register) {
      try {
        const res = await srvcAuth.register({
          username: fname + " " + lname,
          email,
          role,
          password: pswrd,
        });
        if (res.data.success) {
          setRegister(false);
          setPswrd("");
        }
      } catch (err) {
        setError(err.response.data.error);
        console.log(err);
      }
    } else {
      try {
        const res = await srvcAuth.login({ email, password: pswrd });
        setUser({ data: res.data.user, token: res.data.token });
        localStorage.setItem("user", {
          data: res.data.user,
          token: res.data.token,
        });
      } catch (err) {
        setError(err.response.data.error);
        console.log(err);
      }
    }
    setIsloading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="" style={{ minWidth: "280px" }}>
          <form className="">
            {register && (
              <>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  autoComplete="on"
                />
              </>
            )}

            <input
              type="email"
              className="form-control mb-4"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="on"
              required
            />

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
              value={pswrd}
              onChange={(e) => setPswrd(e.target.value)}
              autoComplete="on"
              required
            />
            {register && (
              <p>
                select role
                <select
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value={"interviewer"}>interviewer</option>
                  <option value={"candidate"}>candidate</option>
                </select>
              </p>
            )}

            <button
              type="submit"
              className="btn form-control btn-primary mb-4"
              onClick={(e) => handleSubmit(e)}
            >
              {register ? "Sign up" : "Sign in"}
            </button>

            {register ? (
              <div className="d-flex align-items-center justify-content-center pb-4">
                <p className="mb-0 me-2">Already have an account?</p>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setRegister(!register);
                    setPswrd("");
                  }}
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="d-flex align-items-center justify-content-center pb-4">
                <p className="mb-0 me-2">Don't have an account?</p>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setRegister(!register);
                    setPswrd("");
                  }}
                >
                  Create new
                </button>
              </div>
            )}
          </form>
          {error && <p className="text-danger">{error}</p>}
        </div>
      )}
    </>
  );
}
