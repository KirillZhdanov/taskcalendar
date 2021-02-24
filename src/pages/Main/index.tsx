import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLink, Calendar } from "../../components";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../redux/rsf';
import { readCalendarData } from '../../redux/actions';
import { RootState } from '../../redux/store';



const Main = () => {
    const [user] = useAuthState(auth);
    const uid = user?.uid;
    const tasks = useSelector((state: RootState) => state.calendarReducer.tasks);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(readCalendarData(uid));
    }, [uid])


    return (
        <>
            <div>
                <StyledLink as={Link} to="/AddNewTask">Add New Task</StyledLink>
            </div>
            <Calendar tasks={tasks} />
        </>
    )
}
export default Main;