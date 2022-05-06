import React from "react";

const validation = (values) => {
    let errors={};
    if(!values.fullname){
        errors.fullname="Name is required."
    } else if(!/[a-zA-Z]/.test(values.fullname)){
        errors.fullname="Name is invalid."
    }
    if(!values.email){
        errors.email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.password){
        errors.password="Password is required."
    }else if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&]).{8,20}$/.test(values.password)){
       errors.password="Password is invalid."
    }

    return errors;
};

export default validation;