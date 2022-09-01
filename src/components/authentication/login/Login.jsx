import React, {useState, Fragment} from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"

function Login(){
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[redirect,setRedirect] = useState(false);
    const[error,setError] = useState("");

    function onChangeUsername(e){
        const value= e.target.value;
        setUsername(value);
        setError("")
    }

    function onChangePassword(e){
        const value= e.target.value;
        setPassword(value);
        setError("")
    }

    function submitLogin(){
      const data = {
        username: username,
        password: password
      }
      axios.post("http://localhost:3001/Login", data)
      .then(result => {
        if(result){
          localStorage.setItem("token", result.data.token)
          setRedirect(true);
        }
      })
      .catch(e => {
        setError(e.response.data.message);
      })
    }

    return(
      <Fragment>
      {
        redirect && (
          <Navigate to="/Dashboard"/>
        )
      }
        <div>
        <div id="header">
        <nav className="navbar navbar-light">
                <div className="container-fluid">
                <img style={{ width: "175px", height: "35px" }} src="images/LOGO_2.png"/>
                {/* <p className="navbar-brand">Login Dashboard</p> */}
                  <div className="d-flex" id="clock">
                    <h4 id="date-time"></h4>
                  </div>
                </div>
              </nav>
        </div>

        <div id="main">
        <div className="card mb-3 ms-auto me-auto box">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="card-body">
                    {
                      error &&(
                        <div className="alert alert-danger">
                          <p>{error}</p>
                        </div>
                      )
                    }
                        <div className="mb-4">
                        <img style= {{ width:"80px", heigth:"100px" }}className="img-logo" src="images/LOGO_7.png" alt=""/>
                            <h3 className="title">Login</h3>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label title">Please login to your account</label>
                          </div>
                        <div className="mb-3">
                            <input type="text" className="form-control inner-input" id="exampleInputEmail1" placeholder="Username" value={username} onChange={onChangeUsername}/>
                          </div>
                          <div className="mb-3">
                            <input type="password" className="form-control inner-input" id="exampleInputPassword1" placeholder="Password" value={password} onChange={onChangePassword}/>
                          </div>
                          <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary" onClick={submitLogin}>Submit</button>
                          </div>
                          <div style={{ fontSize:"14px" }} className="mb-3 mt-3">
                            <span>don't have a account ?</span>
                            <Link to="/Register">Register</Link>
                          </div>
                          <div style={{ fontSize:"14px" }} className="mb-3 mt-3">
                            <span>forgot the password ?</span>
                            <Link to="/forgot-password">click the link here</Link>
                          </div>
                        </div>
                  </div>
                  <div className="col-md-6 ms-auto me-auto box_right_login">
                  <img className= "img-right img-fluid rounded-start centered" src="images/LOGO_1.png" alt="" />
                  </div>
                </div>
              </div>
        </div>

        <footer id="footer">
            <div className="container-fluid">
                <span style={{ fontSize:"12px" }}>Powered by </span> <br />
                <img style={{ width: "280px", height:"40px" }}src="images/electroworldlogos.png"/>
              </div>
        </footer>

        </div>
        </Fragment>
        );
       

}

export default Login;