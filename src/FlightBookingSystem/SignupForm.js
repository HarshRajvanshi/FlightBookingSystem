import React, { useEffect, useState } from 'react';
import validation from './Validation';
import SignupFormSuccess from "./SignupFormSuccess";
import "./Signup.css";

export default function SignupForm(props) {
    const { submitForm } = props;

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [isRegistered, setRegistered] = useState(false);

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            setRegistered(true);
        }
    }, [errors]);

    if (isRegistered) {
        return <SignupFormSuccess />
    }

    return (
        <div className="c">
            <div className="app-wrapper">
                <div>
                    <h2 className="t">Create Account</h2>
                </div>

                <form className="form-wrapper">
                    <div className="name">
                        <label className='label'>Full Name</label>
                        <input className='input' type="text" name="fullname" value={values.fullname} onChange={handleChange} />
                        {errors.fullname && <p className='error'>{errors.fullname}</p>}
                    </div>
                    <div className="email">
                        <label className='label'>Email</label>
                        <input className='input' type="email" name="email" value={values.email} onChange={handleChange} />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className='label'>Password</label>
                        <input className='input' type="password" name="password" value={values.password} onChange={handleChange} />
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div>
                        <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>

            </div>

        </div>
    )

}