import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css"

function ForgotPassword(){
    const[email,setEmail] = useState("");
    const[error,setError] = useState("");
    const[alert,setAlert] = useState("");

    function changeEmail(e){
        setEmail(e.target.value)
        setError("")
    }

    function submitForgotPassword(){
        if(!email){
            setError("Email is required")
        } else{
            axios.put("http://localhost:3001/forgotpassword", {email:email})
            .then(res =>{
                setEmail("")
                setAlert("Please check your email, the password reset link has been sent")
                setTimeout(() => {
                    setAlert("")
                }, 5000)
            })
        }

    }

    return(
        <div className="container box__ForgotPassword">
        <div className="row align-items-center justify-content-center vh-100">
            <div className="col-lg-4">
                <div className="card card_box">
                {/* <img src="images/LOGO_1.png" style={{ width:"150px", heigth:"150px" }} /> */}
                    <div className="card-body">
                    {
                        alert&&(
                            <div className="alert alert-primary">
                                <p>{alert}</p>
                            </div>
                        )  
                    }
                    {
                        error&&(
                            <div className="alert alert-danger">
                                <p>{error}</p>
                            </div>
                        )  
                    }
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" value={email} onChange={changeEmail}/>
                        </div>
                        <button className="btn btn-primary" onClick={submitForgotPassword}>Submit</button>
                        <Link to="/" class="btn btn-warning ms-1" onClick="window.location.reload();">Back</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword;