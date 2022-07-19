import { 
    ADD_SCHEDULE_SET_VALUE,
    ADD_SCHEDULE_OPEN_DIALOG,
    ADD_SCHEDULE_CLOSE_DIALOG
} from "./actions";

import dayjs from "dayjs";

const init = {
    form: {
        title: "",
        description: "",
        date: dayjs(),
        location: ""
    },
    isDialogOpen: false
}

const addScheduleReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_SCHEDULE_SET_VALUE:
            // 現在のstateの中に新しいformを追加しつつ、
            // form中でも現在のformに対して新しいデータを展開して追加
            return { ...state, form: { ...state.form, ...payload}};
        case ADD_SCHEDULE_OPEN_DIALOG:
            return { ...state, isDialogOpen: true};
        case ADD_SCHEDULE_CLOSE_DIALOG:
            return init;
        default:
            return state;
    }
}

export default addScheduleReducer;