import {connect} from "react-redux";

import Navigation from "./presentation";
import { getCurrentMonth, getNextMonth, getPreviousMonth, getMonth, formatMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";
import { changeNavigationMenu } from "../../redux/sidemenu/actions";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

const mapStaetToProps = state => ({ calendar: state.calendar, sidemenu: state.sidemenu});

const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    },
    changeActive: () => {
        dispatch(changeNavigationMenu());
    },
    fetchItem: month => {
        dispatch(asyncSchedulesFetchItem(month));
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
        dispatchProps.fetchItem(nextMonth);
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(previousMonth);
        dispatchProps.fetchItem(previousMonth);
    },
    setMonth: dayObj => {
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);
        dispatchProps.fetchItem(month);
    },
    setCurrentMonth: () => {
        const currentMonth = getCurrentMonth()
        dispatchProps.setMonth(currentMonth);
    },
    changeActive: () => {
        dispatchProps.changeActive();
    }
});

export default connect(
    mapStaetToProps, 
    mapDispatchToProps,
    mergeProps
)(Navigation);