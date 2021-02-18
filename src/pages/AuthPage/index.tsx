import React from 'react'
import { useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { loginWithEmail, registrationWithEmail } from "../../redux/actions";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { RegistrationEmail } from '../../models';



const AuthPage = () => {
    const [user] = useAuthState(auth)
    const dispatch = useDispatch();
    const formAction = { type: "login" }
    const onSubmit = (data: RegistrationEmail) => {
        if (formAction.type === "login")
            dispatch(loginWithEmail({ email: data.email, password: data.password }));
        else
            dispatch(registrationWithEmail({ email: data.email, password: data.password, userName: data.userName }))
    }
    const toggleActionType = (e: any) => {
        formAction.type = e.target.name;
    }

    const { register, handleSubmit } = useForm();

    return (
        <div>{
            !user ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Name:</label>
                        <input name="userName" type="text" ref={register} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input name="email" type="text" ref={register} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input name="password" type="text" ref={register} required />
                    </div>
                    <div>
                        <button name="login" type="submit" onClick={toggleActionType}>Login</button>
                        <button name="register" type="submit" onClick={toggleActionType}>Register</button>
                    </div>
                </form>) : (<Redirect to="/" />)}
        </div>
    )
}

export default AuthPage;
