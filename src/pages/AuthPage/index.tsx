import React from 'react'
import { useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { loginWithEmail, registrationWithEmail } from "../../redux/actions";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { RegistrationEmail } from '../../models';
import { FormBtns, FormInput, StyledBtn, FormContainer } from '../../components';



const AuthPage = () => {
    const [user] = useAuthState(auth)
    const dispatch = useDispatch();
    const formAction = { type: "login" }
    const onSubmit = (data: RegistrationEmail) => {
        if (formAction.type === "login")
            dispatch(loginWithEmail({ email: data.email, password: data.password }));
        else {
            dispatch(registrationWithEmail({ email: data.email, password: data.password, userName: data.userName }));
        }
    }
    const toggleActionType = (e: any) => {
        formAction.type = e.target.name;
    }

    const { register, handleSubmit } = useForm();

    return (
        <FormContainer>{
            !user ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Name:</label>
                        <FormInput name="userName" type="text" ref={register} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <FormInput name="email" type="text" ref={register} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <FormInput name="password" type="text" ref={register} required />
                    </div>
                    <FormBtns>
                        <StyledBtn name="login" type="submit" onClick={toggleActionType}>Login</StyledBtn>
                        <StyledBtn name="register" type="submit" onClick={toggleActionType}>Register</StyledBtn>
                    </FormBtns>
                </form>) : (<Redirect to="/" />)}
        </FormContainer>
    )
}

export default AuthPage;
