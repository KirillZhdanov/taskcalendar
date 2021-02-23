import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { FormBtns, FormContainer, FormInput, StyledBtn, StyledLink } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { writeTaskToDB } from "../../redux/actions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { dateFormat } from "../../utils";
import { AddNewTaskData, Task } from '../../models';
import { RootState } from '../../redux/store';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';


const AddNewTask = () => {
    const [user] = useAuthState(auth);
    const [redirection, setRedirect] = React.useState(false);
    const uid = user.uid;
    const tasks = useSelector((state: RootState) => state.calendarReducer.tasks);
    const dispatch = useDispatch();
    const onSubmit = (data: AddNewTaskData, actions: FormikHelpers<any>) => {
        const date = new Date(data.taskDate);
        const formatedDate = dateFormat(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const selectedDateTasksHours = tasks.filter(el => el.currentDate === formatedDate).reduce((acc: number, curr: Task) => acc + Number(curr.hours), 0);
        const TotalHours = selectedDateTasksHours + Number(data.hours);
        if (TotalHours <= 24 && Number(data.hours) > 0) {
            dispatch(writeTaskToDB({ user: uid, dbcell: { currentDate: dateFormat(date.getFullYear(), date.getMonth() + 1, date.getDate()), hours: data.hours } }));
            setRedirect(true);
        }
        actions.setSubmitting(false);

    }
    const dateNow = new Date();
    const dateNowMonth = dateNow.getMonth() + 1;

    const initialValues: AddNewTaskData = { taskDate: `${dateNow.getFullYear()}-${dateNowMonth > 9 ? dateNowMonth : "0" + dateNowMonth}-${dateNow.getDate()}`, hours: 0 };
    return (
        <>{!redirection ?
            (<FormContainer>
                <StyledLink as={Link} to="/">Back</StyledLink>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object({
                        taskDate: Yup.date().required(),
                        hours: Yup.number().required().positive().integer(),
                    })
                    }
                    onSubmit={onSubmit}
                >{({ errors, touched }) => (
                    <Form >
                        <div>
                            <label>Date:</label>
                            <FormInput as={Field} id="taskDate" name="taskDate" type="date" placeholder="dd.mm.yyyy" />
                            {errors.taskDate && touched.taskDate ? (
                                <div>{errors.taskDate}</div>
                            ) : null}
                        </div>
                        <div>
                            <label>Hours:</label>
                            <FormInput as={Field} id="hours" name="hours" type="number" />
                            {errors.hours && touched.hours ? (
                                <div>{errors.hours}</div>
                            ) : null}
                        </div>
                        <FormBtns>
                            <StyledBtn name="login" type="submit" >Submit</StyledBtn>
                        </FormBtns>
                    </Form>)}
                </Formik>
            </FormContainer>) : (<Redirect to="/" />)
        }
        </>
    )
}

export default AddNewTask
