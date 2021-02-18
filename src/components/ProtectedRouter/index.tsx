import React from "react"
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';

const ProtectedRouter = (props: any) => {
    const [user] = useAuthState(auth)
    console.log(props);
    if (!user) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />;
}

export default ProtectedRouter
