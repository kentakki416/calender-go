import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem, schedulesDeleteItem } from "./actions";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({month, year}) => async dispatch => {
    dispatch(schedulesSetLoading());

    const result = await get(`schedules?month=${month}&year=${year}`);

    const formatedSchedule = result.map(r => formatSchedule(r));
    
    dispatch(schedulesFetchItem(formatedSchedule)); 
}

export const asyncSchedulesAddItem = schedule => async dispatch => {
    dispatch(schedulesSetLoading());

    const body = { ...schedule, date: schedule.date.add(1,'d').toISOString()};
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
}

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    const currentSchedules = getState().schedules.items;

    await deleteRequest(`schedules/delete/${id}`);

    const newSchedules = currentSchedules.filter(s => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
}