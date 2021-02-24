import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { FormContainer, StyledLink } from "../../components";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { RootState } from '../../redux/store';
import NewTask from '../../components/forms/NewTask';
import { notification } from 'antd';
import { setError } from '../../redux/actions';


const AddNewTask = () => {
    const [user] = useAuthState(auth);
    const uid = user.uid;
    const { calendarReducer, errorsReducer } = useSelector((state: RootState) => state);
    const tasks = calendarReducer?.tasks;
    const error = errorsReducer?.error;
    const dispatch = useDispatch()
    const openNotificationWithIcon = (data: string) => {
        notification["error"]({
            message: 'Saving new task failed',
            description: `${data} `,
        });
        dispatch(setError(''))
    }
    React.useEffect(() => {
        if (error)
            openNotificationWithIcon(error);
    }, [error])

    return (
        <>
            <FormContainer>
                <StyledLink as={Link} to="/">Back</StyledLink>
                <NewTask uid={uid} tasks={tasks} />
            </FormContainer>
        </>
    )
}

export default AddNewTask
