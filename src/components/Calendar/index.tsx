import React from 'react';
import 'antd/dist/antd.css';
import './style.css'
import { Calendar as CalendarAntd } from 'antd';
import { dateFormat } from "../../utils";
import { CalendarState, Task } from '../../models';


const getListData = (value: moment.Moment, data: Task[]) => {
    const textDate = dateFormat(value.year(), value.month() + 1, value.date());
    return data.filter((item: Task) => item.currentDate === textDate);
}

const dateCellRender = (value: moment.Moment, data: Task[]) => {
    const listData = getListData(value, data);
    const taskDayHoursTotal = listData.reduce((acc: number, curr: Task) => acc + Number(curr.hours), 0) || 0;
    return (
        <div className="tasks" >
            <div className={`task ${taskDayHoursTotal > 8 ? "red" : taskDayHoursTotal >= 4 ? "green" : "gray"}`}>{Number(taskDayHoursTotal)}</div>
        </div>
    );
}

const Calendar = ({ tasks }: CalendarState) => {

    return (
        <>
            <CalendarAntd dateCellRender={(value) => dateCellRender(value, tasks)} />
        </>
    )
}

export default Calendar
