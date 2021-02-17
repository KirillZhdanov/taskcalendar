import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLink, StyledHeader } from "../StyledComponents";
import { useSelector, useDispatch } from 'react-redux';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { signOut } from '../../redux/actions';


const Header = () => {
    const { isAuth, response } = useSelector<any, any>(state => state.authReducer);
    const [user] = useAuthState(auth)
    console.log(isAuth);
    const dispatch = useDispatch()
    const handleSignOut = () => {
        dispatch(signOut())
    }
    return (
        <StyledHeader>
            <h1>Task Calendar</h1>
            {!(user) ? (
                <div>
                    <StyledLink as={Link} to="/login">Login/Sign Up</StyledLink>
                </div>
            ) : (<><div>{user?.email}</div><button onClick={handleSignOut}>Sign Out</button></>)}
        </StyledHeader>
    )
}

export default Header
