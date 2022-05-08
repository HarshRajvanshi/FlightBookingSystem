import React from "react";
import { Link } from "react-router-dom";
import './Signup.css';

const SignupFormSuccess = () => {
    console.log("hello")
    return (
        <div className="container2">
            <div className="app-wrapper">
                <h1 className="form-success">Account Created!</h1>
                <div className="buttonWrapper">
                    <Link to="/home" className="butt">Back to home</Link>
                </div>

            </div>
        </div>
    );
};

export default SignupFormSuccess;