import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';
import { loginWithEmail, registrationWithEmail } from "../../redux/actions";
import { useForm } from "react-hook-form";

interface Props {

}

const AuthPage = ({ history }: any) => {
    const isAuth = useSelector<any, any>(state => state.authReducer.isAuth);
    const dispatch = useDispatch();
    const formAction = { type: "login" }

    const onSubmit = (data: any) => {
        if (formAction.type === "login")
            dispatch(loginWithEmail({ email: data.email, password: data.password }));
        else
            dispatch(registrationWithEmail({ email: data.email, password: data.password }))
    }
    const toggleActionType = (e: any) => {
        formAction.type = e.target.name;
    }

    const { register, handleSubmit } = useForm();
    React.useEffect(() => {
        if (isAuth || localStorage.getItem("isAuth"))
            history.push("/")
    }, [isAuth])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
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
            </form>
        </div>
    )
}

export default withRouter(AuthPage);
