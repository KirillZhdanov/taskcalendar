import React from 'react'
import { useSelector } from "react-redux";
import Calendar from '../../components/Calendar';
import { Link } from 'react-router-dom';
import { StyledLink } from "../../components/StyledComponents";



export const MainPage = () => {
    const state = useSelector<any, any>(state => state);

    console.log("STATE: ", state);

    return (
        <div>
            MainPage
            <StyledLink as={Link} to="/AddNewTask">Add New Task</StyledLink>

            <Calendar />
        </div>
    )
}
