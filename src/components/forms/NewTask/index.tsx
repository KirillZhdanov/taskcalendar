import React from 'react'
import { useHistory } from 'react-router-dom';
import { FormBtns, FormInput, StyledBtn } from "../..";
import { useDispatch } from "react-redux";
import { setError, writeTaskToDB } from "../../../redux/actions";
import { dateFormat } from "../../../utils";
import { NewTaskDataToAdd, Task } from '../../../models';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';


interface NewTaskProps {
    uid: string,
    tasks: Task[]
}
const NewTask = ({ uid, tasks }: NewTaskProps) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = (data: NewTaskDataToAdd, actions: FormikHelpers<any>) => {
        const date = new Date(data.taskDate);
        const formatedDate = dateFormat(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const selectedDateTasksHours = tasks.filter(el => el.currentDate === formatedDate).reduce((acc: number, curr: Task) => acc + Number(curr.hours), 0);
        const TotalHours = selectedDateTasksHours + Number(data.hours);
        if (TotalHours <= 24 && Number(data.hours) > 0) {
            dispatch(writeTaskToDB({ user: uid, dbcell: { currentDate: dateFormat(date.getFullYear(), date.getMonth() + 1, date.getDate()), hours: data.hours } }));
            history.push("/");
        }
        else {
            dispatch(setError(`Total hours value is more than 24 and equal to ${TotalHours}`))
        }
        actions.setSubmitting(false);

    }
    const dateNow = new Date();
    const dateNowMonth = dateNow.getMonth() + 1;

    const initialValues: NewTaskDataToAdd = { taskDate: `${dateNow.getFullYear()}-${dateNowMonth > 9 ? dateNowMonth : "0" + dateNowMonth}-${dateNow.getDate()}`, hours: 0 };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                taskDate: Yup.date().required(),
                hours: Yup.number().required().positive().integer().max(24),
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
    )
}

export default NewTask;
