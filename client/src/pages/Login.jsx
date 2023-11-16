import { useState } from "react";
import axios from "axios";
import "../css/Login.css";
import { Link } from "react-router-dom";
// import {useNavigate} from "react-router";
//import "./backend/index";
// import { useHistory } from "react-router";

function Login() {
  // const history=useNavigate();
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3500/api/users", {
          name,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("Login successfully");
            localStorage.setItem("token", res.data.token);
            // history('/')
          } else if (res.data === "not exist") {
            alert("Email id or password is not valid");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Login">
      <div className="login-form">
        <h3 className="title">
          <span className="back-btn">
            <Link to="/">back</Link>
          </span>
          Login
        </h3>
        <form action="/test" method="post">
          <div className="input-container">
            <label id="uname">Username</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="input"
              placeholder="name"
              type="text"
            />
          </div>
          <div className="input-container">
            <label id="uname">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input"
              placeholder="password"
              type="password"
            />
          </div>
          <div className="button-container">
            <input
              type="submit"
              onClick={submit}
              className=" btn btn-secondary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
