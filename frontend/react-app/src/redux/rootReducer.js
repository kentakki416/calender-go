import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import sidemenuReducer from "./sidemenu/reducer";

const rootReducer = combineReducers({ 
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    sidemenu: sidemenuReducer
});

export default rootReducer;