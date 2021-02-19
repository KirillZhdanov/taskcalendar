import React from "react"
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { ProtectedRoute } from "../../models";

const ProtectedRouter = (props: ProtectedRoute) => {
    const [user] = useAuthState(auth)
    if (!user) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />;
}

export default ProtectedRouter
