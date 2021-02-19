import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLink, Calendar } from "../../components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';



const MainPage = () => {
    const [user] = useAuthState(auth)
    React.useEffect(() => { }, [user])
    return (
        <>
            <div>
                <StyledLink as={Link} to="/AddNewTask">Add New Task</StyledLink>
            </div>
            <Calendar />
        </>
    )
}
export default MainPage;