import React from 'react'
import { useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { loginWithEmail, registrationWithEmail } from "../../redux/actions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { FormBtns, FormInput, StyledBtn, FormContainer } from '../../components';
import { AuthFormInitialValues, RegistrationEmailPayload } from '../../models';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';


const Auth = () => {
    const [user] = useAuthState(auth)
    const dispatch = useDispatch();
    const formAction = { type: "login" }
    const toggleActionType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const { name } = e.target as HTMLButtonElement;
        formAction.type = name;
    }
    const onSubmit = (data: RegistrationEmailPayload, actions: FormikHelpers<any>) => {
        if (formAction.type === "login")
            dispatch(loginWithEmail({ email: data.email, password: data.password }));
        else {
            dispatch(registrationWithEmail({ email: data.email, password: data.password, userName: data.userName }));
        }
        actions.setSubmitting(false);
    }
    const initialValues: AuthFormInitialValues = { userName: '', email: '', password: '' };
    return (
        <FormContainer>{
            !user ? (
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object({
                        userName: Yup.string().min(6, 'User name should be longer than 6 characters'),
                        email: Yup.string().email().required(),
                        password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
                    })
                    }
                    onSubmit={onSubmit}
                >{({ errors, touched }) => (
                    <Form>
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <FormInput as={Field} id="userName" name="userName" placeholder="User Name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <FormInput as={Field} id="email" name="email" placeholder="example@gmail.com" />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <FormInput as={Field} id="password" name="password" type="password" placeholder="Password" />
                            {errors.password && touched.password ? (
                                <div>{errors.password}</div>
                            ) : null}
                        </div>
                        <FormBtns>
                            <StyledBtn name="login" type="submit" onClick={toggleActionType}>Login</StyledBtn>
                            <StyledBtn name="register" type="submit" onClick={toggleActionType}>Register</StyledBtn>
                        </FormBtns>
                    </Form>)}
                </Formik>) : (<Redirect to="/" />)}
        </FormContainer>
    );
}

export default Auth;
