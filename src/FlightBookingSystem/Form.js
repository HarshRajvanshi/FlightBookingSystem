import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupFormSuccess from "./SignupFormSuccess";
import './Signup.css';

export default function Form() {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return <div>
        {!formIsSubmitted ? <SignupForm shouldHide={"hello"} submitForm={submitForm} /> : <SignupFormSuccess />}
    </div>;
};

