import { 
    SCHEDULES_ADD_ITEM, 
    SCHEDULES_FETCH_ITEM, 
    SCHEDULES_SET_LOADING, 
    SCHEDULES_DELETE_ITEM,
    SCHEDULES_ASYNC_FAILURE,
    SCHEDULES_RESET_ERROR,
} from "./actions";
const init = {
    items: [],
    isLoading: false,
    error: null
};

const scheduelsReducer = (state = init, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case SCHEDULES_ADD_ITEM:
        // isLoadingはSCHEDULES_ADD_ITEMの時は無関係なので前回のstateと同じものを返す
            return {
                ...state,
                items: [ ...state.items, payload],
                isLoading: false
            };
            case SCHEDULES_SET_LOADING:
                return {...state, isLoading: true};
            case SCHEDULES_FETCH_ITEM:
                return {...state, isLoading: false, items:payload};
            case SCHEDULES_DELETE_ITEM:
                return {...state, isLoading: false, items:payload};
            case SCHEDULES_ASYNC_FAILURE:
                return {...state, error};
            case SCHEDULES_RESET_ERROR:
                return {...state, error: null};
        default:
            return state;
    }

}

export default scheduelsReducer;