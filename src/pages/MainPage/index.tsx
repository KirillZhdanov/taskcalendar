import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLink, Calendar } from "../../components";



const MainPage = () => {

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