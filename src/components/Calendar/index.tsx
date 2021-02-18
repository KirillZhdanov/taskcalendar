import React from 'react';
import 'antd/dist/antd.css';
import { Calendar as CalendarAntd } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { readCalendarData } from '../../redux/actions';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';
import { dateFormat } from "../../utils";
import { RootState } from '../../redux/store';
import { Task } from '../../models';


const getListData = (value: moment.Moment, data: Task[]) => {

    const textDate = dateFormat(value.year(), value.month() + 1, value.date());
    return data.filter((item: Task) => item.currentDate === textDate);
}
const dateCellRender = (value: moment.Moment, data: any) => {
    const listData = getListData(value, data);

    const taskDayHoursTotal = listData.reduce((acc: number, curr: Task) => acc + Number(curr.hours), 0) || 0;
    return (
        <div className="tasks" >
            <div className={`task ${taskDayHoursTotal > 8 ? "red" : taskDayHoursTotal >= 4 ? "green" : "gray"}`}>{Number(taskDayHoursTotal)}</div>
        </div>
    );
}

const Calendar = () => {
    const [user] = useAuthState(auth);
    const uid = user?.uid;
    const calendarReducer = useSelector((state: RootState) => state.calendarReducer);
    const tasks = Object.values(calendarReducer.tasks);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(readCalendarData(uid));
    }, [user, uid])
    return (
        <>
            <CalendarAntd dateCellRender={(value) => dateCellRender(value, tasks)} />
        </>
    )
}

export default Calendar
