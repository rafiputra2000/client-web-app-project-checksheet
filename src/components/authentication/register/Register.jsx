import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css"

function Register(){
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[alert,setAlert] = useState("");
    const[error,setError] = useState("");

    function onChangeUsername(e){
        const value = e.target.value
        setUsername(value);
        setError("");
    }

    function onChangeEmail(e){
        const value = e.target.value
        setEmail(value);
        setError("");
    }

    function onChangePassword(e){
        const value = e.target.value
        setPassword(value);
        setError("");
    }

    function clickRegister(){
        const data = {
            username: username,
            email: email,
            password: password
        }
        axios.post("http://localhost:3001/Register", data)
        .then(result => {
            if(result){
                if(result.data){
                    setUsername("")
                    setEmail("")
                    setPassword("")
                    setAlert(result.data.message);
                    setTimeout(function(){
                        setAlert("")
                    }, 5000)
                }
            }
        })
        .catch(e => {
            setError(e.response.data.message);
        })
        }
    
    return(
    <div className="container box__Register">
        <div className="row align-items-center justify-content-center vh-100">
            <div className="col-lg-4">
                <div className="card card_box">
                    <div className="card_img">
                        <img style={{ width:"150px", heigth:"150px" }} src="images/LOGO_1.png" />
                    </div>
                    <div className="card-body">
                    {
                        error&&(
                            <div className="alert alert-danger">
                                <p>{error}</p>
                            </div>
                        )  
                    }
                    {
                        alert&&(
                            <div className="alert alert-primary">
                                <p>{alert}</p>
                            </div>
                        )  
                    }
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={onChangeUsername}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={onChangeEmail}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={onChangePassword}/>
                        </div>
                        <button className="btn btn-primary" onClick={clickRegister}>Register</button>
                        <Link to="/" className="btn btn-warning ms-1" onClick="window.location.reload();">Back</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register;