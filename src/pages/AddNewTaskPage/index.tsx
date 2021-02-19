import React from 'react'
import { Link } from 'react-router-dom';
import { FormBtns, FormContainer, FormInput, StyledBtn, StyledLink } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { writeTaskToDB } from "../../redux/actions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { dateFormat } from "../../utils";
import { AddNewTask, Task } from '../../models';
import { RootState } from '../../redux/store';



const AddNewTaskPage = () => {
    const [user] = useAuthState(auth)
    const uid = user.uid;
    const tasks = useSelector((state: RootState) => state.calendarReducer.tasks);
    const dispatch = useDispatch();
    const onSubmit = (data: AddNewTask) => {
        const date = new Date(data.taskDate);
        const formatedDate = dateFormat(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const selectedDateTasksHours = tasks.filter(el => el.currentDate === formatedDate).reduce((acc: number, curr: Task) => acc + Number(curr.hours), 0);
        const TotalHours = selectedDateTasksHours + Number(data.hours);
        if (TotalHours <= 24 && TotalHours > 0) {
            dispatch(writeTaskToDB({ user: uid, dbcell: { currentDate: dateFormat(date.getFullYear(), date.getMonth() + 1, date.getDate()), hours: data.hours } }))
        }

    }
    const { register, handleSubmit } = useForm();

    return (
        <FormContainer>
            <StyledLink as={Link} to="/">Back</StyledLink>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Date:</label>
                    <FormInput name="taskDate" type="date" ref={register} required pattern="\d{2}.\d{2}.\d{4}" />
                </div>
                <div>
                    <label>Hours:</label>
                    <FormInput name="hours" type="number" ref={register} required min="0" max="24" />
                </div>
                <FormBtns>
                    <StyledBtn name="login" type="submit" >Submit</StyledBtn>
                </FormBtns>
            </form>
        </FormContainer>
    )
}

export default AddNewTaskPage
