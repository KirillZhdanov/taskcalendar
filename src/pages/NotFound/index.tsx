import React from 'react'
import { StyledBackground, StyledLink } from '../../components'
import image from "../../assets/images/404.png"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <StyledBackground imageUrl={image}>
            <StyledLink as={Link} to="/">Back</StyledLink>
        </StyledBackground>
    )
}

export default NotFound
