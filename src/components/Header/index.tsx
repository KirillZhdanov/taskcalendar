import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLink, StyledHeader } from "../StyledComponents";
import { useSelector } from 'react-redux';


const Header = () => {
    const { isAuth, response } = useSelector<any, any>(state => state.authReducer);
    console.log(isAuth)
    return (
        <StyledHeader>
            <h1>Task Calendar</h1>
            {!(isAuth || localStorage.getItem("isAuth")) ? (
                <div>
                    <StyledLink as={Link} to="/login">Login/Sign Up</StyledLink>
                </div>
            ) : (<div>{response?.user?.email}</div>)}
        </StyledHeader>
    )
}

export default Header
