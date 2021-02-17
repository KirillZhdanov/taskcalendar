import React from 'react';
import 'antd/dist/antd.css';
import { Calendar as CalendarAntd } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { readCalendarData } from '../../redux/actions';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../redux/rsf';

interface Props {

}
function dateFormat(year: number, month: number, day: number) {
    const m = (month < 10) ? `0${month}` : month;
    const d = (day < 10) ? `0${day}` : day;
    return `${d}.${m}.${year}`;
};
const getListData = (value: any, data: any) => {

    const textDate = dateFormat(value.year(), value.month() + 1, value.date());
    return data.filter((item: any) => item.currentDate === textDate);
}
const dateCellRender = (value: any, data: any) => {
    const listData = getListData(value, data);

    const taskDayHoursTotal = listData.reduce((acc: any, curr: any) => acc + curr.hours, 0);
    return (
        <div className="tasks" >
            <div className={`task ${taskDayHoursTotal > 8 ? "red" : taskDayHoursTotal >= 4 ? "green" : "gray"}`}>{Number(taskDayHoursTotal)}</div>
        </div>
    );
}
const Calendar = (props: Props) => {
    const [user] = useAuthState(auth);
    const uid = user.uid;
    const calendarReducer = useSelector<any, any>(state => state.calendarReducer);
    const tasks = Object.values(calendarReducer)//[{currentDate:"14.01.2021",hours:"8"},{currentDate:"11.01.2021",hours:"8"},{currentDate:"19.01.2021",hours:"8"}];
    console.log("TASKS", tasks)

    /*[{ name: "qwerwq", currentDate: "16.02.2021", hours: 8 },
    { name: "aaaa", currentDate: "16.02.2021", hours: 4 },
    { name: "qwerwq", currentDate: "15.02.2021", hours: 8 },
    { name: "aaaa", currentDate: "14.02.2021", hours: 4 }];*/
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(readCalendarData(uid));
    }, [user, uid])
    React.useEffect(() => { }, [tasks])
    return (
        <>
            <CalendarAntd
                dateCellRender={(value) => dateCellRender(value, tasks)}
            />
        </>
    )
}

export default Calendar
