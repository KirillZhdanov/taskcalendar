import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLink, StyledHeader, StyledHeaderAuth, StyledHeaderUserName, StyledBtn } from "../StyledComponents";
import { useDispatch } from 'react-redux';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { setCalendarData, signOut } from '../../redux/actions';


const Header = () => {
    const [user] = useAuthState(auth)
    const dispatch = useDispatch()
    const handleSignOut = () => {
        dispatch(signOut());
        dispatch(setCalendarData([{}]))
    }
    return (
        <StyledHeader>
            <h1>Task Calendar</h1>
            {!(user) ? (
                <div>
                    <StyledLink as={Link} to="/login">Login/Sign Up</StyledLink>
                </div>
            ) : (<StyledHeaderAuth><StyledHeaderUserName>{user?.email}</StyledHeaderUserName><StyledBtn onClick={handleSignOut}>Sign Out</StyledBtn></StyledHeaderAuth>)}
        </StyledHeader>
    )
}

export default Header
