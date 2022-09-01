import React, { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import "./ResetPassword.css"

function ResetPassword(){
    const params = useParams();
    const[password,setPassword] = useState("");
    const[errorPassword,setErrorPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");
    const[errorConfirmPassword,setErrorConfirmPassword] = useState("");
    const[alert,setAlert] = useState("");

    function changePassword(e){
        const value = e.target.value
        setPassword(value);

        if(!value){
            setErrorPassword("Password cannot be empty");
        } else{
            setErrorPassword("");
        }
    }

    function changeConfirmPassword(e){
        const value = e.target.value
        setConfirmPassword(value);

        if(!value){
            setErrorConfirmPassword("Confirm password cannot be empty");
        } else if(password !== value){
            setErrorConfirmPassword("passwords are not the same");
        } else{
            setErrorConfirmPassword("");
        }
    }

    function buttonSubmitPassword() {
        const data = {
            password: password,
            token: params.token
        }
        axios.put("http://localhost:3001/resetpassword", data)
        .then(res => {
            if(res){
                setPassword("")
                setConfirmPassword("")
                setAlert("Password changed successfully")
                setTimeout(() => {
                    setAlert("")
                },4000)
            }
        })
    }
   
    return (
        <div className="container box__ResetPassword">
        <div className="row align-items-center justify-content-center vh-100">
            <div className="col-lg-4">
                <div className="card card_box">
                    <div className="card-body">
                    {
                        alert&&(
                            <div className="alert alert-primary">
                                {alert}
                            </div>
                        )
                    }
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">New Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={changePassword}/>
                        </div>
                        {
                                errorPassword && (
                                    <div className="alert alert-danger">
                                    <p className="text-danger">{errorPassword}</p>
                                    </div>
                                )
                            }
                            <div className="mb-3">
                            <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" value={confirmPassword} onChange={changeConfirmPassword}/>
                        </div>
                        {
                                errorConfirmPassword && (
                                    <div className="alert alert-danger">
                                    <p className="text-danger">{errorConfirmPassword}</p>
                                    </div>
                                )
                            }
                        <button className="btn btn-primary" onClick={buttonSubmitPassword}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ResetPassword