import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLink } from "../../components";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { writeTaskToDB } from "../../redux/actions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { dateFormat } from "../../utils";
import { AddNewTask } from '../../models';


const AddNewTaskPage = () => {
    const [user] = useAuthState(auth)
    const uid = user.uid;
    const dispatch = useDispatch();
    const onSubmit = (data: AddNewTask) => {
        const date = new Date(data.taskDate);
        dispatch(writeTaskToDB({ user: uid, dbcell: { currentDate: dateFormat(date.getFullYear(), date.getMonth() + 1, date.getDate()), hours: data.hours } }))
    }
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <StyledLink as={Link} to="/">Back</StyledLink>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Date:</label>
                    <input name="taskDate" type="date" ref={register} required pattern="\d{2}.\d{2}.\d{4}" />
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

export default AddNewTaskPage
