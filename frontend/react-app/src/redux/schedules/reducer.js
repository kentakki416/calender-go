import dayjs from "dayjs";
import { SCHEDULES_ADD_ITEM } from "./actions";
const init = {
    items: [
        {
            id: 1,
            title: "test",
            date: dayjs(),
            location: "会議室",
            description: "経営戦略について"
        }
    ],
    isLoading: false
};

const scheduelsReducer = (state = init, action) => {
    const { type, payload } = action;

    switch (type) {
        case SCHEDULES_ADD_ITEM:
        // isLoadingはSCHEDULES_ADD_ITEMの時は無関係なので前回のstateと同じものを返す
            return {
                ...state,
                items: [ ...state.items, {...payload, id: state.items.length + 1}]
                // imtesにはpayloadとして渡ってきた新規の予定を追加した配列を返す
                // reduxは元のstateに影響を与えてはいけないのでpush()は使えない
            };
        default:
            return state;
    }
}

export default scheduelsReducer;