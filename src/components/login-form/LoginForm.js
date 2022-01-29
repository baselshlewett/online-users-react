import { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { login } from "../../store/user/userSlice";
import { postLogin } from "../../services/User.service";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ email, setEmail] = useState("");
    const [ name, setName] = useState("");

    const handleEmailChange = (event) => {
        let email = event.target.value;
        setEmail(email);
    }

    const handleNameChange = (event) => {
        let name = event.target.value;
        setName(name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // we do simple validation to check that email and name are set
        if (!validator.isEmail(email)) {
            // TODO: change with popup
            alert("Invalid Email");
            return;
        }

        if (!validator.isAlphanumeric(name, 'en-US', { ignore: '\s' })) {
            // TODO: change with popup
            alert("Invalid Name");
            return;
        }

        postLogin({ email, name }).then((res) => {
            dispatch(login(res ?? null));
            navigate("/online-users");
        })
        
    }

    return (
        <div className="login__form--container">
            <h1 className="login__form--title">
                Login to start chatting
            </h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <label htmlFor="fname">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
                <label htmlFor="lname">Full Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;