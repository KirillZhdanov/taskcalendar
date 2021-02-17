import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLink } from "../../components/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { writeTaskToDB } from "../../redux/actions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';

interface Props {

}

const AddNewEventPage = (props: Props) => {
    // const user = useSelector<any, any>(state => state.authReducer.response.user.uid);
    const [user] = useAuthState(auth)
    const uid = user.uid;
    const dispatch = useDispatch();
    const onSubmit = (data: any) => {
        console.log(data)
        dispatch(writeTaskToDB({ user: uid, dbcell: { currentDate: data.taskDate, hours: data.hours } }))
    }
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <StyledLink as={Link} to="/">Back</StyledLink>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Date:</label>
                    <input name="taskDate" type="text" ref={register} required />
                </div>
                <div>
                    <label>Hours:</label>
                    <input name="hours" type="text" ref={register} required />
                </div>
                <div>
                    <button name="login" type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewEventPage
