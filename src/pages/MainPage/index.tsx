import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Calendar from '../../components/Calendar';



export const MainPage = () => {
    const state = useSelector<any, any>(state => state);
    const dispatch = useDispatch();

    console.log("STATE: ", state);
    return (
        <div>
            MainPage
            <Calendar />
        </div>
    )
}
