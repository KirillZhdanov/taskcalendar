import React from 'react';
import 'antd/dist/antd.css';
import { Calendar as CalendarAntd } from 'antd';
import CalendarCell from "../CalendarCell";

interface Props {

}
const getListData = () => {
    return [];
}
const dateCellRender = (value: any, data: any) => {
    const listData = getListData();
    return (
        <ul className="tasks">
            {listData.map((item: any, idx: number) => (
                <CalendarCell key={`${item.name}_${idx}`} data={data} />
            ))}
        </ul>
    );
}
const Calendar = (props: Props) => {
    const tasks = [{}];
    return (
        <>
            <CalendarAntd
                dateCellRender={(value) => dateCellRender(value, tasks)}
            />
        </>
    )
}

export default Calendar
