import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { FormContainer } from '../../components';
import { notification } from 'antd';
import { RootState } from '../../redux/store';
import Authentication from '../../components/forms/Authentication';
import { setError } from '../../redux/actions';


const Auth = () => {
    const [user] = useAuthState(auth)
    const { error } = useSelector((state: RootState) => state.errorsReducer);
    const dispatch = useDispatch()
    const openNotificationWithIcon = (data: string) => {
        notification["error"]({
            message: 'Authentication failed',
            description: `${data} `,
        });
        dispatch(setError(''))
    }
    React.useEffect(() => {
        if (error)
            openNotificationWithIcon(error);
    }, [error])
    return (
        <FormContainer>{
            !user ? (
                <Authentication />
            ) : (<Redirect to="/" />)
        }
        </FormContainer>
    );
}

export default Auth;
